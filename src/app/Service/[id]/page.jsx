import React from 'react';

const page = ({ params }) => {

    const id = params.id;
    return (
        <div>
            <p>id are :{id}</p>
        </div>
    );
};

export default page;