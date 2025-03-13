import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";
import FeaturedCompanies from "@/components/featured-companies.tsx";

export default function FeaturedCompaniesSection() {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Top Employers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Companies
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover opportunities from leading companies that are hiring on
              our platform.
            </p>
          </div>
        </div>
        <FeaturedCompanies />
        <div className="mt-10 flex justify-center">
          <Button variant="outline" size="lg" className="gap-1.5">
            View All Companies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
