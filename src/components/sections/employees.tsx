
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Link from "next/link";

const employeeData = [
  {
    id: "employee-1",
    name: "Uday",
    title: "CEO & Marketing Expert",
    avatarId: "employee-avatar-1",
    bio: "Uday leads our team with a passion for marketing and a vision for success, driving strategies that deliver results."
  },
  {
    id: "employee-2",
    name: "Saikumar",
    title: "Designer & Social Media Expert",
    avatarId: "employee-avatar-2",
    bio: "Saikumar combines creative design with social media savvy to build engaging online presences for our clients."
  },
  {
    id: "employee-3",
    name: "Ashok",
    title: "Designer",
    avatarId: "employee-avatar-3",
    bio: "Ashok's design skills bring our clients' visions to life with creativity, precision, and a keen eye for detail."
  },
];

const getAvatar = (avatarId: string) => {
    return PlaceHolderImages.find(img => img.id === avatarId);
}

export function Employees() {
  return (
    <section id="employees" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            The creative minds behind ManaVibes Studio.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {employeeData.map((employee, index) => {
            const avatar = getAvatar(employee.avatarId);
            return (
                <div key={employee.id} className="animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-in-out" style={{ animationDelay: `${index * 100}ms` }}>
                    <Card className="h-full text-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-background/50">
                        <CardContent className="p-8">
                             {avatar && (
                                <Image
                                    src={avatar.imageUrl}
                                    alt={avatar.description}
                                    width={120}
                                    height={120}
                                    data-ai-hint={avatar.imageHint}
                                    className="rounded-full mb-4 mx-auto border-4 border-accent"
                                />
                            )}
                            <CardTitle className="font-headline text-xl">{employee.name}</CardTitle>
                            <CardDescription className="mt-1 text-base text-accent">{employee.title}</CardDescription>
                            <p className="mt-3 text-sm text-muted-foreground">{employee.bio}</p>
                        </CardContent>
                    </Card>
                </div>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground italic">And Many More...</p>
        </div>
      </div>
    </section>
  );
}
