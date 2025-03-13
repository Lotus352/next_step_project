import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx"
import { Badge } from "@/components/ui/badge.tsx"
import { Button } from "@/components/ui/button.tsx"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar.tsx"
import { MapPin, DollarSign, Briefcase } from "lucide-react"

export default function RelatedJobs() {
  const relatedJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "WebSolutions Ltd",
      location: "Ho Chi Minh City",
      salary: "$70K - $90K",
      type: "Full-time",
      logo: "/placeholder.svg?height=40&width=40",
      logoFallback: "WS",
      skills: ["React", "JavaScript", "CSS"],
    },
    {
      id: 2,
      title: "Senior UI Developer",
      company: "DigitalCraft",
      location: "Remote",
      salary: "$85K - $110K",
      type: "Full-time",
      logo: "/placeholder.svg?height=40&width=40",
      logoFallback: "DC",
      skills: ["React", "TypeScript", "UI/UX"],
    },
    {
      id: 3,
      title: "React Native Developer",
      company: "AppMakers Inc",
      location: "Hanoi",
      salary: "$75K - $95K",
      type: "Full-time",
      logo: "/placeholder.svg?height=40&width=40",
      logoFallback: "AM",
      skills: ["React Native", "JavaScript", "Mobile"],
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Similar Jobs</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {relatedJobs.map((job) => (
          <div key={job.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={job.logo} alt={`${job.company} logo`} />
                <AvatarFallback>{job.logoFallback}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium truncate">{job.title}</h4>
                <p className="text-sm text-muted-foreground">{job.company}</p>
                <div className="flex flex-wrap items-center gap-x-3 mt-2 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-3 w-3 mr-1" />
                    <span>{job.salary}</span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="h-3 w-3 mr-1" />
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t">
              <Button variant="outline" size="sm" className="w-full">
                View Job
              </Button>
            </div>
          </div>
        ))}
        <Button variant="ghost" className="w-full">
          View All Similar Jobs
        </Button>
      </CardContent>
    </Card>
  )
}

