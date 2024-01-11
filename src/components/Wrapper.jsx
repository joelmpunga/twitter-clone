import React from 'react'
import Entete from './Entete'
import NewTweeter from './NewTweeter'
import OneTweet from './OneTweet'

export default function Wrapper() {
  return (
    <div className='w-1/2 mx-auto h-1/1 mt-0'>
      <Entete/>
      <NewTweeter/>
      <OneTweet/>
    </div>
  )
}
