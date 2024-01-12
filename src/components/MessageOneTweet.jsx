import React from 'react'
import Linkify from 'react-linkify'
export default function MessageOneTweet({ message, image }) {
    let linkifyProps = {
        className: 'text-blue-600',
    };
    return (
        <div className='py-2 flex flex-col gap-2'>
            <p className='text-white text-left'>
                <Linkify linkifyProperties={linkifyProps}>{message}</Linkify>
            </p>
            {
                image && <img src={image} alt="image du tweet" className='object-cover max-w-1/1 rounded-2xl max-h-60' />
            }
        </div>
    )
}
