import {useState,useEffect,useCallback} from 'react'
import axios from 'axios'
export users
export default function UserConnected() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/`+posts.userId)
            .then(res => {
                setUsers(res.data);
            })
    }, ['users'])
  return (
    <div>
      
    </div>
  )
}
