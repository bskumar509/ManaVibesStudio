
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Megaphone, Brush, Code, LineChart, Target } from "lucide-react";

const servicesData = [
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: "SEO Optimization",
    description: "Boost your visibility on search engines and drive organic traffic to your site with our expert SEO strategies.",
  },
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: "Social Media Marketing",
    description: "Engage your audience and build a strong online community with our creative social media campaigns.",
  },
  {
    icon: <Brush className="h-8 w-8 text-accent" />,
    title: "Branding & Identity",
    description: "Craft a memorable brand identity that resonates with your target audience and stands out from the competition.",
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Web Design & Development",
    description: "From stunning visuals to seamless functionality, we build websites that deliver exceptional user experiences.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-accent" />,
    title: "Content Creation",
    description: "Tell your story through compelling content that captures attention, from blog posts to video production.",
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: "PPC Advertising",
    description: "Get instant, targeted traffic and maximize your ROI with our data-driven pay-per-click advertising campaigns.",
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a complete suite of digital marketing services to help your business grow.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-background/50">
                <CardHeader className="flex flex-col items-center text-center p-8">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
