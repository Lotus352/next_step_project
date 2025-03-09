import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.tsx";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store.ts";
import ErrorPage from "@/pages/error-page.tsx";
import JobDescription from "@/components/job-description.tsx";
import CompanyDescription from "@/components/company-description.tsx";
import CompanyReviewsSection from "@/components/company-reviews-section.tsx";

export default function JobDetailTabs() {
  const { selectedJob } = useSelector((state: RootState) => state.jobs);
  useEffect(() => {}, []);

  return selectedJob == null ? (
    <ErrorPage />
  ) : (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="company">Company</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-4">
        <JobDescription></JobDescription>
      </TabsContent>

      <TabsContent value="company" className="mt-4">
        <CompanyDescription></CompanyDescription>
      </TabsContent>

      <TabsContent value="reviews" className="mt-4">
        <CompanyReviewsSection></CompanyReviewsSection>
      </TabsContent>
    </Tabs>
  );
}
