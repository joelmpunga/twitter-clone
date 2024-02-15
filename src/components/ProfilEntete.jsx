import { useState, useEffect, useCallback } from 'react'
import ImageSmallArrounded from '../ui/ImageSmallArrounded'
import ButtonArrounded from '../ui/ButtonArrounded'
import NameAccount from './NameAccount'
import { Link } from 'react-router-dom'
import ProfilNbreFollow from '../ui/ProfilNbreFollow'
import ProfilDateJoin from './ProfilDateJoin'
import ProfilOnglets from './ProfilOnglets'
import Linkify from 'react-linkify'
import axios from 'axios'
import OneTweet from './OneTweet'


export default function ProfilEntete() {
    const [user, setUser] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    const handleChange = useCallback(useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/2`)
            .then(res => {
                setUser(res.data);
            })
    }, []), ['user']);
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/posts`)
            .then(res => {
                setPosts(res.data);
            })
    }, ['posts'])
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/posts`)
            .then(res => {
                setComments(res.data);
            })
    }, ['comments'])
    const ownerPosts = posts.filter((posts) => posts.userId == user.id)
    return (
        <div className='border border-gray-600'>
            <img src={user.profil} alt="" className='w-full h-60' />
            <div className='-mt-20 mx-4 flex justify-between'>
                <ImageSmallArrounded src={user.thumbnailProfil} classe="h-40 w-40 border border-black" />
                <Link to='/profil/edit/:id'>
                    <ButtonArrounded texte="Edit profile" color="text-white border border-white hover:bg-gray-800" taille="w-40 h-10 mt-24 border" />
                </Link>
            </div>
            <div className='ml-2'>
                <NameAccount user={user} />
            </div>
            <div className='mt-3 flex gap-2 flex-col p-3'>
                <p className='text-white'><Linkify>{'Lorem ipsum dolor sit amet consectetur adipisicing elit.' +
                    'Minima officiis aspernatur ut quas amet autem veritatis ' + user.email + ' laudantium molestias at expedita' +
                    'molestiae perspiciatis nisi consequatur eos ratione repellendus sapiente, est ab.'}</Linkify></p>
                <Link to="/profil" className='text-blue-600 hover:underline'>Translate bio</Link>
            </div>
            <ProfilDateJoin icone="src/assets/Schedule.svg" texte={user.Joined} />
            <div className='flex gap-6 p-3'>
                <ProfilNbreFollow number="24" texte="Following" classeTexte="text-gray-600 hover:underline" classeNumber="text-white" />
                <ProfilNbreFollow number="9" texte="Followers" classeTexte="text-gray-600 hover:underline" classeNumber="text-white" />
            </div>
            {
                ownerPosts.map((post) => (<OneTweet key={post.id} posts={post} comments={comments.filter((comments) => comments.postId == post.id)} />))
            }
            <div>
                <ProfilOnglets user = {user}/>
            </div>
        </div>
    )
}
