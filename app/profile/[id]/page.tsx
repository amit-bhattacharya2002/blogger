import React from 'react'
import prisma from '@/app/db'
import type { Post } from '@prisma/client'
import Link from 'next/link'
import PostCard from '@/app/home/PostCard'
import UserProfile from '../components/UserProfile'

type Props = {}

const page = async ({params}: {params:{id:string}}) => {

  const user = await prisma.user.findUnique(
    {where:{
      id: Number(params.id)
    },
    include:{
      posts: true
    }
  
  }
  )

  
  const userPosts = await prisma.post.findMany(
    {where: {
      authorId: Number(params.id)
    }}
    
    )
    {console.log(userPosts)}
  return (


    <div>
          
      {user ? <UserProfile user={user} post={userPosts}/>: <><p>user does not exist</p></>}
      
    </div>
  )
}

export default page