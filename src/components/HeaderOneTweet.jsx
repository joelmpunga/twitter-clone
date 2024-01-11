import React from 'react'
import IconHeaderOneTweet from '../ui/IconHeaderOneTweet'

export default function HeaderOneTweet({pseudo,tag,date}) {
  return (
    <div className='flex gap-1 align-text-bottom'>
      <h2 className='text-white font-bold'>{pseudo}</h2>
      <IconHeaderOneTweet icone="src/assets/Verified.svg"/>
      <h2 className='text-gray-500'>{tag}</h2>
      <h2 className='text-gray-500'>{date}</h2>
    </div>
  )
}
