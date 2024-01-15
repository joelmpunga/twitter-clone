import React, { Children } from 'react'
import Title from '../ui/Title'
import IconNewTweet from '../ui/IconNewTweet'

export default function ContainerAside({ children, src }) {
    return (
        <div className='flex flex-col bg-gray-800 p-2 rounded-lg m-4 '>
            <div className='flex justify-between my-2 mr-4'>
                <Title content="Trends for you" classe="text-white font-bold" />
                {
                    src && <IconNewTweet icone={src} />
                }
            </div>
            {
                children
            }
            <div>
                <h3 className='text-blue-500'>Show more</h3>
            </div>
        </div>
    )
}
