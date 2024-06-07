import { z } from "zod";

const schema = z.object({
    title: z.string().min(5),
    description: z.string().min(8),
    date: z.string().date()
})

export { schema }