import React from 'react'
import IconNewTweet from '../ui/IconNewTweet'
import ButtonArrounded from '../ui/ButtonArrounded'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'

export default function NewTweeter() {
    return (
        <>
            <div className='flex flex-wrap gap-2 border border-gray-500 p-2'>
                <ImageSmallArrounded src="src/assets/Profile-Photo.svg" />
                <div className='flex-1'>
                    <div className='flex flex-col gap-1'>
                        <textarea className='bg-black text-white resize-none' placeholder="What's happening?"></textarea>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 justify-start'>
                                <IconNewTweet icone="src/assets/Media.svg" />
                                <IconNewTweet icone="src/assets/Gif.svg" />
                                <IconNewTweet icone="src/assets/Poll.svg" />
                                <IconNewTweet icone="src/assets/Emoji.svg" />
                                <IconNewTweet icone="src/assets/Schedule.svg" />
                            </div>
                            <ButtonArrounded texte="Tweet" color="text-white  bg-blue-300" taille=" h-7 w-20" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


