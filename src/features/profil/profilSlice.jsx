import { createSlice } from '@reduxjs/toolkit'
import { useState,useContext,useCallback } from 'react'
import axios from 'axios'

const [user, setUser] = useState([])
useEffect(() => {
  axios.get(`https://my-json-server.typicode.com/amare53/twiterdb/users/2`)
    .then(res => {
      setUser(res.data);
    })
}, ['user'])

export const profilSlice = createSlice({
  name: 'profil',
  initialState: {
    value: user,
  },
  reducers: {
    modify: (state) => {
      state.value = "New Account"
    }
  },
})
export const { modifyName, modifyEmail, modifyUserName } = profilSlice.actions

export default profilSlice.reducer