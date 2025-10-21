"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const services = [
  "Poster Design",
  "Social Media Marketing",
  "SEO Optimization",
  "Branding & Logo Design",
  "Website Development",
  "Paid Ads (Google / Meta)",
  "Content Creation",
  "Video Editing",
];

const initialState: ContactFormState = {
  message: '',
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Message Sent!',
          description: state.message,
        });
      } else {
        toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your Name" />
        {state.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="your@email.com" />
        {state.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
      </div>
       <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" placeholder="Your Phone Number" />
        {state.errors?.phone && <p className="text-sm font-medium text-destructive">{state.errors.phone[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="service">Service Interested</Label>
        <Select name="service" defaultValue={serviceParam || undefined}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map(service => (
              <SelectItem key={service} value={service}>{service}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-[120px]" />
        {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
      </div>
      <SubmitButton />
    </form>
  )
}

export function Contact() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary/50 scroll-mt-16">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear from you. We respond within 24-48 hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
                <div className="space-y-4 text-muted-foreground">
                     <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-accent" />
                        <span>8790104838, 7093100179</span>
                     </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-accent" />
                        <a href="mailto:mayamakers1@gmail.com" className="hover:text-accent transition-colors">mayamakers1@gmail.com</a>
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
              <div className="h-80 w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122452.82494958316!2d80.3524959567995!3d16.30709970977464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a755cb1787785%3A0x9f7063462ff5f81e!2sGuntur%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1689582G"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Guntur Location"
                ></iframe>
              </div>
          </div>
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<div>Loading...</div>}>
                  <ContactForm />
                </Suspense>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
