import React from 'react'
import Entete from './Entete'
import NewTweeter from './NewTweeter'
import OneTweet from './OneTweet'

export default function Wrapper() {
  return (
    <div className='w-1/2 m-auto'>
      <Entete/>
      <NewTweeter/>
      <OneTweet/>
    </div>
  )
}
