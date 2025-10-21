
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const employeeData = [
  {
    id: "employee-1",
    name: "Alex Johnson",
    title: "Lead Designer",
    avatarId: "employee-avatar-1",
    social: {
        twitter: "#",
        linkedin: "#",
    },
    bio: "Alex is the creative force behind our most stunning visual designs and brand identities."
  },
  {
    id: "employee-2",
    name: "Maria Garcia",
    title: "Project Manager",
    avatarId: "employee-avatar-2",
    social: {
        twitter: "#",
        linkedin: "#",
    },
    bio: "Maria ensures every project is delivered on time, on budget, and exceeds client expectations."
  },
  {
    id: "employee-3",
    name: "James Smith",
    title: "Lead Developer",
    avatarId: "employee-avatar-3",
    social: {
        twitter: "#",
        linkedin: "#",
    },
    bio: "James brings our web designs to life with clean, efficient code and cutting-edge technology."
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
      </div>
    </section>
  );
}
