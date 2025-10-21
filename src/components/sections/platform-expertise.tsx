
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const platforms = [
  { name: "Facebook", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#1877F2" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg> },
  { name: "Instagram", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"><defs><radialGradient id="ig-grad" cx="30%" cy="107%" r="150%"><stop offset="0%" stop-color="#fdf497"/><stop offset="5%" stop-color="#fdf497"/><stop offset="45%" stop-color="#fd5949"/><stop offset="60%" stop-color="#d6249f"/><stop offset="90%" stop-color="#285AEB"/></radialGradient></defs><path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0 1.802c-3.152 0-3.507.01-4.73.067-2.695.123-3.994 1.422-4.117 4.117-.058 1.223-.067 1.57-.067 4.73s.01 3.507.067 4.73c.123 2.695 1.422 3.994 4.117 4.117 1.223.058 1.57.067 4.73.067s3.507-.01 4.73-.067c2.695-.123 3.994-1.422 4.117-4.117.058-1.223.067-1.57.067-4.73s-.01-3.507-.067-4.73c-.123-2.695-1.422-3.994-4.117-4.117-1.223-.058-1.57-.067-4.73-.067zm0 4.606c-2.403 0-4.35 1.947-4.35 4.35s1.947 4.35 4.35 4.35 4.35-1.947 4.35-4.35-1.947-4.35-4.35-4.35zm0 7.098c-1.513 0-2.748-1.235-2.748-2.748s1.235-2.748 2.748-2.748 2.748 1.235 2.748 2.748-1.235 2.748-2.748 2.748zm4.938-7.999c-.783 0-1.418.635-1.418 1.418s.635 1.418 1.418 1.418 1.418-.635 1.418-1.418-.635-1.418-1.418-1.418z"/></svg> },
  { name: "LinkedIn", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#0A66C2" viewBox="0 0 24 24"><path d="M20.45 2h-16.9C2.69 2 2 2.69 2 3.55v16.9C2 21.31 2.69 22 3.55 22h16.9c.86 0 1.55-.69 1.55-1.55V3.55C22 2.69 21.31 2 20.45 2zM8 19H5V8h3v11zM6.5 6.73c-.97 0-1.75-.78-1.75-1.75S5.53 3.23 6.5 3.23c.97 0 1.75.78 1.75 1.75S7.47 6.73 6.5 6.73zM19 19h-3v-5.46c0-1.3-.03-2.98-1.82-2.98-1.82 0-2.1.1.42-2.1 3.36v7.8h3V19z"/></svg> },
  { name: "TikTok", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24"><path d="M21.46 8.06c-.23-.2-.5-.31-.78-.31h-2.1V4.87c0-2.12-1.72-3.84-3.84-3.84H8.37c-.28 0-.54.11-.74.31-.2.2-.31.46-.31.74v12.26c0 .41.34.75.75.75s.75-.34.75-.75V7.12h2.09c.28 0 .54-.11.74-.31.2-.2.31-.46.31-.74V3.88c0-.41.34-.75.75-.75s.75.34.75.75v8.58c0 3.55-2.88 6.43-6.43 6.43s-6.43-2.88-6.43-6.43c0-3.55 2.88-6.43 6.43-6.43.08 0 .17.01.25.02.41.04.79-.27.83-.68.04-.41-.27-.79-.68-.83-.17-.01-.33-.02-.5-.02-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8V8.84c0-.28-.11-.54-.31-.74z"/></svg> },
  { name: "YouTube", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#FF0000" viewBox="0 0 24 24"><path d="M21.58 7.19c-.22-1.2-1.12-2.1-2.32-2.32C17.1 4.5 12 4.5 12 4.5s-5.1 0-7.26.37c-1.2.22-2.1 1.12-2.32 2.32C2.05 9.35 2 12 2 12s.05 2.65.37 4.81c.22 1.2 1.12 2.1 2.32 2.32C6.9 19.5 12 19.5 12 19.5s5.1 0 7.26-.37c1.2-.22 2.1-1.12 2.32-2.32C21.95 14.65 22 12 22 12s-.05-2.65-.42-4.81zM10 15V9l5.2 3L10 15z"/></svg> },
  { name: "Figma", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"><path fill="#f24e1e" d="M12 12.3c0 .8-.6 1.5-1.4 1.5H8.2v3.1c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5v-8c0-.8.7-1.5 1.5-1.5h3.1c.8 0 1.4.7 1.4 1.5v1.4z"/><path fill="#ff7262" d="M8.2 3.7h3.1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H8.2V3.7z"/><path fill="#a259ff" d="M12.8 3.7h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3V3.7z"/><path fill="#1abcfe" d="M17.2 8.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h3z"/><path fill="#0acf83" d="M12.8 12.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h3z"/></svg> },
  { name: "Notion", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="black"><path d="M18.8 3.2c-1 .4-1.8.8-2.6 1.4v14c.8.3 1.6.6 2.4.8.2 0 .3-.1.3-.4V3.5c0-.2-.1-.3-.3-.3zM13 5.5v12.8c.7.2 1.4.3 2.1.4V5.2c-.8-.2-1.5-.3-2.1-.5zm-3.2 13.3c.7.1 1.4.2 2.1.2V5c-.7-.1-1.4-.2-2.1-.3v13.8zM5.2 3.5v16.7c0 .2.1.3.3.3.8-.2 1.6-.4 2.4-.7V4.9c-.8-.5-1.6-.9-2.5-1.3-.2-.1-.2-.1-.2.1z"/></svg> },
  { name: "Slack", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"><path fill="#36C5F0" d="M5.04 15.12c0 1.01.82 1.83 1.83 1.83h2.89v-2.89H5.04v1.06z"/><path fill="#2EB67D" d="M5.96 8.88v2.89h3.83v-2.89H5.96z"/><path fill="#ECB22E" d="M8.88 4.12H5.04v3.83H8.8v-3.83z"/><path fill="#E01E5A" d="M12.72 5.04V2.15H9.83c-1.01 0-1.83.82-1.83 1.83v2.89h3.71l1.01-1.83z"/><path fill="#E01E5A" d="M8.8 17.84v3.83H5.92c-1.01 0-1.83-.82-1.83-1.83s.82-1.83 1.83-1.83h2.88z"/><path fill="#36C5F0" d="M15.12 18.96c-1.01 0-1.83-.82-1.83-1.83v-2.89h2.89v2.89h-1.06z"/><path fill="#2EB67D" d="M11.28 15.12h2.89v-3.83h-2.89v3.83z"/><path fill="#ECB22E" d="M18.96 11.28V8.39h-3.83v2.89h3.83z"/><path fill="#ECB22E" d="M18.08 8.8V5.92c0-1.01-.82-1.83-1.83-1.83s-1.83.82-1.83 1.83v2.88h3.66z"/><path fill="#E01E5A" d="M15.04 8.8V4.96h-2.89c0-1.01.82-1.83 1.83-1.83s1.83.82 1.83 1.83v2.88h-1.06z"/></svg> },
  { name: "HubSpot", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"><path fill="#FF7A59" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.22 13.91c-.48.33-.99.5-1.5.5s-1.02-.17-1.5-.5c-.95-.65-1.57-1.7-1.57-2.91v-3h2.4v3c0 .54.21 1.04.57 1.39.36.35.83.56 1.35.56s.99-.21 1.35-.56c.36-.35.57-.85.57-1.39v-3h2.4v3c0 1.21-.62 2.26-1.57 2.91zM8.5 9v6h2.4V9H8.5z"/></svg> },
  { name: "Mailchimp", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"><path fill="#FFE01B" d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0z"/><path fill="#231F20" d="M18.5 9.5c0-3-2.5-5.5-5.5-5.5S7.5 6.5 7.5 9.5c0 2.2 1.3 4.2 3.2 5.1v3.2l2.3-1.8c.5.1 1 .1 1.5.1 3 0 5.5-2.5 5.5-5.5zm-5.5 3c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"/></svg> },
  { name: "Canva", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24"><defs><linearGradient id="canva-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#00c4cc"/><stop offset="100%" stop-color="#7d2ae8"/></linearGradient></defs><path fill="url(#canva-grad)" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg> },
  { name: "Buffer", icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="black" viewBox="0 0 24 24"><path d="M22.46 15.86c-1.17-1.74-2.88-3.03-4.9-3.73v-2.2c1.78-.65 3.3-1.8 4.47-3.3.62-.8.97-1.77.97-2.77 0-1.01-.36-1.98-.99-2.78C20.84.18 19.33-.2 17.93.1c-1.4.3-2.6 1.28-3.23 2.62-.7 1.48-.68 3.18.06 4.64 1.16 1.74 2.87 3.03 4.88 3.73v1.88c-1.78.64-3.3 1.8-4.47 3.3-.62.8-.97 1.77-.97 2.77 0 1.01.36 1.98.99 2.78 1.18 1.48 2.69 2.3 4.1 2.6 1.4.3 2.91-.18 3.98-1.25s1.7-2.6 1.4-4.1c-.3-1.48-1.28-2.6-2.62-3.23zM8.34 1.83C6.73 1.19 4.9.96 3.15 1.5c-1.75.54-3 1.95-3.09 3.75-.1 1.8.84 3.49 2.41 4.46 1.57.97 3.4 1.2 5.15.66v2.22c-1.78.65-3.3 1.8-4.47 3.3C1.3 17.7.96 19.53 1.5 21.28c.54 1.75 1.95 3 3.75 3.09 1.8.1 3.49-.84 4.46-2.41.97-1.57 1.2-3.4.66-5.15V8.59c1.78-.65 3.3-1.8 4.47-3.3C16.7 3.44 17.04 1.6 16.5.15c-.54-1.45-1.95-2.56-3.75-2.65-1.47-.08-2.9.34-4.08 1.2.9.23 1.75.68 2.5 1.32.78.68 1.38 1.5 1.76 2.42.4.92.58 1.9.52 2.88-.06.98-.38 1.92-.92 2.76-.78.96-1.8 1.66-2.95 2.04v-2.2c.9-.23 1.75-.68 2.5-1.32.78-.68 1.38-1.5 1.76-2.42.4-.92.58-1.9.52-2.88-.06-.98-.38-1.92-.92-2.76-.54-.64-1.2-1.18-1.95-1.58z"/></svg> },
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
        <div className="mt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
                {platforms.map((platform) => (
                    <li key={platform.name}>
                        <Card className="flex items-center justify-center p-6 bg-background/50 min-w-[200px]">
                            <div className="flex items-center gap-4">
                                {platform.icon}
                                <span className="font-semibold">{platform.name}</span>
                            </div>
                        </Card>
                    </li>
                ))}
            </ul>
             <ul className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {platforms.map((platform) => (
                    <li key={platform.name}>
                        <Card className="flex items-center justify-center p-6 bg-background/50 min-w-[200px]">
                            <div className="flex items-center gap-4">
                                {platform.icon}
                                <span className="font-semibold">{platform.name}</span>
                            </div>
                        </Card>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </section>
  );
}

    