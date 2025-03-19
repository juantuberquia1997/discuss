
"use client"

import { Button, Popover, PopoverContent, PopoverTrigger, Input, Textarea } from '@nextui-org/react'
import { createPost } from "@/actions/createPost"
import { useFormState } from 'react-dom'
import FormButton from "@/components/common/Button"

const FormCreatePost = ({slug}: {slug: string}) => {
	const [formState, action] = useFormState(createPost.bind( null, slug), {
		errors: {}
	})

	return (
		<div className='w-30 bg-slate-200 ml-auto rounded-lg p-2'>
			<Popover placement="left-start" >
				<PopoverTrigger>
					<Button color="primary" radius="md" variant="shadow" className='w-full'>
						Create a Post
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<div className='flex flex-col gap-4 p-4 w-80 backgrpound-slate-200'>
						<form action={action} className="border-slate-900  rounded-lg p-3">
							<h3 className="my-5 text-lg"> Create a Post</h3>
							<Input
								color="secondary"
								name='title'
								placeholder='title your post'
								type="text"
								label="Title"
								variant="bordered"
								className="max-w-xs"
								isInvalid={!!formState?.errors?.title}
								errorMessage={formState?.errors?.title?.[0]}
							/>
							<Textarea
								name='content'
								placeholder='content your post'
								type="text"
								label="Content"
								variant="bordered"
								className="max-w-xs"
								isInvalid={!!formState?.errors?.content}
								errorMessage={formState?.errors?.content?.[0]}
							/>
							{formState?.errors?._form
								? <div className='p-2 bg-red-200 border border-red-400 mb-3'>{formState?.errors?._form?.join(", ")}</div>
								: null
							}
							<FormButton>
								Save Post
							</FormButton>
						</form>
					</div>
				</PopoverContent>
			</Popover>
		</div >
	)
}

export default FormCreatePost