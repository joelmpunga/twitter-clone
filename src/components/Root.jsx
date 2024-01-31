import {useState,useCallback,useEffect} from 'react'
import Timeline from './Timeline'
import SideBare from './SideBare'
import ContainerTrend from './ContainerTrend'
import FollowAcount from './FollowAcount'
import Trends from './Trends'
import axios from 'axios'
export default function Root({children}) {
  const [user,setUser]=useState([])
  const handleChange = useCallback(useEffect(() => {
    axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/2`)
        .then(res => {
            setUser(res.data);
        })
}, []), [user]);
  return (
    <div className='flex'>
      <SideBare user={user}/>
      {
        children
      }
      <Trends />
    </div>
  )
}
