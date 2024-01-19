import React from 'react'
import IconReactTweet from '../ui/IconReactTweet'

export default function ReactTweetIcon({ tweet }) {
  return (
    <div className='flex gap-10 space-x-6 m-2'>
      <IconReactTweet icone="src/assets/Reply1.svg" svg="src/assets/Reply.svg" iconeOver="src/assets/Reply1.svg" countNumber={tweet.replies} textColor="text-blue-500" />
      <IconReactTweet icone="src/assets/Retweet1.svg" svg="src/assets/Retweet.svg" iconeOver="src/assets/Retweet1.svg" countNumber={tweet.retweets} textColor="text-green-500" />
      <IconReactTweet icone="src/assets/React1.svg" svg="src/assets/React.svg" iconeOver="src/assets/React2.svg" countNumber={tweet.favorites} textColor="text-red-500" />
      <IconReactTweet icone="src/assets/Share2.svg" svg="src/assets/Share.svg" iconeOver="src/assets/Share2.svg" />
    </div>
  )
}
