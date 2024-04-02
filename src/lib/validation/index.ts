import { z } from "zod"

export const SignupSchema = z.object({
    name: z.string().min(2, { message: "Name is too short" }),
    username: z.string().min(2, { message: "Username is too short" }),
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
})

export const PostSchema = z.object({
    caption: z.string().min(2).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
})

export const ProfileUploderSchema = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name is too short" }),
    username: z.string().min(2, { message: "Username is too short" }),
    email: z.string().email(),
    bio: z.string(),
})