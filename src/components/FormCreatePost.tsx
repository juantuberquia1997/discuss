
"use client"

import { Button, Popover, PopoverContent, PopoverTrigger, Input, Textarea } from '@nextui-org/react'
import { createTopic } from "@/actions/createTopic"
import { useFormState } from 'react-dom'

const FormCreatePost = () => {
  const [formState, action] = useFormState(createTopic, {
    errors: {}
  })

  console.log("formState", formState)

  return (
    <div className='w-30 bg-slate-200 ml-auto rounded-lg p-2'>
      <Popover placement="left-start" >
        <PopoverTrigger>
          <Button color="primary" radius="md" variant="shadow" className='w-full'>
            Create Topic
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className='flex flex-col gap-4 p-4 w-80 backgrpound-slate-200'>
            <form action={action} className="border-slate-900  rounded-lg p-3">
              <h3 className="my-5 text-lg"> Create a topic</h3>
              <Input
                color="secondary"
                name='name'
                placeholder='name your topic'
                type="text"
                label="Name"
                variant="bordered"
                className="max-w-xs"
                isInvalid={!!formState?.errors?.name}
                errorMessage={formState?.errors?.name?.[0]}
              />
              <Textarea
                name='description'
                placeholder='describe your topic'
                type="text"
                label="Description"
                variant="bordered"
                className="max-w-xs"
                isInvalid={!!formState?.errors?.description}
                errorMessage={formState?.errors?.description?.[0]}
              />
              {formState?.errors?._form
                ? <div className='p-2 bg-red-200 border border-red-400 mb-3'>{formState?.errors?._form?.join(", ")}</div>
                : null
              }
              <Button color="primary" type="submit" radius="md" variant="shadow" className='w-full' > Submit </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    </div >
  )
}

export default FormCreatePost