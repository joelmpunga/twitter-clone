import React from 'react'
import ReactTweetIcon from './ReactTweetIcon'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import HeaderOneTweet from './HeaderOneTweet'
import MessageOneTweet from './MessageOneTweet'
import axios from 'axios'
import { createRoutesFromElements } from 'react-router-dom'
import tailleTableau from '../functions/tailleTableau'
import { useState,useEffect } from 'react'
export default function OneTweet({posts,comments}) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/`+posts.userId)
            .then(res => {
                setUsers(res.data);
            })
    }, ['users'])
    return (
        <div className='flex flex-wrap gap border border-gray-700 p-3 space-x-3 w-1/1'>
            <ImageSmallArrounded src={users.profil} classe = "w-10 h-10"/>
            <div className='flex-1'>
                <HeaderOneTweet pseudo={users.name} tag={"@"+users.name} date={posts.date} tweet={posts}/>
                <MessageOneTweet image={posts.thumbnailUrl} message={posts.body} />
                <ReactTweetIcon posts={posts} comments = {comments}/>
            </div>
        </div>
    )
}
