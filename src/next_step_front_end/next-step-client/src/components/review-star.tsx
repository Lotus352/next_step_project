import { Star } from "lucide-react";
import { calStarReview } from "@/lib/utils.ts";

function ReviewStar({
  averageRating,
  countReview,
}: {
  averageRating: number;
  countReview: number;
}) {
  const { fullStars, hasHalfStar, emptyStars } = calStarReview(averageRating);

  const displayRating = Number.isInteger(averageRating)
    ? averageRating.toFixed(1)
    : averageRating;

  return (
    <div className="flex items-center mt-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
      ))}
      {hasHalfStar && (
        <div className="relative h-4 w-4">
          <Star className="absolute inset-0 h-4 w-4 text-yellow-500" />
          <Star
            className="absolute inset-0 h-4 w-4 text-yellow-500 fill-yellow-500"
            style={{
              clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
            }}
          />
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i + fullStars} className="h-4 w-4 text-yellow-500" />
      ))}
      <span className="ml-2 text-sm text-muted-foreground">
        ({displayRating}/5 from {countReview} reviews)
      </span>
    </div>
  );
}

export default ReviewStar;
