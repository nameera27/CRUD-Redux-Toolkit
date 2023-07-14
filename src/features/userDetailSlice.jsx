import { createSlice } from "@reduxjs/toolkit";
import  { userList } from "./Data";

export const userSlice = createSlice({
    name: 'userDetails',
    initialState :userList,
    reducers: {
        addUser:(state,action) =>{
            state.push(action.payload)
        },
        updateUser: (state,action) =>{
            const {id,name,email,phone} = action.payload;
            const uu = state.find(user =>user.id ==id);
            if(uu){
                uu.name = name;
                uu.email = email;
                uu.phone  = phone;
            }
         },
         deleteUser: (state,action) =>{
            const {id} = action.payload;
            const uu = state.find(user =>user.id ==id);
            if (uu){
                return state.filter(f => f.id !== id)
            }
         }
    }
});

export const {addUser, updateUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;