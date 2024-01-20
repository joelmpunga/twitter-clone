import React, { useState } from 'react'
import IconNewTweet from '../ui/IconNewTweet'
import ButtonArrounded from '../ui/ButtonArrounded'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'

export default function NewTweeter() {
    const [hasContent, setHasContent] = useState(false)
    const [buttonBackGr, setButtonBackGr] = useState("bg-blue-300")
    const handleChange = (e) => {
        if (e.target.value == "") {
            setHasContent(false)
            setButtonBackGr("bg-blue-300")
        } else {
            setHasContent(true)
            setButtonBackGr("bg-blue-500")
        }
    }
    return (
        <>
            <div className='flex flex-wrap gap-2 border border-gray-700 p-2'>
                <ImageSmallArrounded classe="w-10 h-10" src="src/assets/Profile-Photo.svg" />
                <div className='flex-1'>
                    <div className='flex flex-col gap-1'>
                        <textarea className='bg-black text-white resize-none outline-none' placeholder="What's happening?" onChange={(e) => (handleChange(e))}></textarea>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 justify-start'>
                                <IconNewTweet icone="src/assets/Media.svg" />
                                <IconNewTweet icone="src/assets/Gif.svg" />
                                <IconNewTweet icone="src/assets/Poll.svg" />
                                <IconNewTweet icone="src/assets/Emoji.svg" />
                                <IconNewTweet icone="src/assets/Schedule.svg" />
                            </div>
                            {
                                <ButtonArrounded texte="Tweet" color={"text-white " + buttonBackGr} taille=" h-7 w-20" />

                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


