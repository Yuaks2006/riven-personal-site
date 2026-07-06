import CapabilitySection from "../components/CapabilitySection";
import ConnectSection from "../components/ConnectSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import Hero from "../components/Hero";
import SiteNav from "../components/SiteNav";
import TagMarquee from "../components/TagMarquee";
import WorkSection from "../components/WorkSection";

export default function Page() {
  return (
    <main id="top">
      <SiteNav />
      <Hero />
      <TagMarquee />
      <WorkSection />
      <ConnectSection />
      <CapabilitySection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
}
