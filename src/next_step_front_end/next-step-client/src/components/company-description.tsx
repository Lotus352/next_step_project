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
import { Building, Globe, MapPin, Star, Users } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store.ts";
import Company from "@/types/company.ts";

export default function CompanyDescription() {
  const { selectedJob } = useSelector((state: RootState) => state.jobs);
  if (!selectedJob) return null;
  const company: Company = selectedJob.postedBy.company;
  return (
    <Card>
      <CardHeader>
        <CardTitle>About {company.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={company.logoUrl}
              alt="/placeholder.svg?height=64&width=64"
            />
            <AvatarFallback>{company.name}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-xl font-semibold">{company.name}</h3>
            <p className="text-muted-foreground">
              {company.industries.map((industry) => (
                <p key={industry.industryId}>{industry.industryName}</p>
              ))}
              <p>• {company.countEmployees} employees</p>
            </p>
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="ml-2 text-sm text-muted-foreground">
                (4.2/5 from 78 reviews)
              </span>
            </div>
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
