import { createSlice } from '@reduxjs/toolkit'

const accountOwner = {
  "id": 6,
  "name": "Mpunga Ilunga",
  "username": "joelmpunga",
  "email": "joel@gmail.com",
  "profil": "https://pbs.twimg.com/profile_images/1136589142035521536/6Y2g5se__400x400.png",
  "thumbnailProfil": "https://pbs.twimg.com/profile_images/1136589142035521536/6Y2g5se__400x400.png",
  "Joined": "Joined October 2022"
}

export const profilSlice = createSlice({
  name: 'profil',
  initialState: {
    value: accountOwner,
  },
  reducers: {
    modifyName: (state) => {
      state.value.name = "New"
    },
    modifyUserName: (state) => {
      state.value +="modified"
    },
    modifyEmail: (state) => {
      state.value +="modified"
    },
  },
})
export const { modifyName, modifyEmail, modifyUserName } = profilSlice.actions

export default profilSlice.reducer