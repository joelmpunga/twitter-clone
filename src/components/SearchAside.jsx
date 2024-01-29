import React from 'react'
import IconNewTweet from '../ui/IconNewTweet'

export default function SearchAside() {
    const colorBg = 'bg-gray-900'
    return (
        <div className={'flex gap-3 h-10 rounded-2xl mx-4 my-2 '+colorBg}>
            <img src="src/assets/Search.svg" className='h-5 w-5 my-2' />
            <input className={' rounded-2xl border border-none text-white outline-none '+colorBg} type="text" placeholder='Search Twitter' />
        </div>
    )
}
