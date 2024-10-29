import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import pinReducer from './PinSlice.js'; // Adjust import based on your structure

// Create a makeStore function
const makeStore = () => configureStore({
  reducer: {
    pin: pinReducer, // Add your reducers here
  },
});

// Create a wrapper using the makeStore function
export const wrapper = createWrapper(makeStore);
