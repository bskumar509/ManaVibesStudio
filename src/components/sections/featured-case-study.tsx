import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FeaturedCaseStudy() {
  const caseStudyImage = "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section id="case-study" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Case Study: Innovate Inc.
            </h2>
            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-lg">The Problem</h3>
                <p className="text-muted-foreground">
                  Innovate Inc. struggled with low online visibility and a brand that didn't connect with their target audience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">The Solution</h3>
                <p className="text-muted-foreground">
                  We executed a full rebrand, developed a new SEO-optimized website, and launched a targeted social media campaign.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">The Result</h3>
                <p className="text-muted-foreground">
                  Achieved a 300% increase in organic traffic and a 150% boost in social media engagement within the first quarter.
                </p>
              </div>
            </div>
            <Button asChild className="mt-8" variant="outline">
              <Link href="/portfolio">See Full Case Study</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src={caseStudyImage}
              alt="Case study for Innovate Inc."
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-lg"
              data-ai-hint="digital marketing success"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
