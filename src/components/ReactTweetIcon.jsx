import React from 'react'
import IconReactTweet from '../ui/IconReactTweet'

export default function ReactTweetIcon({tweet}) {
  return (
    <div className='flex gap-10 space-x-6 m-2'>
      <IconReactTweet icone="src/assets/Reply.svg" countNumber= {tweet.replies}/>
      <IconReactTweet icone="src/assets/Retweet.svg" countNumber={tweet.retweets}/>
      <IconReactTweet icone="src/assets/React.svg" countNumber={tweet.favorites}/>
      <IconReactTweet icone="src/assets/Share.svg"/>
    </div>
  )
}
