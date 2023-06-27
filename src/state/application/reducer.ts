import { createSlice } from '@reduxjs/toolkit'


// export enum ApplicationModal {
//   WALLET,
// }

export interface ApplicationState {
  readonly openModal: number,
  throttleFlag:boolean
}

export interface TokenDecimals {
  symbol: string
  decimals: number
  balance: string
}

const initialState: ApplicationState = {
  openModal: 0,
  throttleFlag:false,
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setOuterWidth(state, action) {
      state.openModal = action.payload
    },
    setThrottleFlag(state, action) {
      state.throttleFlag = action.payload
    },
  },
})

export const { setOuterWidth ,setThrottleFlag} =
  applicationSlice.actions
export default applicationSlice.reducer
