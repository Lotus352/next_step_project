import { Card, CardContent, CardFooter } from "@/components/ui/card.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store.ts";
import { useEffect } from "react";
import { fetchFeaturedCompanies } from "@/store/slices/companies-slice.ts";
import Loading from "@/components/loading.tsx";
import AlertDestructive from "@/components/alert/destructive-alert.tsx";

export default function FeaturedCompanies() {
  const dispatch = useDispatch<AppDispatch>();
  const { featuredCompanies, status } = useSelector(
    (state: RootState) => state.companies,
  );

  useEffect(() => {
    dispatch(fetchFeaturedCompanies(8));
  }, [dispatch]);

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") return <AlertDestructive />;

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-8">
      {featuredCompanies.map((company) => (
        <Card key={company.companyId} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-12 w-12 border-0 rounded-lg">
                <AvatarImage
                  src={company.logoUrl}
                  alt="/placeholder.svg?height=64&width=64"
                />
                <AvatarFallback>{company.name}</AvatarFallback>
              </Avatar>
              <div className="space-y-1 text-center">
                <h3 className="font-semibold">Company {company.name}</h3>
                <p className="text-xs text-muted-foreground">
                  {company.countJobOpening} open positions
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-0 bg-muted/50">
            <Button variant="ghost" className="w-full text- py-6">
              View Jobs
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
