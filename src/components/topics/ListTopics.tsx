"use server"

import { db } from "@/db/index"
import paths from '@/path'
import Link  from "next/link"
import { Chip} from "@nextui-org/react"

const ListTopics = async () => {
  let topics = await db.topic.findMany()
  return (
    <section className="mt-6">
      <h3 className="mb-4">Topics</h3>
      <ul>
        {topics?.map((topic) => (
          <li key={topic.id} className="list-disc">
            <Link href={paths.topicToShow(topic.slug)} className="underline" >
            <Chip  color="warning" size="md" className="ml-2" variant="shadow"> 
              {topic.slug} 
            </Chip>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListTopics