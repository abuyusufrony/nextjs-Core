import Link from 'next/link';
import React from 'react';
export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data;
}

const page = async () => {
    const Allpost = await getPosts()
    console.log(Allpost)

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                Allpost.map((singlePost) => {
                    return (
                        <div className='' key={singlePost.id}>
                            <p> Post Title aare :{singlePost.title}</p>
                            <Link href={`/Posts/${singlePost.id}`}><button className='cursor-pointer'>Details</button></Link>

                        </div>
                    )


                })
            }
        </div>
    );
};

export default page;