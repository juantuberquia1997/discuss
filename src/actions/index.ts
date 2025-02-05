"use server";

import { signIn, signOut } from "@/auth"
import { createPost } from "./createPost"
import { createTopic } from "./createTopic"
import { createComments } from "./createComments"


export async function singIn() {
  return signIn("github")
}

export async function singOut() {
  return signOut()
}