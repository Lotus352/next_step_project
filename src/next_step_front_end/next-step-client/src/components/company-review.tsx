import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ReviewStar from "@/components/review-star";
import type CompanyReviewType from "@/types/company-review-type.ts";
import {fallbackInitials} from "@/lib/utils.ts";

interface Props {
  review: CompanyReviewType;
}

export default function CompanyReview({ review }: Props) {
  const fallback = fallbackInitials(review.user.username);
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className={"border border-primary"}>
            <AvatarImage
              src={review.user.avatarUrl || undefined}
              alt="/placeholder.svg?height=64&width=64"
            />
            <AvatarFallback className="text-sm">
              {fallback}
            </AvatarFallback>{" "}
          </Avatar>
          <div>
            <h4 className="font-semibold">
              {review.user.fullName || review.user.username}
            </h4>
            {review.user.experienceLevel && (
              <p className="text-sm text-muted-foreground">
                • {review.user.experienceLevel.experienceName}
              </p>
            )}
          </div>
        </div>
        <div className="flex">
          <ReviewStar averageRating={review.rating} countReview={1} />
        </div>
      </div>
      <p className={"py-2"}>{review.reviewText}</p>
    </div>
  );
}
