import FeaturedJobs from "@/components/featured-jobs.tsx";
import {ArrowRight} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

export default function FeaturedJobsSection() {
  return (
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Latest Opportunities
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Jobs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the latest job opportunities from top companies around the world.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Tabs defaultValue="all" className="w-full ">
              <div className="flex justify-center">
                <TabsList className="mb-8 ">
                  <TabsTrigger value="all">Feature</TabsTrigger>
                  <TabsTrigger value="part-rime">Part time</TabsTrigger>
                  <TabsTrigger value="full-time">Full Time</TabsTrigger>
                  <TabsTrigger value="remote">Remote</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all">
                <FeaturedJobs filter={"all"}/>
              </TabsContent>
              <TabsContent value="part-time">
                <FeaturedJobs filter={"PART_TIME"}/>
              </TabsContent>
              <TabsContent value="full-time">
                <FeaturedJobs filter={"FULL_TIME"}/>
              </TabsContent>
              <TabsContent value="remote">
                <FeaturedJobs filter={"REMOTE"}/>
              </TabsContent>
            </Tabs>
            <div className="mt-10 flex justify-center">
              <Button variant="outline" size="lg" className="gap-1.5">
                View All Jobs
                <ArrowRight className="h-4 w-4"/>
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
}
