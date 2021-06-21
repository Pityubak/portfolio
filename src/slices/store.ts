import { configureStore } from "@reduxjs/toolkit"
import { navigationReducer } from "./navigationSlice"
import { skillReducer } from "./skillSlice"

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    skill: skillReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
