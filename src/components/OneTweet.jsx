import React from 'react'
import ReactTweetIcon from './ReactTweetIcon'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import HeaderOneTweet from './HeaderOneTweet'
import MessageOneTweet from './MessageOneTweet'

export default function OneTweet() {
    return (
            <div className='flex flex-1 gap border border-gray-500 p-3 space-x-3'>
                <div className=''>
                    <ImageSmallArrounded src="src/assets/profil.png" />
                </div>
                <div className='flex-1'>
                    <div className=''>
                        <HeaderOneTweet pseudo="New york times" tag="@newTime" date="7 jours" />
                    </div>
                    <div className=''>
                        <MessageOneTweet image="src/assets/profil.png" message="Voici mon premier Tweet avec mon nouvel application" />
                    </div>
                    <div className=''>
                        <ReactTweetIcon icone="src/assets/Media.svg" />
                    </div>
                </div>
            </div>
    )
}
