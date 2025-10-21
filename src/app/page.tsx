import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaStrip } from "@/components/sections/cta-strip";
import { ValueProps } from "@/components/sections/value-props";
import { FeaturedCaseStudy } from "@/components/sections/featured-case-study";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <ValueProps />
      <FeaturedCaseStudy />
      <Testimonials />
      <CtaStrip />
      <Contact />
    </div>
  );
}
