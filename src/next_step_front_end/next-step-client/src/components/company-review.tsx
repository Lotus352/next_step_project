import { Avatar, AvatarFallback } from "@/components/ui/avatar.tsx";
import { CheckCircle2, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge.tsx";

export default function CompanyReview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-semibold">John D.</h4>
            <p className="text-sm text-muted-foreground">
              Senior Developer • 2 years
            </p>
          </div>
        </div>
        <div className="flex">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
        </div>
      </div>
      <p>
        Great place to work with lots of opportunities for growth. The team is
        supportive and management listens to feedback. Work-life balance is
        excellent.
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          <CheckCircle2 className="h-3 w-3 mr-1" /> Work-Life Balance
        </Badge>
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          <CheckCircle2 className="h-3 w-3 mr-1" /> Career Growth
        </Badge>
        <Badge
          variant="outline"
          className="bg-green-50 text-green-700 border-green-200"
        >
          <CheckCircle2 className="h-3 w-3 mr-1" /> Collaborative Team
        </Badge>
      </div>
    </div>
  );
}
