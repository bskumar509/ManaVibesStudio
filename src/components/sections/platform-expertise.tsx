import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const platforms = [
  { name: "Facebook", icon: <Facebook className="h-6 w-6 text-[#1877F2]" /> },
  { name: "Instagram", icon: <Instagram className="h-6 w-6 text-[#E4405F]" /> },
  { name: "LinkedIn", icon: <Linkedin className="h-6 w-6 text-[#0A66C2]" /> },
  { name: "TikTok", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8.15c-1.25-.2-2.55-.15-3.8.15-1.15.25-2.2.65-3.2 1.25V14c0 2.21-.9 4.2-2.35 5.65C10.2 21.1 8.2 22 6 22c-2.76 0-5-2.24-5-5s2.24-5 5-5c.34 0 .67.04 1 .1v2.1c-.33-.05-.66-.1-1-.1-1.65 0-3 1.35-3 3s1.35 3 3 3 3-1.35 3-3V5.5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5V10c2.58-2.33 4.1-5.55 4.8-9.15Z"/></svg> },
  { name: "YouTube", icon: <Youtube className="h-6 w-6 text-[#FF0000]" /> },
  { name: "Figma", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4.5A2.5 2.5 0 0 1 7.5 2h1A2.5 2.5 0 0 1 11 4.5v5A2.5 2.5 0 0 1 8.5 12h-1A2.5 2.5 0 0 1 5 9.5v-5Z"/><path d="M5 14.5A2.5 2.5 0 0 1 7.5 12h1a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 8.5 22h-1A2.5 2.5 0 0 1 5 19.5v-5Z"/><path d="M14 4.5A2.5 2.5 0 0 1 16.5 2h1A2.5 2.5 0 0 1 20 4.5v5A2.5 2.5 0 0 1 17.5 12h-1a2.5 2.5 0 0 1-2.5-2.5v-5Z"/><path d="M14 14.5a2.5 2.5 0 0 1 2.5-2.5h1a2.5 2.5 0 0 1 2.5 2.5v5a2.5 2.5 0 0 1-2.5 2.5h-1a2.5 2.5 0 0 1-2.5-2.5v-5Z"/></svg> },
  { name: "Notion", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4a4 4 0 0 0-4 4v12"/><path d="M12 4a4 4 0 0 1 4 4v12"/><path d="M8 20V8a4 4 0 0 0-4-4"/><path d="M8 20a4 4 0 0 0 4-4V4"/></svg> },
  { name: "Slack", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4A154B]" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M5.04 15.12c0 1.01.82 1.83 1.83 1.83h2.89v-2.89H5.04v1.06zm.92-3.84v2.89h3.83v-2.89H5.96zm-1.84-2.89H8.8v3.83H4.12v-3.83zm3.83-1.84V2.72H5.04c-1.01 0-1.83.82-1.83 1.83v2.89h3.71zM8.8 17.84v3.83H5.92c-1.01 0-1.83-.82-1.83-1.83s.82-1.83 1.83-1.83h2.88zm6.24 1.84c-1.01 0-1.83-.82-1.83-1.83v-2.89h2.89v2.89h-1.06zm-3.84-.92h2.89v-3.83h-2.89v3.83zm2.89-4.75V8.34h3.83v2.89h-3.83zm1.84-1.84h3.83V5.92c0-1.01-.82-1.83-1.83-1.83s-1.83.82-1.83 1.83v2.88zM15.04 8.8V4.96h-2.89c0-1.01.82-1.83 1.83-1.83s1.83.82 1.83 1.83v2.88h-1.06z"/></svg> },
  { name: "HubSpot", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#FF7A59]" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.22 13.91c-.48.33-.99.5-1.5.5s-1.02-.17-1.5-.5c-.95-.65-1.57-1.7-1.57-2.91v-3h2.4v3c0 .54.21 1.04.57 1.39.36.35.83.56 1.35.56s.99-.21 1.35-.56c.36-.35.57-.85.57-1.39v-3h2.4v3c0 1.21-.62 2.26-1.57 2.91zM8.5 9v6h2.4V9H8.5z"/></svg> },
  { name: "Mailchimp", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10.5c0-4.2-3.8-7.5-8.5-7.5s-8.5 3.3-8.5 7.5c0 3.9 3.1 7.2 7.5 7.5v3l4-3c.7 0 1.3-.1 1.9-.2M12 8.5v3.5h3.5"/><path d="M14 17.5c-1.3 0-2.5-.5-3.4-1.4-.9-.9-1.4-2.1-1.4-3.4 0-.8.2-1.6.6-2.3"/></svg> },
  { name: "Canva", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00C4CC]" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg> },
  { name: "Buffer", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#231F20]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20V4l8 8-8 8Z"/><path d="M16 4v16"/></svg> },
];

export function PlatformExpertise() {
  return (
    <section id="platform-expertise" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Platform Expertise
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Expert-level proficiency across all major digital marketing platforms and tools.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {platforms.map((platform) => (
            <Card key={platform.name} className="flex items-center justify-center p-6 bg-background/50">
              <div className="flex items-center gap-4">
                {platform.icon}
                <span className="font-semibold">{platform.name}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
