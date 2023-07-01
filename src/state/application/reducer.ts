import { createSlice } from "@reduxjs/toolkit";

// export enum ApplicationModal {
//   WALLET,
// }

export interface ApplicationState {
  readonly openModal: number;
  throttleFlag: boolean;
  activeIndex: number;
  isChrome: boolean;
  activeType: number;
  comePage: number;
}

export interface TokenDecimals {
  symbol: string;
  decimals: number;
  balance: string;
}

const initialState: ApplicationState = {
  openModal: 0,
  activeIndex: 0,
  throttleFlag: false,
  isChrome: false,
  comePage: 0,
  activeType: 0,
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setOuterWidth(state, action) {
      state.openModal = action.payload;
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    setThrottleFlag(state, action) {
      state.throttleFlag = action.payload;
    },
    setIsChrome(state, action) {
      state.isChrome = action.payload;
    },

    setComePage(state, action) {
      state.comePage = action.payload;
    },
    setAboutOrCorporation(state, action) {
      state.activeType = action.payload;
    },
  },
});

export const {
  setOuterWidth,
  setThrottleFlag,
  setIsChrome,
  setAboutOrCorporation,
  setActiveIndex,
  setComePage,
} = applicationSlice.actions;
export default applicationSlice.reducer;
