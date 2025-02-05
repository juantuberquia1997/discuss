import { singOut } from '@/actions'
import { Button } from '@nextui-org/react'

const SingOut = () => {
  return (
    <form action={singOut}>
      <Button color="primary" radius="md" variant="shadow" type='submit' >
        Log Out
      </Button>
    </form>
  )
}

export default SingOut