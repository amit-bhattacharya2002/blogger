import React from 'react'
import prisma from '@/app/db'

const page = async ({ params } :{
    params : {
        id: string
    }
}) => {
    const post = await prisma.post.findUnique({
        where:{
            id:Number(params.id)
        },
        include:{
            author: true
        }
    })

  return (
    <div className="w-[70%] mx-auto">{post && <>
    <h1 className='text-2xl border shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] sm:text-4xl mb-2 mt-2 px-2 py-2 sm:text-start text-center'> {post.title}</h1> 
    <p className='italic'>- {post.author.name}</p>
    <p className=' text-center sm:text-start'>{post.content}</p>
    </>}</div>
  )
}

export default page
