

import FormCreatePost from "@/components/posts/FormCreatePost"
import { Calligraffitti } from "next/font/google"
interface Props {
  params: {
    slug: string
  }
}

const TopicToShow = ({ params: {
  slug
} }: Props) => {

  return (
    <div className="grid grid-cols-[3fr_1fr] gap-4 w-full h-screen">
      <div className="">
        <h1 className="text-2xl font-bold mb-4">{slug}</h1>
      </div>
      <div className="">
        <FormCreatePost slug={slug} />
      </div>
    </div>
  )
}

export default TopicToShow