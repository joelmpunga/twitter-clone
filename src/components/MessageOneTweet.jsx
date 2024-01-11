import React from 'react'
// import AutoLink from 'react-autolink'
export default function MessageOneTweet({ message, image }) {
    return (
        <div className='py-2 flex flex-col gap-2'>
            <p className='text-white text-left'>
                {/* <AutoLink text=/> */}
                {message}
            </p>
            {
                image && <img src={image} alt="image du tweet" className='object-cover max-w-1/1 rounded-2xl max-h-60' />
            }
        </div>
    )
}
