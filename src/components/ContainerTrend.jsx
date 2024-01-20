import React, { Children } from 'react'
import Title from '../ui/Title'
import IconNewTweet from '../ui/IconNewTweet'
import ShowMore from '../ui/ShowMore'

export default function ContainerTrend({ children, src,content }) {
    return (
        <div className='flex flex-col bg-gray-800 p-2 rounded-lg m-4 '>
            <div className='flex justify-between my-2 mr-4'>
                <Title content={content} classe="text-white font-bold" />
                {
                    src && <IconNewTweet icone={src} />
                }
            </div>
            {
                children
            }
            <ShowMore/>
        </div>
    )
}
