import React from 'react'
import Onglet from '../ui/Onglet'
import Title from '../ui/Title'
import FollowAcount from './FollowAcount'
import ShowMore from '../ui/ShowMore'

export default function ProfilOnglets({user}) {
    let accounts = [

        {

            "author_avatar": "https://picsum.photos/200?random=1604299903000",

            "source": "Twitter",

            "date": 1705312377284,

            "favorites": "92746",

            "id": "1323155810910982145",

            "isVerified": true,

            "replies": "24785",

            "retweets": "16287",

            "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!",

            "bio": "My name is Paul, I enjoy building computers. http://youtube.com/paulshardware | TikTok/Hive: paulshardware IG: paulhardware"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1604084613000",

            "source": "CNN",

            "date": 1704017445657,

            "favorites": "44842",

            "id": "1322252819299135488",

            "isVerified": false,

            "replies": "1024",

            "retweets": "9563",

            "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",

            "image": "https://picsum.photos/200?random=1322252819299135488",

            "bio": "A leading expert on AI, spoke at US Senate AI Oversight Subcommittee. Founder/CEO of Geometric Intelligence (acq. by Uber), TED speaker, host Humans vs Machines"

        },

        {

            "author_avatar": "https://picsum.photos/200?random=1554075712000",

            "source": "New York Times",

            "date": 1671445003685,

            "favorites": 58201,

            "id": "1313494418314457090",

            "isVerified": true,

            "replies": 0,

            "retweets": 14359,

            "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border.......",

            "bio": "Président National de l'ASADHO. Vice-President de la FIDH. Tel: +243 81 17 29 908."

        },

    ]
    return (
        <>
            <div className='flex gap-3'>
                <Onglet onglet="Posts" active={true} />
                <Onglet onglet="Replies" />
                <Onglet onglet="Highlights" />
                <Onglet onglet="Media" />
                <Onglet onglet="Likes" />
            </div>
            <div className='border border-gray-600 p-4'>
                <h1 className='text-white font-bold'>How to follow</h1>
                {
                    accounts.map((tweet) => (<FollowAcount key={tweet.id} pseudo={tweet.source} tag={tweet.source} tweet={tweet} />))
                }
                <ShowMore />
            </div>
        </>
    )
}
