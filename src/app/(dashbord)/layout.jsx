import React from 'react';

const layout = ({ children }) => {
    return (
        <div className='flex' >
            <div className='grid grid-cols-12'>
                <div className='col-span-3'>
                    <h1>user</h1>
                </div>
            </div>
            <div className='col-span-9'>
                {children}
            </div>

        </div>
    );
};

export default layout;