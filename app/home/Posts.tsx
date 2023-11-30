import React from 'react'
import prisma from '../db'

import PostCard from './PostCard'
type Props = {}

const Posts = async (props: Props) => {


    const posts = await prisma.post.findMany({
        take: 3,
        orderBy: {
            createdAt: 'asc'
        }
    });
    const bgClasses = [
        'bg-red-500',
        'bg-indigo-500',
        'bg-green-500',
        'bg-yellow-500',
        'bg-orange-500',
        'bg-pink-500',

    ]
  return (
    <div>
        <h2 className='text-3xl text-center mt-3 border shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] py-4'>
            Trending
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'>
            {
                posts.map((post, index) => (
                    <PostCard key={post.id} post={post} className={bgClasses[index]}/>
                ))
            }
        </div>
    </div>
  )
}

export default Posts
