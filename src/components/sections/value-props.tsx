import { Zap, Target, BrainCircuit } from "lucide-react";

const valuePropsData = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-accent" />,
    title: "Strategy-Led Creative",
    description: "Our approach combines data-driven insights with creative excellence to deliver marketing that performs.",
  },
  {
    icon: <Target className="h-10 w-10 text-accent" />,
    title: "Data-Driven Campaigns",
    description: "We leverage analytics to optimize every campaign, ensuring maximum ROI and continuous improvement.",
  },
  {
    icon: <Zap className="h-10 w-10 text-accent" />,
    title: "End-to-End Support",
    description: "From initial concept to final report, our team provides comprehensive support at every stage of your project.",
  },
];

export function ValueProps() {
  return (
    <section id="why-us" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {valuePropsData.map((prop, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                {prop.icon}
              </div>
              <h3 className="font-headline text-xl font-bold">{prop.title}</h3>
              <p className="mt-2 text-muted-foreground">{prop.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
