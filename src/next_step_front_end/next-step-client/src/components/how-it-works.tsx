import { Search, Users, Briefcase } from "lucide-react";

export default function HowItWorks() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    How It Works
                </h2>
                <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl">
                    Follow these simple steps to find your dream job or the perfect candidate.
                </p>
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-8">
                    {[
                        { icon: <Search className="h-8 w-8 text-primary" />, title: "Search Jobs", desc: "Browse thousands of job listings." },
                        { icon: <Users className="h-8 w-8 text-primary" />, title: "Apply Online", desc: "Create your profile and apply easily." },
                        { icon: <Briefcase className="h-8 w-8 text-primary" />, title: "Get Hired", desc: "Land your dream job." },
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold">{step.title}</h3>
                            <p className="text-muted-foreground">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
