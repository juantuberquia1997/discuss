import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@nextui-org/react'

interface Props {
	children: React.ReactNode
}

const FormButton = ({children}: Props) => {
	const { pending } = useFormStatus()
	return (
		<Button isLoading={pending} type='submit' >{children}</Button>
	)
}

export default FormButton