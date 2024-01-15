import React from 'react'
import IconHeaderOneTweet from '../ui/IconHeaderOneTweet'
import Title from '../ui/Title'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import ButtonArrounded from '../ui/ButtonArrounded'

export default function FollowAcount({ pseudo, tag, tweet }) {
    return (
        <div className='flex gap-1 justify-start w-5/5 my-auto'>
            <ImageSmallArrounded src={tweet.author_avatar} />
            <div className='flex gap-1 flex-col w-3/5 my-0'>
                <div className='flex gap-0 justify-start'>
                    <Title classe="text-white" content={pseudo} />
                    {
                        tweet.isVerified && <IconHeaderOneTweet icone="src/assets/Verified.svg" />

                    }
                </div>
                <Title classe='text-gray-500' content={"@" + tag} />
            </div >
            <ButtonArrounded texte="Follow" color="text-black bg-white px-3" taille="w-30 h-7" />
        </div>
    )
}
