"use client"

import Link from 'next/link'
import React from 'react'
import Button from '../auth/Button'
import { SessionProvider } from 'next-auth/react'
import Profile from '../auth/Profile'


const Header = () => {
  return (
    <SessionProvider>

    <div className='px-2 border-b flex items-center justify-between'>
        
        <Link href={'/'} className="text-2xl sm:text-4xl">
            BlogG
        </Link >

        <div className='h-full flex self-center justify-between '>
            
            <Link href={'/blog/new'} className='text-l mr-2 h-full sm:text-xl py-4 px-2'> Create a post</Link>

            <Profile ></Profile>
            <Button></Button>
        </div>
    </div>
    </SessionProvider>
  )
}

export default Header