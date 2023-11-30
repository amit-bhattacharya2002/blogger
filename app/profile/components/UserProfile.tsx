import React from 'react'
import type { User } from '@prisma/client'
import type { Post } from '@prisma/client'
import Link from 'next/link'
import Image from 'next/image'
type Props = {
  user: User,
  post: Post[]
}

const UserProfile = ({user, post}: Props) => {
  return (
    <div className='mx-4 h-full'>
      
    <div className='flex justify-between'>
      <div>
        <h1 className='md:text-4xl text-2xl text-center md:text-start py-4 px-4 mt-4 '>{user.name}</h1>
        <h2 className='md:text-2xl text-xl text-center md:text-start py-4 px-4 mt-4 '>Email : {user.email}</h2>
      </div>
      {/* <Image
      className='w-fit h-fit'

        src={user.image || ""}
        width={100}
        height={100}
        alt='avatar'
      >

      </Image> */}
    </div>
    <h3 className='md:text-2xl text-xl text-center md:text-start border-b-4  py-4 px-4 mt-4'>Posts made by {user.name}</h3>

    <div className=' h-full wrap-3 container md:flex flex-wrap justify-between basis-5 '>

    {post?.map((p)=>(
      
      <Link key={p.id} className='border mt-4 px-4 py-4 w-[30%] h-[200px]' href={`/blog/${p.id}`}>
      <div >
      <h2 className='text-2xl'>{p.title}</h2>
      <p>{p.content}</p>
   
    {/* <PostCard key={post.id} post={post}/> */}

      </div>
      </Link> 
      ))}

    </div></div>
  )
}

export default UserProfile