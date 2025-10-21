
"use client";

import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary/50 scroll-mt-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="max-w-2xl text-lg text-muted-foreground">
                  Have a project in mind? We'd love to hear from you. We respond within 24-48 hours.
                </p>
                <div className="space-y-4 text-muted-foreground">
                     <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>8790104838, 7093100179</span>
                     </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-accent" />
                        <a href="mailto:s27k02b2003@gmail.com" className="hover:text-accent transition-colors">s27k02b2003@gmail.com</a>
                     </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-accent mt-1" />
                        <div>
                          <p>Guntur, AP</p>
                          <p>Hyderabad, TG</p>
                        </div>
                     </div>
                </div>
              </div>
          </div>
          <div className="h-96 w-full lg:h-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122452.82494958316!2d80.3524959567995!3d16.30709970977464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7063462ff5f81e!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1721056587570!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Guntur Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
