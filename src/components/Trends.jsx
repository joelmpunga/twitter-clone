import {useState,useCallback,useEffect} from 'react'
import FollowAcount from './FollowAcount'
import ContainerTrend from './ContainerTrend'
import SearchAside from './SearchAside'
import TrendsAside from './TrendsAside'
import Title from '../ui/Title'
import axios from 'axios'

export default function Trends({user}) {
    const [users,setUsers]=useState([])
    const handleChange = useCallback(useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users`)
            .then(res => {
                setUsers(res.data);
            })
    }, []), [users]);
    const accounts = users.filter((users) => users.id !== user.id)
    // let accounts = [

    //     {

    //         "author_avatar": "https://picsum.photos/200?random=1604299903000",

    //         "source": "Twitter",

    //         "date": 1705312377284,

    //         "favorites": "92746",

    //         "id": "1323155810910982145",

    //         "isVerified": true,

    //         "replies": "24785",

    //         "retweets": "16287",

    //         "text": "...As I said at the debate – “Will you remember that Texas?Pennsylvania? Ohio? New Mexico?” I will always protect American Energy and American Jobs! Get out and VOTE #MAGA!"

    //     },

    //     {

    //         "author_avatar": "https://picsum.photos/200?random=1604084613000",

    //         "source": "CNN",

    //         "date": 1704017445657,

    //         "favorites": "44842",

    //         "id": "1322252819299135488",

    //         "isVerified": false,

    //         "replies": "1024",

    //         "retweets": "9563",

    //         "text": "...a cheerleader for NAFTA – sending your auto Jobs to Mexico. He voted for China’s entry into the World Trade Organization – gutting your industries to finance China’s rise. HALF of all Michigan auto manufacturing jobs were ELIMINATED after the Biden-Backed NAFTA and China...",

    //         "image": "https://picsum.photos/200?random=1322252819299135488"

    //     },

    //     {

    //         "author_avatar": "https://picsum.photos/200?random=1554075712000",

    //         "source": "New York Times",

    //         "date": 1671445003685,

    //         "favorites": 58201,

    //         "id": "1313494418314457090",

    //         "isVerified": true,

    //         "replies": 0,

    //         "retweets": 14359,

    //         "text": "....However, if for any reason Mexico stops apprehending and bringing the illegals back to where they came from, the U.S. will be forced to Tariff at 25% all cars made in Mexico and shipped over the Border to us. If that doesn’t work, which it will, I will close the Border......."

    //     },

    // ]
    return (
        <div className='flex gap-0 w-1/3 mx-auto justify-start'>
            <div className='flex gap-0 justify-start w-1/2 flex-col'>
                <div className='sticky flex flex-col -top-60'>
                    <SearchAside />
                    <ContainerTrend src="src/assets/Settings.svg" content="Trends of you">
                        <TrendsAside />
                        <TrendsAside />
                        <TrendsAside />
                        <TrendsAside />
                    </ContainerTrend>
                    <ContainerTrend content="Who to follow">
                        {
                            accounts.map((tweet) => (<FollowAcount key={tweet.id} pseudo={tweet.name} tag={tweet.name} tweet={tweet} />))
                        }
                    </ContainerTrend>
                    <Title />
                    <div className='text-center'>
                        <small className="text-gray-500 text-6">Terms of Service Privacy Policy Cookie Policy</small>
                        <br />
                        <small className="text-gray-500 text-6">Accessibility Ads info More © 2024 X Corp.</small>
                    </div>

                </div>
            </div>
        </div>
    )
}
