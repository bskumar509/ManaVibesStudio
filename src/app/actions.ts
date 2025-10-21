
'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    service?: string[];
    message?: string[];
  };
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }
  
  try {
    const res = await fetch('https://formspree.io/f/s27k02b2003@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      return {
        message: 'Thank you for your message! We will get back to you soon.',
        success: true,
        errors: {},
      };
    } else {
       const errorData = await res.json();
       const errorMessage = errorData.error || 'There was a problem sending your message. Please try again later.';
       return {
        message: errorMessage,
        success: false,
        errors: {},
      };
    }

  } catch(e) {
    return {
      message: 'An unexpected server error occurred. Please try again.',
      success: false,
      errors: {},
    }
  }
}
