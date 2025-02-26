'use server'
import { db } from "../db/index"
import { z } from "zod"
import { auth } from "@/auth"
import { error } from "node:console"
import Result_ from "postcss/lib/result"


let schema = z.object({
  name: z.string().min(3).regex(/^[a-z]+$/, { message: "must be lowercase or min 3 characters" }),
  description: z.string().min(10)
})

interface CreatePost {
  errors: {
    name?: string[]
    description?: string[];
    _form?: string[]
  }
}

export const createPost = async (formState: CreatePost, formData: FormData): Promise<CreatePost> => {

  let name = formData.get("name") as string
  let description = formData.get("description") as string
  const result = schema.safeParse({ name, description })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  let session = await auth()

  if(!session || !!session?.user) {

    console.log("entraaa")
    return{
      errors:{
        _form:["You must be login to create a topic"]
      }
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