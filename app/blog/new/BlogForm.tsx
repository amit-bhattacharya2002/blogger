"use client"
import React from 'react'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { createPost } from '@/app/actions/publishPost'

import type { Category } from '@prisma/client';
import CategoryDropdown from './CategoryDropdown';

import "@uploadthing/react/styles.css";
 
import { UploadButton } from "../../utils/uploadthing";

type Props = {
    // blogCategories: Category[]
}


const BlogForm = (props: Props) => {
    const {data : session} = useSession();

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('')

    const [submitted, setSubmitted] = useState<boolean>(false);

    const [thumbnail, setThumbnail] = useState<string | null>(null);



    const [postID, setPostID] = useState<number | null>(null);

    if(!session) return (
        <div>You must be signed in to post</div>
    )

    const handleSubmit = async( e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = session?.user as any;
        const userId = user?.id;

        if(!userId) return;
        try{

            const post = await createPost( {title, content, authorId: userId, imgUrl: thumbnail})



            setSubmitted(true)
        }catch (error){
            console.log(error)
        }



    }

    if(submitted) return (
        <div>Post Submitted</div>
    )
  return (
    <div>
        <form onSubmit={handleSubmit} className='flex h-[calc(100vh-130px)] mx-10 mt-1 flex-col'>
            <div className='mb-2'>
                <input type="text" placeholder='Title' className="border text-4xl px-3 py-10 w-full h-10 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]" value={title} onChange={(e)=> setTitle(e.target.value)} name="title" />

            </div>
            
            <textarea value={content} className="border px-3 py-3 h-full w-full shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]" onChange={(e)=> setContent(e.target.value)} name="content" placeholder='share your thoughts'/>



            {/* Upload image */}
            
            <div className="selt-start flex justify-between mt-5">
                <label>Add thumbnail image (optional)</label>
                <UploadButton 
                    className='w-fit flex'
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        if(res){
                            setThumbnail(res[0].url)
                        }
                        alert("Upload Completed");
                    }}
                    onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                    }}
                />
            </div>



            <button type='submit' className='border mt-2 w-[20%] place-self-center shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]'>Create</button>
 
        </form>
    </div>
  )
}

export default BlogForm