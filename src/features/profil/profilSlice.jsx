import { createSlice } from '@reduxjs/toolkit'

const accountOwner = {
    'userId': 6,
    'id': 6,
    'title': "dolorem eum magni eos aperiam quia",
    'body': "the texte",
    'like': 0,
    'repost': 0,
}

export const profilSlice = createSlice({
  name: 'profil',
  initialState: {
    value: accountOwner,
  },
  reducers: {
    modify: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { modify, decrement, incrementByAmount } = profilSlice.actions

export default profilSlice.reducer