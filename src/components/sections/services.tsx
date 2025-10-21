import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Megaphone, Brush, Code, LineChart, Target } from "lucide-react";
import Link from "next/link";

const servicesData = [
  {
    icon: <Megaphone className="h-8 w-8 text-accent" />,
    title: "Social Media Marketing",
    description: "Engage your audience and build a strong online community with our creative social media campaigns.",
    href: "/services#social-media-marketing"
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: "SEO Optimization",
    description: "Boost your visibility on search engines and drive organic traffic to your site with our expert SEO strategies.",
    href: "/services#seo-optimization"
  },
  {
    icon: <Brush className="h-8 w-8 text-accent" />,
    title: "Branding & Logo Design",
    description: "Craft a memorable brand identity that resonates with your target audience and stands out from the competition.",
    href: "/services#branding-and-logo-design"
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: "Website Development",
    description: "From stunning visuals to seamless functionality, we build websites that deliver exceptional user experiences.",
    href: "/services#website-development"
  },
   {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: "Paid Ads",
    description: "Get instant, targeted traffic and maximize your ROI with our data-driven pay-per-click advertising campaigns.",
     href: "/services#paid-ads"
  },
  {
    icon: <LineChart className="h-8 w-8 text-accent" />,
    title: "Content Creation",
    description: "Tell your story through compelling content that captures attention, from blog posts to video production.",
    href: "/services#content-creation"
  },
];

export function Services() {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-secondary/30">
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
            <Link href={service.href} key={index} className="group">
              <Card className="h-full transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-background/50">
                <CardHeader className="flex flex-col items-center text-center p-8">
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>

                  <CardDescription className="mt-2 text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                   <p className="mt-4 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more
                  </p>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
