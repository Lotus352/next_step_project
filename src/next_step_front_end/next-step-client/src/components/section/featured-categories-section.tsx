import FeaturedCategories from "@/components/featured-categories.tsx";

export default function FeaturedCategoriesSection() {
    return (
        <section className="py-12 md:py-16 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                            Browse by Category
                        </div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Popular Job
                            Categories</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Explore jobs in different categories and find the perfect role for your skills and
                            experience.
                        </p>
                    </div>
                </div>
                <FeaturedCategories/>
            </div>
        </section>
    );
}
