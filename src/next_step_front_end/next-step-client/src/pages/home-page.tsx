import Header from "@/components/layout/header.tsx";
import HeroSection from "@/components/section/hero-section.tsx";
import JobCategories from "@/components/section/featured-categories-section.tsx";
import FeaturedJobs from "@/components/section/featured-jobs-section.tsx";
import HowItWorks from "@/components/how-it-works.tsx";
import FeaturedCompaniesSection from "@/components/section/featured-companies-section.tsx";
import CTASection from "@/components/section/cta-section.tsx";
import Footer from "@/components/layout/footer.tsx";

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <HeroSection />
            <JobCategories />
            <FeaturedJobs />
            <HowItWorks />
            <FeaturedCompaniesSection />
            <CTASection />
            <Footer />
        </div>
    );
}
