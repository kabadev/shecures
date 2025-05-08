import BlogSection from "@/components/BlogSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JobSection from "@/components/JobSection";
import { MobileFooter } from "@/components/MobileFooter";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <CommunitySection />
      <BlogSection />
      <JobSection />

      <MobileFooter />
      <Footer />
    </div>
  );
}
