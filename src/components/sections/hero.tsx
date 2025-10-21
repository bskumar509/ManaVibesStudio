import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-white"
      style={{ background: 'linear-gradient(135deg, #6C63FF20 0%, #3B3CFF20 100%)' }}
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative z-10 grid min-h-[calc(100vh-4rem)] items-center gap-8 md:grid-cols-2">
          <div className="max-w-3xl text-left">
            <div
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out"
            >
              <h1 className="font-headline text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl md:text-7xl">
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
          <div className="hidden md:flex justify-center items-center">
             <Image 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Marketing team collaborating"
                width={600}
                height={600}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint="digital marketing collaboration"
             />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
         {/* You can add your floating SVG illustration here */}
      </div>
    </section>
  );
}
