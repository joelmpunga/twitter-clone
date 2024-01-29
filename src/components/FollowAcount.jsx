import React from 'react'
import IconHeaderOneTweet from '../ui/IconHeaderOneTweet'
import Title from '../ui/Title'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import ButtonArrounded from '../ui/ButtonArrounded'
import Linkify from 'react-linkify'

export default function FollowAcount({ pseudo, tag, tweet }) {
    return (
        <div className='hover:bg-slate-900'>
            <div className='flex gap-1 justify-between w-5/5 my-auto'>
                <div className='flex gap-2'>
                    <ImageSmallArrounded classe="w-10 h-10" src={tweet.author_avatar} />
                    <div className='flex gap-1 flex-col w-3/5 my-0 text-base/6 '>
                        <div className='flex gap-0 justify-start'>
                            <Title classe="text-white hover:underline" content={pseudo} />
                            {
                                tweet.isVerified && <IconHeaderOneTweet icone="src/assets/Verified.svg" />

                            }
                        </div>
                        <Title classe='text-gray-500' content={"@" + tag} />
                    </div >
                </div>
                <ButtonArrounded texte="Follow" color="text-black bg-white px-3 my-4" taille="w-30 h-7" />
            </div>

            {
                tweet.bio && <p className='text-white ml-10'><Linkify>{tweet.bio}</Linkify></p>
            }

        </div>
    )
}
