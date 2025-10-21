import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Employees } from "@/components/sections/employees";

const logoCloud = [
    { name: 'Company A', logo: 'https://via.placeholder.com/150x50?text=Logo+A' },
    { name: 'Company B', logo: 'https://via.placeholder.com/150x50?text=Logo+B' },
    { name: 'Company C', logo: 'https://via.placeholder.com/150x50?text=Logo+C' },
    { name: 'Company D', logo: 'https://via.placeholder.com/150x50?text=Logo+D' },
    { name: 'Company E', logo: 'https://via.placeholder.com/150x50?text=Logo+E' },
    { name: 'Company F', logo: 'https://via.placeholder.com/150x50?text=Logo+F' },
];


export default function AboutPage() {
    return (
        <div className="py-16 md:py-24">
            <section id="about-intro" className="w-full">
                <div className="container mx-auto max-w-4xl px-4 md:px-6 text-center">
                    <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                        About ManaVibes Studio
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                        ManaVibes Studio is a leading digital marketing agency dedicated to empowering brands and businesses with innovative online design and strategic marketing solutions. Our passionate team of creative thinkers, designers, and marketing experts delivers high-impact campaigns, engaging social media content, and compelling visual identities that drive real results. We blend creativity with technology to increase visibility and achieve sustainable growth.
                    </p>
                </div>
            </section>

            <section id="mission-vision" className="w-full mt-16 md:mt-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="bg-secondary p-8 rounded-lg">
                            <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                                <li>To deliver innovative and effective digital marketing strategies.</li>
                                <li>To build long-lasting partnerships with our clients based on trust and results.</li>
                            </ul>
                        </div>
                        <div className="bg-secondary p-8 rounded-lg">
                            <h2 className="font-headline text-3xl font-bold">Our Vision</h2>
                            <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                                <li>To be the leading digital agency known for creativity and excellence.</li>
                                <li>To empower businesses of all sizes to thrive in the digital landscape.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <Employees />

            <section id="clients" className="w-full mt-16 md:mt-24">
                <div className="container mx-auto max-w-7xl px-4 md:px-6">
                    <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Trusted by Amazing Companies
                    </h2>
                    <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
                        {logoCloud.map((client) => (
                            <div key={client.name} className="flex justify-center">
                                <Image
                                    className="max-h-12 object-contain"
                                    src={client.logo}
                                    alt={client.name}
                                    width={158}
                                    height={48}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
