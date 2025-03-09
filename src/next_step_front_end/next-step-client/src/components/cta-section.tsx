import { Button } from "@/components/ui/button";
import { Users, Building } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-12 md:py-16 bg-muted/50">
            <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2">
                {[{ title: "For Job Seekers", icon: <Users />, desc: "Create a free account and apply for jobs easily." },
                    { title: "For Employers", icon: <Building />, desc: "Post jobs and hire the best candidates." }]
                    .map((cta, i) => (
                        <div key={i} className="flex flex-col items-center space-y-4 border p-6 rounded-lg">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-primary/10">
                                {cta.icon}
                            </div>
                            <h3 className="text-2xl font-bold">{cta.title}</h3>
                            <p className="text-muted-foreground">{cta.desc}</p>
                            <Button size="lg">Get Started</Button>
                        </div>
                    ))}
            </div>
        </section>
    );
}
