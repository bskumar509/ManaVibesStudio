
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    id: "testimonial-1",
    name: "Sarah L.",
    title: "CEO, Innovate Inc.",
    quote: "Manavibes Studio transformed our online presence. Their team is a perfect blend of creativity and strategic thinking. Our engagement has skyrocketed!",
    rating: 5,
    avatarId: "testimonial-avatar-1",
  },
  {
    id: "testimonial-2",
    name: "Mike R.",
    title: "Marketing Director, TechForward",
    quote: "Working with Manavibes was a game-changer. They are incredibly passionate and delivered results that exceeded our expectations. Highly recommended!",
    rating: 5,
    avatarId: "testimonial-avatar-2",
  },
  {
    id: "testimonial-3",
    name: "Emily C.",
    title: "Founder, Bloom & Co.",
    quote: "The branding they created for us is simply stunning. It perfectly captures our essence. The team was a pleasure to work with from start to finish.",
    rating: 5,
    avatarId: "testimonial-avatar-3",
  },
];

const getAvatar = (avatarId: string) => {
    return PlaceHolderImages.find(img => img.id === avatarId);
}

const renderStars = (rating: number) => {
  return Array(rating).fill(0).map((_, i) => (
    <Star key={i} className="h-5 w-5 text-accent fill-accent" />
  ));
};


export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We love our clients, and they love us. Here's what they have to say.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => {
                  const avatar = getAvatar(testimonial.avatarId);
                  return (
                    <CarouselItem key={testimonial.id}>
                      <div className="p-1">
                        <Card className="border-none shadow-none bg-transparent">
                          <CardContent className="flex flex-col items-center text-center p-6">
                            {avatar && (
                                <Image
                                    src={avatar.imageUrl}
                                    alt={avatar.description}
                                    width={80}
                                    height={80}
                                    data-ai-hint={avatar.imageHint}
                                    className="rounded-full mb-4 border-2 border-accent"
                                />
                            )}
                            <p className="text-xl font-medium italic text-foreground/90">
                              "{testimonial.quote}"
                            </p>
                            <div className="mt-4">
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                            </div>
                            <div className="flex mt-4">
                                {renderStars(testimonial.rating)}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  )
                })}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-12" />
            <CarouselNext className="hidden sm:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
