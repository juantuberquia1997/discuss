import { singIn } from '@/actions'
import { Button } from "@nextui-org/react"

const SingIn = () => {
  return (
    <form action={singIn} className='mt4'>
      <Button color="primary" radius="md" variant="shadow" type='submit' >
        Log In
      </Button>
    </form>
  )
}

export default SingIn
