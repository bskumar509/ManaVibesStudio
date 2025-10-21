import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaStrip() {
  return (
    <section className="w-full py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #3B3CFF 100%)' }}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6 text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-white">
          Ready to grow? Let’s create your digital vibe.
        </h2>
        <div className="mt-8">
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-accent">
                <Link href="/contact">Get in Touch</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
