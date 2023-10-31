"use client"

import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'
type Props = {}

const Button = (props: Props) => {
    const router = useRouter();
    const { data: session, status} = useSession()
    const handleSignOut = async () => {
        
        await signOut();
        router.push('/'); // Redirect to the home page
        revalidatePath('/')
      };
    
    if(status === 'loading'){
        return <div>Loading...</div>
    }

    if(session){
        return (
            <button className='bg-black text-slate-200 py-4 px-4 hover:bg-slate-600 hover:text-slate-200' onClick={(e) => {
                handleSignOut()

            }}>Sign Out</button>
        )
    }
  return (
    <button className='bg-black text-slate-200 py-4 px-4 hover:bg-slate-600 hover:text-slate-200' onClick={() => signIn()}>Sign In</button>
  )
}

export default Button