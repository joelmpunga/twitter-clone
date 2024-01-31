import { configureStore } from '@reduxjs/toolkit'
import profilSlice from '../features/profil/profilSlice'
export default configureStore({
  reducer: {
    profil: profilSlice,
  },
})