'use server'
import { db } from "../db/index"
import { z } from "zod"


let schema = z.object({
  name: z.string().min(3).regex(/^[a-z]+$/, { message: "must be lowercase or min 3 characters" }),
  description: z.string().min(10)
})

interface CreatePost {
  errors: {
    name?: string[]
    description?: string[]
  }
}

export const createPost = async (formState: CreatePost, formData: FormData): Promise<CreatePost> => {

  let name = formData.get("name") as string
  let description = formData.get("description") as string
  const result = schema.safeParse({ name, description })

  console.log("formstates", formState)

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  return {
    errors: {}
  }

  // try {
  //   await db.post.create({
  //     data: {
  //       title: "title",
  //       content: "content",
  //       topic: "Javascript",
  //       user: "1",
  //       name,
  //       description
  //     }
  //   })

  // } catch (error) {
  //   if (error instanceof Error) {
  //     return {
  //       message: error.message
  //     }
  //   }
  //   else {
  //     return {
  //       message: "Error create snippet"
  //     }
  //   }
  // }

}