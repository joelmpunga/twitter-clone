import React from 'react'
import IconNewTweet from '../ui/IconNewTweet'

export default function SearchAside() {
    return (
        <div className='flex bg-gray-700 gap-3 align-middle my-2 mx-3 px-2 ml-5 h-10 rounded-2xl '>
                <img src="src/assets/Search.svg" className='h-5 w-5 my-2'/>
                <input className=' bg-gray-700 rounded-2xl border border-none text-white outline-none' type="text" placeholder='Search Twitter' />
        </div>
    )
}
