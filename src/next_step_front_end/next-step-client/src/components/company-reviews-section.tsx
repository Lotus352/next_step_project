import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import CompanyReview from "@/components/company-review.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Button } from "@/components/ui/button.tsx";

function CompanyReviewsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Reviews</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <CompanyReview></CompanyReview>
        <Separator />
        <CompanyReview></CompanyReview>
        <Button variant="outline" className="w-full">
          View All 78 Reviews
        </Button>
      </CardContent>
    </Card>
  );
}

export default CompanyReviewsSection;
