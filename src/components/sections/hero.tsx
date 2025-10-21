import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
      style={{ background: 'linear-gradient(135deg, #6C63FF20 0%, #3B3CFF20 100%)' }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center">
          <div className="max-w-3xl text-left">
            <div
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out"
            >
              <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                ManaVibes Studio
              </h1>
              <h2 className="mt-4 text-2xl font-semibold text-accent md:text-3xl">
                Empowering Brands with Digital Energy
              </h2>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
                ManaVibes Studio helps brands stand out with creative design and performance-driven digital marketing.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-lg px-8 py-4 text-base" style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #3B3CFF 100%)' }}>
                  <Link href="/contact">Let’s Grow Together</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
         {/* You can add your floating SVG illustration here */}
      </div>
    </section>
  );
}
