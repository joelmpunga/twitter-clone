import React from 'react'
import IconReactTweet from '../ui/IconReactTweet'

export default function ReactTweetIcon() {
  return (
    <div className='flex gap-10 space-x-6 m-2'>
      <IconReactTweet icone="src/assets/Reply.svg" countNumber="13"/>
      <IconReactTweet icone="src/assets/Retweet.svg" countNumber="43"/>
      <IconReactTweet icone="src/assets/React.svg" countNumber="7"/>
      <IconReactTweet icone="src/assets/Share.svg"/>
    </div>
  )
}
