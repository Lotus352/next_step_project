import { ArrowRight, CheckCircle, Search } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div>
                <h1 className="sm:flex flex-row text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your
                  <span className={"bg-gray-400 mx-2"}>
                    Dream Job
                  </span>
                  Today
                </h1>
              </div>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Take your <>next step</> toward success. Discover thousands of
                job opportunities with all the information you need.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1.5">
                Browse Jobs
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                For Employers
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                <span>10,000+ Jobs</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                <span>500+ Companies</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-3.5 w-3.5 text-primary" />
                <span>Free to Join</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Find Your Perfect Job</CardTitle>
                <CardDescription>
                  Search jobs based on your preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Job title, keywords, or company"
                      className="pl-8"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hanoi">Hanoi</SelectItem>
                        <SelectItem value="hcmc">Ho Chi Minh City</SelectItem>
                        <SelectItem value="danang">Da Nang</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Job Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior Level</SelectItem>
                        <SelectItem value="executive">Executive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Search Jobs</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
