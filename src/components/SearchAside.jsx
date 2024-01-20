import React from 'react'
import IconNewTweet from '../ui/IconNewTweet'

export default function SearchAside() {
    return (
        <div className='flex bg-gray-800 gap-3 align-middle px-2 h-10 rounded-2xl mx-4 my-2'>
            <img src="src/assets/Search.svg" className='h-5 w-5 my-2' />
            <input className=' bg-gray-800 rounded-2xl border border-none text-white outline-none' type="text" placeholder='Search Twitter' />
        </div>
    )
}
