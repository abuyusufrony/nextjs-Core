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
                        </div>
                    )


                })
            }
        </div>
    );
};

export default page;