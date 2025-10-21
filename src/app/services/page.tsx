import Link from "next/link";
import { Button } from "@/components/ui/button";

const servicesData = [
  {
    id: "poster-design",
    title: "Poster Design",
    description: "Create eye-catching posters that grab attention and communicate your message effectively. Perfect for events, promotions, and more.",
    features: [
      "Custom poster design from scratch",
      "Multiple design concepts and revisions",
      "High-resolution files for print and digital",
      "Designs for various sizes and formats"
    ],
    deliverables: "Final poster design files in various formats (JPG, PNG, PDF).",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Our Social Media Marketing services are designed to build your brand's presence across key platforms. We focus on creating engaging content, fostering community interaction, and driving measurable results.",
    features: [
      "Comprehensive social media strategy development",
      "Community management and engagement",
      "Creative content creation and curation",
      "Performance analytics and reporting"
    ],
    deliverables: "Monthly content calendars, engagement reports, and campaign analysis.",
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    description: "Boost your visibility on search engines and drive organic traffic to your site with our expert SEO strategies. We cover all aspects of SEO to ensure you rank for the terms that matter most to your business.",
    features: [
      "In-depth website and keyword audit",
      "On-page and technical SEO implementation",
      "Quality backlink building and outreach campaigns",
      "Local SEO optimization for location-based businesses"
    ],
    deliverables: "SEO audit report, monthly ranking and traffic reports.",
  },
  {
    id: "branding-and-logo-design",
    title: "Branding & Logo Design",
    description: "Craft a memorable brand identity that resonates with your target audience and stands out from the competition. Our creative team will work with you to develop a unique visual identity.",
    features: [
      "Complete visual identity design",
      "Comprehensive brand guidelines",
      "Logo design and variations",
      "Marketing collateral design (business cards, brochures, etc.)"
    ],
    deliverables: "Full brand identity kit, including logo files and style guide.",
  },
  {
    id: "website-development",
    title: "Website Development",
    description: "From stunning visuals to seamless functionality, we build websites that deliver exceptional user experiences. Our websites are responsive, fast, and optimized for conversions.",
    features: [
      "Custom responsive website design and development",
      "E-commerce solutions and integrations",
      "Custom landing page design and optimization",
      "Content Management System (CMS) setup and training"
    ],
    deliverables: "Fully functional and responsive website, CMS access and documentation.",
  },
  {
    id: "paid-ads",
    title: "Paid Ads (Google / Meta)",
    description: "Get instant, targeted traffic and maximize your ROI with our data-driven pay-per-click advertising campaigns on platforms like Google and Meta.",
    features: [
      "Campaign setup and management",
      "A/B testing for ad creatives and copy",
      "Performance tracking and optimization",
      "Detailed reporting and analysis"
    ],
    deliverables: "Ad campaign setup, weekly performance reports.",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Tell your story through compelling content that captures attention, from blog posts to video production. We create content that engages your audience and supports your marketing goals.",
    features: [
      "Engaging copywriting for web and social media",
      "Short-form video production (Reels, TikToks)",
      "Motion graphics and animations",
      "Blog and article writing"
    ],
    deliverables: "Monthly content package with copy, images, and videos.",
  },
    {
    id: "video-editing",
    title: "Video Editing",
    description: "Transform your raw footage into polished, professional videos that tell your story and engage your audience.",
    features: [
      "Professional video editing and post-production",
      "Color correction and grading",
      "Audio mixing and sound design",
      "Motion graphics and text overlays"
    ],
    deliverables: "Fully edited video file in your desired format.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <section id="services-intro" className="w-full">
        <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            We provide a comprehensive suite of digital services designed to elevate your brand and drive growth. Explore what we can do for you.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 md:px-6 mt-16">
        <div className="space-y-16">
          {servicesData.map((service) => (
            <section key={service.id} id={service.id} className="scroll-mt-20 p-8 rounded-lg bg-secondary/50">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="font-headline text-3xl font-bold">{service.title}</h2>
                  <p className="mt-4 text-muted-foreground">{service.description}</p>
                  <h3 className="mt-6 font-semibold text-lg">Key Features:</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground list-disc list-inside">
                    {service.features.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                         <h3 className="font-semibold text-lg">Deliverables:</h3>
                        <p className="mt-2 text-muted-foreground">{service.deliverables}</p>
                    </div>
                  <Button asChild size="lg" className="mt-6 w-full">
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
