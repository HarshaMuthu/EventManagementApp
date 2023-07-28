// registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    name: '',
    eventName: '',
    mobileNumber: '',
    message: '',
    date: '',
  },
};

const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = registrationSlice.actions;

export default registrationSlice.reducer;
