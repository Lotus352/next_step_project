import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Building, Globe, MapPin, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store.ts";
import ReviewStar from "@/components/review-star.tsx";
import ErrorPage from "@/pages/error-page.tsx";
import CompanyType from "@/types/company-type.ts";

export default function CompanyDescription() {
  const { selectedJob } = useSelector((state: RootState) => state.jobs);
  if (!selectedJob) return <ErrorPage />;
  const company: CompanyType = selectedJob.postedBy.company;

  return (
    <Card>
      <CardHeader>
        <CardTitle>About {company.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-16 w-16 border-0 rounded-lg">
            <AvatarImage
              src={company.logoUrl}
              alt="/placeholder.svg?height=64&width=64"
            />
            <AvatarFallback>{company.name}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{company.name}</h3>
            <span className="text-muted-foreground">
              {company.industries.map((industry) => (
                <span key={industry.industryId}>{industry.industryName}</span>
              ))}
              <p>• {company.countEmployees} employees</p>
            </span>

            {/*Review Star*/}
            <ReviewStar
              countReview={company.countReview}
              averageRating={company.averageRating}
            />
          </div>
        </div>
        <div>{company.description}</div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex items-center space-x-2">
            <Building className="h-5 w-5 text-primary" />
            <span>Founded in {company.founded}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{company.address}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span>{company.countEmployees} employees</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-primary" />
            <span>{company.companyUrl}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
