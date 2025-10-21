import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { VisualDesignAssistant } from "@/components/sections/visual-design-assistant";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Testimonials />
      <VisualDesignAssistant />
      <Contact />
    </div>
  );
}
