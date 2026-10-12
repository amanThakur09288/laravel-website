import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(100, "Name cannot exceed 100 characters."),

  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address.")
    .max(150, "Email cannot exceed 150 characters."),

//   company: z.string().trim().max(150, "Company cannot exceed 150 characters."),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject (at least 3 characters).")
    .max(150, "Subject cannot exceed 150 characters."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message cannot exceed 5000 characters."),

  // Hidden spam trap, must stay empty
  website: z.string().optional(),
});
