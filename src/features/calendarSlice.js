import { createSlice } from '@reduxjs/toolkit';


//------------PULLING ALL APPOINTMENTS FROM API------//

const initialState = {
  userAppts: [],
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {


    setAppointments(state, action) {
      console.log('CALENDAR CALL TO STATE!', action.payload)
      state.userAppts = action.payload;
    }
  }
})

export const { setAppointments } = calendarSlice.actions;

export default calendarSlice.reducer;