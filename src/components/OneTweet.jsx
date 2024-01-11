import React from 'react'
import ReactTweetIcon from './ReactTweetIcon'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import HeaderOneTweet from './HeaderOneTweet'
import MessageOneTweet from './MessageOneTweet'
import {format} from 'date-fns'

export default function OneTweet({tweet}) {
    return (
        <div className='flex flex-wrap gap border border-gray-500 p-3 space-x-3 w-1/1'>
            <ImageSmallArrounded src={tweet.author_avatar} />
            <div className='flex-1'>
                <HeaderOneTweet pseudo={tweet.source} tag={"@"+tweet.source} date={(format(new Date(tweet.date),'EEEE dd MM yyyy'))} tweet={tweet}/>
                <MessageOneTweet image={tweet.image} message={tweet.text} />
                <ReactTweetIcon icone="src/assets/Media.svg" tweet={tweet}/>
            </div>
        </div>
    )
}
