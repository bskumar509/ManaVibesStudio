
import Link from "next/link";
import { Zap, Twitter, Linkedin, Instagram } from "lucide-react";

const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact Us" },
];

const socialLinks = [
    { href: "#", icon: Twitter, label: "Twitter" },
    { href: "#", icon: Linkedin, label: "LinkedIn" },
    { href: "#", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <Zap className="h-6 w-6 text-primary" />
              <span className="font-headline">Manavibes Studio</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Elevating brands in the digital space with creativity and passion.
            </p>
          </div>
          <div className="md:col-start-3">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Manavibes Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
