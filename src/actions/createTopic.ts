'use server'

import { db } from "../db/index"
import { z } from "zod"
import { auth } from "@/auth"
import paths from "@/path"
import type { Topic } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

let schema = z.object({
  name: z.string().min(3).regex(/^[a-z]+$/, { message: "must be lowercase or min 3 characters" }),
  description: z.string().min(10)
})

interface CreateTopic {
  errors: {
    name?: string[]
    description?: string[];
    _form?: string[]
  }
}

export const createTopic = async (formState: CreateTopic, formData: FormData): Promise<CreateTopic> => {

  let name = formData.get("name") as string
  let description = formData.get("description") as string
  const result = schema.safeParse({ name, description })
  let session = await auth()
  let topic: Topic

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors
    }
  }

  if (!session?.user?.id) {
    return {
      errors: {
        _form: ["You must be login to create a topic"]
      }
    }
  }

  try {
  topic= await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      }
    })
  } catch (error) {
    return{
      errors: {
        _form: ["There was an error creating the topic"]
      }
    }
  }

  revalidatePath("/")
  redirect(paths.topicToShow(topic.slug))
}