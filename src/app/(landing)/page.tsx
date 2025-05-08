import Background from "@/components/global/background";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Perks from "@/components/marketing/perks";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";

const HomePage = () => {
  return (
    <Background>
      <Wrapper className="py-20 relative">
        <Container className="relative">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="rgba(255, 255, 255, 0.5)"
          />
          <Hero />
          <Perks />
        </Container>
        <Container delay={0.3}>
          <div className="relative mx-auto max-w-7xl rounded-xl lg:rounded-[32px] border border-neutral-200/50 p-2 backdrop-blur-lg border-neutral-700 bg-neutral-800/50 md:p-4 mt-12">
            <div className="absolute top-1/4 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>

            <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
              <Image
                src="/img3.png"
                alt="dashboard"
                width={1920}
                height={1080}
                className="rounded-lg lg:rounded-[20px]"
              />
            </div>
          </div>
        </Container>
        <CTA />
      </Wrapper>
    </Background>
  );
};

export default HomePage;
