"use client"

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import Link from 'next/link'

type Props = {}

const Profile = (props: Props) => {
    const { data: session, status} = useSession()

    if(status === 'loading'){
        return <div>Loading...</div>
    }

    if(session){
      let sessionWithId = session as any
        return (
            <Link href={`/profile/${sessionWithId?.user?.id}`} className=' text-slate-500 h-full py-4 px-4' onClick={(e) => {
                
            }}>{session.user?.name}</Link>
        )
    }
  return (
    // <button className='bg-teal text-slate-200 py-4 px-4 hover:bg-slate-600 hover:text-slate-200' onClick={() => signIn()}>User</button>
    <button className='bg-teal hidden text-slate-200 py-4 px-4 hover:bg-slate-600 hover:text-slate-200'></button>

  )
}

export default Profile