import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FeaturedCompanies() {
    return (
        <section className="py-12 md:py-16 bg-muted/50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Top
                            Employers
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured
                            Companies</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Discover opportunities from leading companies that are hiring on our platform.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 mt-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <Card key={i} className="overflow-hidden">
                            <CardContent className="p-6">
                                <div className="flex flex-col items-center space-y-4">
                                    <Avatar className="h-16 w-16">
                                        <AvatarImage src={`/placeholder.svg?height=64&width=64`} alt="Company logo"/>
                                        <AvatarFallback>CO</AvatarFallback>
                                    </Avatar>
                                    <div className="space-y-1 text-center">
                                        <h3 className="font-semibold">Company {i}</h3>
                                        <p className="text-xs text-muted-foreground">12 open positions</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="p-0">
                                <Button variant="ghost" className="w-full rounded-none py-6">
                                    View Jobs
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Button variant="outline" size="lg" className="gap-1.5">
                        View All Companies
                        <ArrowRight className="h-4 w-4"/>
                    </Button>
                </div>
            </div>
        </section>
    );
}
