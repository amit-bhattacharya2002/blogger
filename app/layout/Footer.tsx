import React from 'react'
import Link from 'next/link'
import Profile from '../auth/Profile'

import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='md:h-[30vh] h-full bg-slate-800 py-12 px-10 text-white flex flex-row items-start gap-6 justify-between w-full'>
        
        <div>
            <h1 className='text-2xl'>BlogG</h1>
            <p>© 2023 Amit</p>
        </div>

        <div className=''>

            <h1 className='text-2xl'>Page Links</h1>
            <ul className='flex flex-col '>
                <Link href={'/'}> Home</Link>
                <Link href={'/blog/all'}> All posts</Link>
                
            </ul>
        </div>
        
        <div className='flex  flex-row'>
            <a href={'https://github.com'} target='_blank'>
            <Image src={'/github-icon.svg'} alt='github' width={32} height={32}/>
            </a>
            <a href={'https://twitter.com'} target='_blank'>
            <Image src={'/twitter-icon.svg'} alt='twitter' width={32} height={32}/>
            </a>
        </div>
    </div>
  )
}

export default Footer