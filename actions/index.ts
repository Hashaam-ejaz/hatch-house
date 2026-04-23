import { defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
  sendEnquiry: defineAction({
    accept: 'form',
    input: z.object({
      fullName: z.string(),
      email: z.string().email(),
      phone: z.string(),
    }),
    handler: async (input) => {
      const { data, error } = await resend.emails.send({
        from: 'Hatch House <info@hatchhouse.net>',
        to: 'info@hatchhouse.net',
        subject: `New Enquiry: ${input.fullName}`,
        html: `<p><strong>Name:</strong> ${input.fullName}</p>
               <p><strong>Email:</strong> ${input.email}</p>
               <p><strong>Phone:</strong> ${input.phone}</p>`,
      });

      if (error) throw new Error('Email failed');
      return { success: true };
    },
  }),
};