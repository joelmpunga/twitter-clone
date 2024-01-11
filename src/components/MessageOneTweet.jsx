import React from 'react'

export default function MessageOneTweet({ message, image }) {
    return (
        <div className='py-2 flex flex-col'>
            <div>
                <p className='text-white text-left'>{message}</p>
            </div>
            {
                image && <img src={image} alt="" className='object-none md:object-cover w-auto rounded-2xl h-40' />
            }
        </div>
    )
}
