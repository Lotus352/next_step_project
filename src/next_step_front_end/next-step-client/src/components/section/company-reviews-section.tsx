"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompanyReview from "@/components/company-review";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { fetchReviewsByCompanyId } from "@/store/slices/company-review-slice.ts";
import Loading from "@/components/loading.tsx";
import DestructiveAlert from "@/components/alert/destructive-alert.tsx";

function CompanyReviewsSection() {
  const dispatch = useDispatch<AppDispatch>();
  const { reviews, status, totalElements } = useSelector(
    (state: RootState) => state.companyReviews,
  );
  const { selectedJob } = useSelector((state: RootState) => state.jobs);
  const companyId = selectedJob?.postedBy?.company?.companyId;

  const page = 0;
  const size = 10;

  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    if (companyId) {
      dispatch(fetchReviewsByCompanyId({ companyId, page, size }));
    }
  }, [dispatch, companyId]);

  const handleShowMore = () => {
    const remain = reviews.length - visibleCount;
    if (remain > 0) {
      setVisibleCount((prev) => prev + (remain < 5 ? remain : 5));
    }
  };

  const visibleReviews = reviews.slice(0, visibleCount);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {status === "loading" && <Loading />}
        {status === "failed" && <DestructiveAlert />}
        {status === "idle" &&
          visibleReviews.map((r, i) => (
            <div key={r.reviewId}>
              <CompanyReview review={r} />
              {i < visibleReviews.length - 1 && <Separator />}
            </div>
          ))}

        {visibleCount < reviews.length && (
          <Button variant="outline" className="w-full" onClick={handleShowMore}>
            Show more reviews
          </Button>
        )}

        <p className="text-end text-sm text-muted-foreground">
          Total {totalElements} reviews
        </p>
      </CardContent>
    </Card>
  );
}

export default CompanyReviewsSection;
