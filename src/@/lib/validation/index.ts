import { z } from "zod";

export const signUpValidation = z.object({
  name: z.string().min(2, { message: "Must not be less than 2 character" }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z
    .string()
    .min(7, { message: "Password must not be less than 7 character" }),
  email: z.string().email({ message: "email is compulsory" }),
});
