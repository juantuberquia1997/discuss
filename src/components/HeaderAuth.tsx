'use client'

import React from 'react'
import SingIn from './SingIn'
import SingOut from './SingOut'
import { Avatar, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { useSession } from "next-auth/react"

const HeaderAuth = () => {

  let session = useSession()
  let contentUser: React.ReactNode;

  if (session?.status === "loading") {
    contentUser = null
  }
  else if (session?.data?.user) {
    contentUser = (
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <Avatar src={session?.data?.user.image || undefined} alt="icon Profile" size='md' className="w-6 h-6 text-tiny cursor-pointer" />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-4">
            <SingOut />
          </div>
        </PopoverContent>
      </Popover>
    )
  }
  else {
    contentUser = <div className='flex gap-x-4'>
      <SingIn />
      <SingOut />
    </div >
  }

  return (
    <>
      {contentUser}
    </>
  )
}

export default HeaderAuth