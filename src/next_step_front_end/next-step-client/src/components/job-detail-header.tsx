import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import {
  Bookmark,
  Briefcase,
  CalendarDays, Coins,
  MapPin,
  Share2,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import JobDetailType from "@/types/job-detail-type.ts";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";

export default function JobDetailHeader({ job }: { job: JobDetailType }) {
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-16 w-16 border-0 rounded-lg">
              <AvatarImage
                src={job.postedBy.company.logoUrl}
                alt="/placeholder.svg?height=64&width=64"
              />
              <AvatarFallback>{job.postedBy.company.name}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
              <CardDescription className="text-lg">
                {job.postedBy.company.name}
              </CardDescription>
              <div className="flex items-center mt-1 text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{job.location}</span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setBookmarked(!bookmarked)}
            >
              <Bookmark
                className={`h-5 w-5 ${bookmarked ? "fill-primary" : ""}`}
              />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-4">
          {job.salary && (
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm pb-1">Salary</span>
              <div className="flex items-center mt-1 text-sm">
                <div className="font-medium flex flex-row">
                  <span className={"flex"}>
                    <Coins className="h-5 w-5 mr-1 text-primary" />
                    {job.salary.minSalary} - {job.salary.maxSalary}{" "}
                    {job.salary.currency}
                  </span>
                  <span className={"text-[10px] px-1"}> ({job.salary.payPeriod})</span>
                </div>
              </div>
            </div>
          )}

          {job.employmentType && (
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm pb-1">
                Type of employment
              </span>
              <div className="flex items-center mt-1 text-sm">
                <Briefcase className="h-4 w-4 mr-1 text-primary" />
                <span className="font-medium">
                  {job.employmentType
                    .split("_") // Split by underscore
                    .map(
                      (word) =>
                        word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase(),
                    ) // `Capitalize each word
                    .join(" ")}{" "}
                  {/* Join words back with a space */}
                </span>
              </div>
            </div>
          )}

          {job.experienceLevels && (
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm pb-1">
                Experience
              </span>
              <div className="flex items-center mt-1 text-sm">
                <Users className="h-4 w-4 mr-1 text-primary" />
                {job.experienceLevels.map((exp, index) => (
                  <span className="font-medium pr-1" key={exp.experienceId}>{exp.experienceName}{index != (job.experienceLevels.length -1) ? ", " : ""}</span>
                )
                )}
              </div>
            </div>
          )}

          <div className="flex flex-col">
            <span className="text-muted-foreground text-sm pb-1">Posted</span>
            <div className="flex items-center mt-1 text-sm">
              <CalendarDays className="h-4 w-4 mr-1 text-primary" />
              <span className="font-medium">
                {formatDistanceToNow(new Date(job.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {job.skills.map((skill) => (
            <Badge key={skill.skillId} variant="secondary">
              {skill.skillName}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Apply Now</Button>
      </CardFooter>
    </Card>
  );
}
