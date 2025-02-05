
import paths from "@/path"
import FormCreatePost from "@/components/FormCreatePost"
import ListPost from "@/components/ListPost"


export default function Home() {

  return (
    <div className='flex gap-x-3 px-4 py-4'>
      <div className="flex justify-between w-full">
        <ListPost />
        <FormCreatePost />
      </div>
    </div>

  )
}
