import React from 'react'
import IconNewTweet from '../ui/IconNewTweet'
import ButtonArrounded from '../ui/ButtonArrounded'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'

export default function NewTweeter() {
    return (
        <>
            <div className='flex flex-wrap gap-2 border border-gray-500 p-2'>
                <ImageSmallArrounded src="src/assets/profil.png" />
                <div className='flex-1'>
                    <div className='text-left'>
                        <textarea className='bg-black text-white text-left' placeholder="What's happening?"></textarea>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 justify-start'>
                            <IconNewTweet icone="src/assets/Media.svg" />
                            <IconNewTweet icone="src/assets/Gif.svg" />
                            <IconNewTweet icone="src/assets/Media.svg" />
                            <IconNewTweet icone="src/assets/Media.svg" />
                            <IconNewTweet icone="src/assets/Media.svg" />
                        </div>
                        <div className=''>
                            <ButtonArrounded texte="Tweet" color="text-white" className="w-1" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


