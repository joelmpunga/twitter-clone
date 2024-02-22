import React from 'react'
import IconReactTweet from '../ui/IconReactTweet'
import tailleTableau from '../functions/tailleTableau'

export default function ReactTweetIcon({ posts, users, comments }) {
  const tabComments = []
  tabComments.push(comments)
  const number = tailleTableau(tabComments)
  return (
    <div className='flex gap-10 space-x-6 m-2'>
      <IconReactTweet iconeClick="src/assets/Reply1.svg" svgDefault="src/assets/Reply.svg" iconeOver="src/assets/Reply1.svg" countNumber={number.length} textColor="text-blue-500" />
      <IconReactTweet iconeClick="src/assets/Retweet1.svg" svgDefault="src/assets/Retweet.svg" iconeOver="src/assets/Retweet1.svg" countNumber={posts.repost?posts.repost:0} textColor="text-green-500" />
      <IconReactTweet iconeClick="src/assets/React1.svg" svgDefault="src/assets/React.svg" iconeOver="src/assets/React2.svg" countNumber={posts.like?posts.like:0} textColor="text-red-500" routeClicked = {"http://localhost:3000/posts/delike/"+posts.id} routeNoClicked = {"http://localhost:3000/posts/like/"+posts.id}/>
      <IconReactTweet iconeClick="src/assets/Share2.svg" svgDefault="src/assets/Share.svg" iconeOver="src/assets/Share2.svg" />
    </div>
  )
}
