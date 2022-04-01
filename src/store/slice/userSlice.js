import {createSlice} from '@reduxjs/toolkit'

const initialState = {
     userName: '',
     password: '',
};
const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
          setUser(state, action) {
               state.userName = action.payload.userName;
               state.password = action.payload.password;
               state.signIn = action.payload.signIn;
          },
          removeUser(state) {
               state.userName = null;
               state.password = null;
               state.signIn = null;
          },
     },
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;