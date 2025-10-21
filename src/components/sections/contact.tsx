
"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactFormState } from '@/app/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Mail, MapPin, Phone } from 'lucide-react';

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

export function Contact() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
    } else if (state.message && state.errors) {
       toast({
        title: 'Error',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                    Fill out the form and our team will get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                     <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-accent" />
                        <div>
                          <a href="tel:8790104838" className="block text-foreground hover:text-accent transition-colors">8790104838</a>
                          <a href="tel:7093100179" className="block text-foreground hover:text-accent transition-colors">7093100179</a>
                        </div>
                     </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-accent" />
                        <a href="mailto:mavibestudio@gmail.com" className="text-foreground hover:text-accent transition-colors">mavibestudio@gmail.com</a>
                     </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="h-5 w-5 text-accent mt-1" />
                        <p className="text-foreground">Guntur, Hyderbad</p>
                     </div>
                </div>
              </div>
          </div>
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We're ready to help you grow.</CardDescription>
              </CardHeader>
              <CardContent>
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
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="How can we help?" className="min-h-[120px]" />
                     {state.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
                  </div>
                  <SubmitButton />
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
