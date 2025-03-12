
import FormCreateTopic from "@/components/topics/FormCreateTopic"
import TopPost from "@/components/TopPost"
import ListTopics from "@/components/topics/ListTopics"

export default function Home() {
  return (
    <div className='flex gap-x-3 px-4 py-4'>
      <div className="flex justify-between w-full">
        <TopPost />
        <div>
          <FormCreateTopic />
          <ListTopics />
        </div>
      </div>
    </div>

  )
}
