import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  nofitications: [],
}
// Define the notification slice 


const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action) => {
      state.nofitications.push(action.payload);
    },
    removeNotification: (state,action) => {
      state.nofitications = state.nofitications.filter(notif => notif.id !== action.payload);
    },
    allremoveNotification: (state) => {
      state.nofitications = [];
    }
  }
});


export const { addNotification,removeNotification,allremoveNotification} = notificationSlice.actions;

export default notificationSlice.reducer;

