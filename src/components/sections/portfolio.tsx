
'use client';

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

const allPortfolioItems = PlaceHolderImages.filter(img => img.id.startsWith('portfolio-'));

const categories = ["All", "Social", "Web", "Branding", "Ads"];

export function Portfolio() {
  const [filter, setFilter] = useState("All");

  const portfolioItems =
    filter === "All"
      ? allPortfolioItems
      : allPortfolioItems.filter((item) => {
          if (filter === 'Social') return item.description.toLowerCase().includes('social media');
          if (filter === 'Web') return item.description.toLowerCase().includes('website') || item.description.toLowerCase().includes('e-commerce');
          if (filter === 'Branding') return item.description.toLowerCase().includes('branding');
          if (filter === 'Ads') return item.description.toLowerCase().includes('seo'); // Assuming SEO is related to Ads for this demo
          return false;
        });


  return (
    <section id="portfolio" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Recent Work
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're proud of the results we've delivered. Here are some of our favorite projects.
          </p>
        </div>
        
        <div className="mt-8 flex justify-center gap-2">
            {categories.map((category) => (
                <Button 
                    key={category} 
                    variant={filter === category ? "default" : "outline"}
                    onClick={() => setFilter(category)}
                    className="rounded-full"
                >
                    {category}
                </Button>
            ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
            <div key={item.id} className="p-1">
                <Card className="overflow-hidden group h-full">
                <CardContent className="flex flex-col aspect-[4/3] items-start justify-end p-0">
                    <Image
                        src={item.imageUrl}
                        alt={item.description}
                        fill
                        data-ai-hint={item.imageHint}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="relative z-10 p-6 self-end w-full">
                        <p className="text-sm font-medium text-white/90">
                            {item.description}
                        </p>
                    </div>
                </CardContent>
                </Card>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
