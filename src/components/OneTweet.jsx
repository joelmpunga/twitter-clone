import React from 'react'
import ReactTweetIcon from './ReactTweetIcon'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import HeaderOneTweet from './HeaderOneTweet'
import MessageOneTweet from './MessageOneTweet'

export default function OneTweet() {
    return (
        <div className='flex flex-wrap gap border border-gray-500 p-3 space-x-3 w-1/1'>
            <ImageSmallArrounded src="src/assets/profil.png" />
            <div className='flex-1'>
                <HeaderOneTweet pseudo="New york times" tag="@newTime" date="7 jours" />
                <MessageOneTweet image="src/assets/profil2.png" message="Voici mon premier Tweet avec mon nouvel application" />
                <ReactTweetIcon icone="src/assets/Media.svg" />
            </div>
        </div>
    )
}
