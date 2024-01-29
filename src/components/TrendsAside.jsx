import React from 'react'
import IconNewTweet from '../ui/IconNewTweet'

export default function TrendsAside() {
  return (
    <div className='flex align-top justify-between px-2 py-4 hover:bg-slate-700'>
      <div className='text-white text-base/1'>
        <small className='text-gray-400'>Treding in Turkey</small>
        <h2>#SQUID</h2>
        <small className='text-gray-400'>2,066 Tweets</small>
      </div>
      <IconNewTweet icone="src/assets/More-2.svg" />
    </div>
  )
}
