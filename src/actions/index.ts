"use server";

import { signIn, signOut } from "@/auth"

export async function singIn() {
  return signIn("github")
}

export async function singOut() {
  return signOut()
}