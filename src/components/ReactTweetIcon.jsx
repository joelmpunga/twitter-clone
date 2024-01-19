import React from 'react'
import IconReactTweet from '../ui/IconReactTweet'

export default function ReactTweetIcon({tweet}) {
  return (
    <div className='flex gap-10 space-x-6 m-2'>
      <IconReactTweet icone="src/assets/Reply.svg" svg="src/assets/Reply.svg" countNumber= {tweet.replies}/>
      <IconReactTweet icone="src/assets/Reply.svg" svg="src/assets/Retweet.svg" countNumber={tweet.retweets}/>
      <IconReactTweet icone="src/assets/React1.svg" svg="src/assets/React.svg" countNumber={tweet.favorites}/>
      <IconReactTweet svg="src/assets/Share.svg"/>
    </div>
  )
}
