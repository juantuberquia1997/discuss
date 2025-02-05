import React from 'react'
import { Navbar, NavbarContent, NavbarItem, Input } from "@nextui-org/react"
import Link from 'next/link'
import HeaderAuth from './HeaderAuth'

const Header = () => {

  return (
    <Navbar className='shadow mb-6 p-6 w-full justify-between'>
      <div className=''>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </div>
      <NavbarContent justify='center'>
        <NavbarItem>
          <Input placeholder='search' type='search' />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem >
          <HeaderAuth />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header