import React from 'react'
import FollowAcount from './FollowAcount'
import ContainerAside from './ContainerAside'
import SearchAside from './SearchAside'
import TrendsAside from './TrendsAside'

export default function Aside() {
    let tweets = [

        {

            "author_avatar": "https://picsum.photos/200?random=1604299903000",

            "source": "Twitter",

            "date": 1705312377284,

            "favorites": "92746",

            "id": "1323155810910982145",

            "isVerified": true,

            "replies": "24785",

            "retweets": "16287",

            "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

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

            "image": "https://picsum.photos/200?random=1322252819299135488"

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

            "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."

        },

    ]
    return (
        <div className='flex gap-0 w-1/3 mx-auto justify-start'>
            <div className='flex gap-0 justify-start w-1/2 flex-col'>
                <SearchAside/>
                <ContainerAside src="src/assets/Settings.svg">
                    <TrendsAside/>
                    <TrendsAside/>
                    <TrendsAside/>
                    <TrendsAside/>
                </ContainerAside>
                <ContainerAside>
                    {
                        tweets.map((tweet) => (<FollowAcount key={tweet.id} pseudo={tweet.source} tag={tweet.source} tweet={tweet} />))
                    }
                </ContainerAside>
            </div>
        </div>
    )
}
