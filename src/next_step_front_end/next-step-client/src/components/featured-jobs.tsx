import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { BookmarkPlus, Clock, Coins, MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store.ts";
import { useEffect } from "react";
import { fetchFeaturedJobs } from "@/store/slices/jobs-slice.ts";
import Loading from "@/components/loading.tsx";
import AlertDestructive from "@/components/alert/destructive-alert.tsx";
import { formatDistanceToNow } from "date-fns";
import { Separator } from "@/components/ui/separator";
import SkillType from "@/types/skill-type.ts";
import { useNavigate } from "react-router-dom";

export default function FeaturedJobs({ filter }: { filter: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const { featuredJobs, status } = useSelector((state: RootState) => state.jobs);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchFeaturedJobs(filter));
  }, [dispatch, filter]);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") return <AlertDestructive />;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredJobs.length != 0
        ? featuredJobs.map((job) => (
            <Card
              key={job.jobId}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border-0 rounded-lg">
                    <AvatarImage
                      src={job.companyLogo}
                      alt={`${job.companyLogo} logo`}
                    />
                  </Avatar>
                  <div className="flex-1 space-y-1 min-w-0">
                    <h3 className="font-semibold truncate">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {job.companyName}
                    </p>
                    <div className="flex flex-col flex-wrap gap-x-3 mt-2 text-xs text-muted-foreground">
                      {/*location*/}
                      <div className="flex items-center">
                        <MapPin className="h-10 w-4 mr-2" />
                        <span>{job.location}</span>
                      </div>

                      <div className={"flex flex-row items-center flex-wrap"}>
                        {/*salary*/}
                        <div className="flex items-center pb-2">
                          <Coins className="h-4 w-4 mr-2" />
                          <div
                            className={
                              "flex bg-secondary border border-none px-[6px] py-[4px] rounded-md "
                            }
                          >
                            <span>
                              {job.salary.minSalary} - {job.salary.maxSalary}{" "}
                              {job.salary.currency}
                            </span>
                            <span className={"text-[10px] pl-1"}>
                              ({job.salary.payPeriod})
                            </span>
                          </div>
                        </div>

                        {/*employmentType*/}
                        <div className="hidden sm:flex items-center pb-2 sm:pl-2">
                          <span
                            className={
                              "border border-none px-[6px] py-[4px] bg-secondary rounded-md"
                            }
                          >
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

                      {/*createdAt*/}
                      <div className="flex items-center">
                        <Clock className="h-5 w-3 mr-1" />
                        <span className={"pl-2"}>
                          {formatDistanceToNow(new Date(job.createdAt), {
                            addSuffix: true,
                          })}
                        </span>
                      </div>

                      {/*shortDescription*/}
                      <div className="line-clamp-3 my-3">
                        <span>{job.shortDescription}</span>
                      </div>
                    </div>

                    <Separator className="my-5" />

                    {/*skills*/}
                    <div className="flex flex-wrap gap-1 mt-3 pt-2">
                      {job.skills.slice(0, 3).map((skill: SkillType) => (
                        <Badge
                          key={skill.skillId}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill.skillName}
                        </Badge>
                      ))}
                      {job.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{job.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <BookmarkPlus className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50 px-6 py-3">
                <Button
                  variant="ghost"
                  className="w-full text-primary"
                  onClick={() => navigate(`/jobs/${job.jobId}`)}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))
        : ""}
    </div>
  );
}
