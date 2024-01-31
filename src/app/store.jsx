import { configureStore } from '@reduxjs/toolkit'
import profilReducer from '../features/profil/profilSlice'
export default configureStore({
  reducer: {
    profil: profilReducer,
  },
})