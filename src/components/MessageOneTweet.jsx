import React from 'react'

export default function MessageOneTweet({ message, image }) {
    return (
        <div className='py-2 flex flex-col'>
                <p className='text-white text-left'>{message}</p>
            {
                image && <img src={image} alt="" className='max-w-1/1 rounded-2xl h-auto' />
            }
        </div>
    )
}
