"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { ChevronLeft } from "lucide-react";
import RelatedJobs from "@/components/related-jobs.tsx";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store.ts";
import { clearSelectedJob, fetchJobById } from "@/store/slices/jobs-slice.ts";
import Loading from "@/components/loading.tsx";
import ErrorPage from "@/pages/error-page.tsx";
import JobDetailHeader from "@/components/job-detail-header.tsx";
import JobDetailTabs from "@/components/job-detail-tabs.tsx";
import CompanyLocation from "@/components/company-location.tsx";
import {clearSelectedCompany} from "@/store/slices/companies-slice.ts";

export default function JobDetailPage() {
  const navigate = useNavigate();
  const { selectedJob, status } = useSelector((state: RootState) => state.jobs);
  const { jobId } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (jobId) {
      dispatch(fetchJobById(jobId));
    }
    return () => {
      dispatch(clearSelectedJob());
      dispatch(clearSelectedCompany())
    };
  }, [dispatch, jobId]);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "failed" || !selectedJob) {
    return <ErrorPage />;
  }

  // Lấy name và address từ selectedJob
  const { name = "", address = "" } = selectedJob.postedBy?.company ?? {};

  return (
    <div className="container mx-auto py-6 px-4 md:px-6">
      {/* Back button */}
      <Button
        variant="ghost"
        className="mb-6 pl-0"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back to search results
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Job Detail Header */}
          <JobDetailHeader job={selectedJob} />

          {/* Job Detail Tabs */}
          <JobDetailTabs />
        </div>

        <div className="space-y-6">
          {/* Application Card */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Apply</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">
                  Application Deadline
                </span>
                <span className="font-medium">June 30, 2025</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Applicants</span>
                <span className="font-medium">47 applied</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Interview Process</span>
                <span className="font-medium">3 rounds</span>
              </div>
              <Separator />
              <p className="text-sm text-muted-foreground">
                Apply now to join our team of talented developers building the
                future of technology.
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button className="w-full">Apply with Resume</Button>
              <Button variant="outline" className="w-full">
                Save Job
              </Button>
            </CardFooter>
          </Card>

          {/* CompanyType Location */}
          <CompanyLocation name={name} address={address} />

          {/* Related Jobs */}
          <RelatedJobs />
        </div>
      </div>
    </div>
  );
}
