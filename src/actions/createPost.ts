'use server'

import { db } from "../db/index"
import { z } from "zod"
import { auth } from "@/auth"
import type { Post } from "@prisma/client"
import { revalidatePath } from "next/cache"
import paths from "@/path"
import { redirect } from "next/navigation"
import { tr } from "framer-motion/client"

let schema = z.object({
	title: z.string().min(3).regex(/^[a-z]+$/, { message: "must be lowercase or min 3 characters" }),
	content: z.string().min(10)
})

interface CreatePost {
	errors: {
		title?: string[] ;
		content?: string[];
		_form?: string[]
	}
}

export const createPost = async (slug: string, formState: CreatePost, formData: FormData): Promise<CreatePost> => {
	
	let title = formData.get("title") as string
	let content = formData.get("content") as string
	const result = schema.safeParse({ title, content })
	let session = await auth()
	let post: Post, topic


	console.log("aquii",result)

	if (!result.success) {
		return {
			errors: result.error.flatten().fieldErrors
		}
	}

	if (!session?.user?.id) {
		return {
			errors: {
				_form: ["You must be login to create a post"]
			}
		}
	}

	try {
		topic = await db.topic.findFirst({
			where: {
				slug: slug
			}
		}) 
	} catch (error) {
		return{
			errors: {
				_form: ["cannot find the topic"]
			}
		}
	}
	
	console.log("topiccx", slug, topic)


	try {
		post = await db.post.create({
			data: {
				content: result.data.content,
				title: result.data.title,
				userId: session.user.id, 
				topicId: topic?.id
			}
		})
	} catch (error) {
		return {
			errors: {
				_form: ["There was an error creating the post"]
			}
		}
	}

  revalidatePath(paths.topicToShow(slug))
  redirect(paths.showPost(slug, post.id))

}