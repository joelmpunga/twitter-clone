import React from 'react'
import { linkify} from 'react-linkify'
import Linkify from 'react-linkify'
import '../App.css'

export default function MessageOneTweet({ message, image }) {
    return (
        <div className='py-2 flex flex-col gap-2'>
            <p className='text-white text-left'>
                <Linkify>{message}</Linkify>
            </p>
            {
                image && <img src={image} alt="image du tweet" className='object-cover max-w-1/1 rounded-2xl max-h-60' />
            }
        </div>
    )
}
