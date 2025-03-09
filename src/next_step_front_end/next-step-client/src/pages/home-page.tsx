import Header from "@/components/layout/header.tsx";
import HeroSection from "@/components/hero-section.tsx";
import JobCategories from "@/components/job-categories-section.tsx";
import FeaturedJobs from "@/components/featured-jobs-section.tsx";
import HowItWorks from "@/components/how-it-works.tsx";
import FeaturedCompanies from "@/components/featured-companies.tsx";
import CTASection from "@/components/cta-section.tsx";
import Footer from "@/components/layout/footer.tsx";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <HeroSection />
            <JobCategories />
            <FeaturedJobs />
            <HowItWorks />
            <FeaturedCompanies />
            <CTASection />
            <Footer />
        </div>
    );
}
