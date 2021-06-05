import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SkillSliceState {
  progress: number
}

const initialState: SkillSliceState = {
  progress: 0,
}

const skillSlice = createSlice({
  name: "skill",
  initialState,
  reducers: {
    setProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload
    },
  },
})

export const skillReducer = skillSlice.reducer

export const { setProgress } = skillSlice.actions
