import { Card, CardContent } from "@/components/ui/card.tsx";
import { AppDispatch, RootState } from "@/store/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "@/components/loading.tsx";
import { fetchFeaturedIndustries } from "@/store/slices/industries-slice.ts";
import AlertDestructive from "@/components/alert/destructive-alert.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";

export default function FeaturedCategories() {
  const dispatch = useDispatch<AppDispatch>();
  const { industries, status } = useSelector((state: RootState) => state.industries);

  useEffect(() => {
    dispatch(fetchFeaturedIndustries(12));
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") return <AlertDestructive />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
      {industries.map((category) => {
        const initials = category.industryName
          .split(" ")
          .map((word) => word[0])
          .join("");

        return (
          <Card
            key={category.industryId}
            className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                <Avatar className="h-6 w-6   p-[2px]">
                  <AvatarImage
                    src={category.icon}
                    alt="/placeholder.svg?height=64&width=64"
                  />
                  <AvatarFallback>
                    <span className={"text-[15px]"}>{initials}</span>
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-medium">{category.industryName}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {category.countJobs} jobs
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
