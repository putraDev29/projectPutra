import { createSlice } from '@reduxjs/toolkit';

const pinSlice = createSlice({
  name: 'pin',
  initialState: {
    pin: null,
  },
  reducers: {
    setPin: (state, action) => {
      state.pin = action.payload.pin;
    },
  },
});

// Export actions and reducer
export const { setPin } = pinSlice.actions;
export default pinSlice.reducer;
