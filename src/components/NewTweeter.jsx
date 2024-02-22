import { useState, useEffect } from 'react'
import IconNewTweet from '../ui/IconNewTweet'
import ButtonArrounded from '../ui/ButtonArrounded'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function NewTweeter() {
    const [hasContent, setHasContent] = useState(false)
    const [buttonBackGr, setButtonBackGr] = useState("bg-blue-300")
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/users/`+12)
            .then(res => {
                setUser(res.data);
            })
    }, ['user'])
    const handleChange = (e) => {
        if (e.target.value == "") {
            setHasContent(false)
            setButtonBackGr("bg-blue-300")
        } else {
            setHasContent(true)
            setButtonBackGr("bg-blue-500")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        let data = new FormData(form)
        let object = Object.fromEntries(data)
        console.log(object)
    }
    return (
        <>
            <div className='flex flex-wrap gap-2 border border-gray-700 p-2'>
                <Link to='/profil'>
                    <ImageSmallArrounded classe="w-10 h-10" src={user.profil} />
                </Link>
                <div className='flex-1'>
                    <div className='flex flex-col gap-1'>
                        <textarea className='bg-black text-white resize-none outline-none' placeholder="What's happening?" name='body' onChange={(e) => (handleChange(e))}></textarea>
                        <div className='flex justify-between'>
                            <div className='flex gap-2 justify-start'>
                                <IconNewTweet icone="src/assets/Media.svg" />
                                <IconNewTweet icone="src/assets/Gif.svg" />
                                <IconNewTweet icone="src/assets/Poll.svg" />
                                <IconNewTweet icone="src/assets/Emoji.svg" />
                                <IconNewTweet icone="src/assets/Schedule.svg" />
                            </div>
                            {
                                <ButtonArrounded texte="Tweet" color={"text-white " + buttonBackGr} taille=" h-7 w-20" type="submit" />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


