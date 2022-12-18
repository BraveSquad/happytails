import { createSlice } from '@reduxjs/toolkit';


//------------PULLING ALL APPOINTMENTS FROM API------//

const initialState = {
  userAppts: [],
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {


    setAppointmets(state, action) {
      console.log('CALENDAR CALL TO STATE!', action.payload)
      state.userAppts = action.payload;
    }
  }
})

export const { setAppointmets } = calendarSlice.actions;

export default calendarSlice.reducer;