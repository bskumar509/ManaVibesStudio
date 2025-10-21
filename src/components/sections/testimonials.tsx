
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: "testimonial-sc",
    name: "Kayan reddy",
    title: "Managing Director, Sri Venkata Sai Durga Enterprises",
    quote: "Their understanding of cultural nuances in social media marketing is exceptional and making the audiance atract through the posts and videos were excellent and good.",
    rating: 5,
    avatarId: "testimonial-avatar-2",
  },
  {
    id: "testimonial-ah",
    name: "Dr. M.Lakshmi Lavanya",
    title: "Hospital Owner, Aswini Psychotherapy",
    quote: "The posts and videos you’ve created for us feels so thoughtful and calming—they really reflect the heart of what we do. It’s not just design; it’s meaningful. We’re genuinely happy with how everything is coming together.",
    rating: 5,
    avatarId: "testimonial-avatar-1",
  },
  {
    id: "testimonial-mr",
    name: "Siva Karthik",
    title: "Managing Director, KSK Constructions",
    quote: "We’re really impressed with how our Instagram is shaping up. The posts and videos you’ve created for KSK Constructions are clean, professional, and well thought out.",
    rating: 5,
    avatarId: "testimonial-avatar-2",
  },
  {
    id: "testimonial-dp",
    name: "Uday",
    title: "Proprietor, Varahi Boutique",
    quote: "The posts and videos are beautifully designed and perfectly reflect our brand. It’s clear that a lot of thought and creativity goes into each one, and we’re really happy with how everything is being maintained.",
    rating: 5,
    avatarId: "testimonial-avatar-3",
  },
  {
    id: "testimonial-ps",
    name: "Ashok",
    title: "Proprietor, RR BOOKS & Stationery",
    quote: "Working with them on our Business was incredible. They understood the significance and created content that resonated deeply with our diverse audience.",
    rating: 5,
    avatarId: "testimonial-avatar-2",
  }
];

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
                  return (
                    <CarouselItem key={testimonial.id}>
                      <div className="p-1">
                        <Card className="border-none shadow-none bg-transparent">
                          <CardContent className="flex flex-col items-center text-center p-6">
                            <p className="text-xl font-medium italic text-foreground/90 mb-6">
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
