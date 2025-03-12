"use server"

import { db } from "@/db/index"
import paths from '@/path'

const ListTopics = async () => {
  let topics = await db.topic.findMany()
  return (
    <section className="mt-6">
      <h3 className="mb-4">Topics</h3>
      <ul>
        {topics?.map((topic) => (
          <li key={topic.id} className="list-disc">
            <a href={paths.topicToShow(topic.slug)} className="underline" >{topic.description}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListTopics