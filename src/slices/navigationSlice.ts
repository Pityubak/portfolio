import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
  index: number
  firstRun: boolean
  sidebarCount: boolean
}

const initialState: CounterState = {
  index: 0,
  firstRun: true,
  sidebarCount: true,
}

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    pageIndexChange: (state, action: PayloadAction<number>) => {
      state.index = action.payload
    },
    triggerOffPreloader: state => {
      state.firstRun = false
    },
    countAnimationOff: state => {
      state.sidebarCount = false
    },
  },
})

export const navigationReducer = navigationSlice.reducer

export const { pageIndexChange, triggerOffPreloader, countAnimationOff } =
  navigationSlice.actions
