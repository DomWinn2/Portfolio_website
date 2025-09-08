import { ThemeToggle } from "../components/ThemeToggle";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-y-scroll snap-y snap-mandatory scroll-smooth overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main>
                <section className="snap-start min-h-screen">
                    <HeroSection />
                </section>
                <section className="snap-start min-h-screen">
                    <AboutMeSection />
                </section>
                <section className="snap-start min-h-screen">
                    <SkillsSection />
                </section>
                <section className="snap-center min-h-screen">
                    <ProjectSection />
                </section>
                <section className="snap-center min-h-screen">
                    <ContactSection />
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};