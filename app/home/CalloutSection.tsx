import React from 'react'
import Image from 'next/image'
import NewsletterSubscribe from './NewsletterSubscribe'

const CalloutSection = () => {
  return (
    <div className='border-t-2 border-b-2 bg-indigo-400 mt-12 p-8 '>
        <div className="grid grid-cols-12 container">

            <div className='col-span-8 flex flex-col place-self-center'>

                <h2 className='text-2xl'>Stay Connected</h2>
                <p>Stay up to date with the latest posts from around the world, ranging from bite sized pieces to in-depth features. Perfect for busy users who want to stay informed on the go </p>
                <div className='border-b-2 w-full my-5'></div>
                <NewsletterSubscribe/>
            </div>
            <div className='col-span-4 rounded-full border-2 w-[100px] sm:w-[300px] h-[100px] sm:h-[300px] relative self-center'>

                <Image
                src={"/user.png"}
                alt='avatar'
                width={200}
                height={200}

                className='absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2'
                />
            </div>
        </div>
    </div>
  )
}

export default CalloutSection