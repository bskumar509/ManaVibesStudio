
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
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
                    Have a project in mind or want to learn more about our services? We'd love to hear from you. Please fill out our contact form, and we'll get back to you as soon as possible.
                </p>
                <Button asChild size="lg" className="rounded-lg px-8 py-4 text-base" style={{ background: 'linear-gradient(135deg, #6C63FF 0%, #3B3CFF 100%)' }}>
                  <Link href="https://forms.gle/8hkCHygPcHVWPHLm6" target="_blank">Contact Us</Link>
                </Button>
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
