
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-background"
    >
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center">
          <div className="max-w-3xl text-left">
            <div
              className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out"
            >
              <h1 className="font-headline text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                Amplify Your Brand's Vibe.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
                We're Manavibes Studio, a digital marketing agency that blends creativity with strategy to make your brand unforgettable. Let's create something amazing together.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="#services">Our Services</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-20%] top-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
      </div>
    </section>
  );
}
