import React from 'react'
import IconHeaderOneTweet from '../ui/IconHeaderOneTweet'
import formatDate from '../functions/formatDate'
import Title from '../ui/Title'

export default function HeaderOneTweet({ pseudo, tag, date, tweet }) {
  return (
    <div className='flex gap-1 align-text-bottom'>
      <Title classe="text-white font-bold" content={pseudo} />
      {
        tweet.isVerified && <IconHeaderOneTweet icone="src/assets/Verified.svg" />

      }
      <Title classe='text-gray-500' content={tag} />
      <Title classe='text-gray-500' content={formatDate(date)} />
    </div >
  )
}
