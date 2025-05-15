import React from 'react';
export const Singlepost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data;
}

const page = async ({ params }) => {

    const p = await params;
    const Singledata = await Singlepost(p.id)
    return (
        <div className=' border-2 border-amber-400 p-3'>
            <p className='font-semibold text-sm'>Content id are :{p.id}</p>
            <p className='font-stretch-semi-expanded '>Here we are see post data {Singledata.body}</p>

        </div>
    );
};

export default page;