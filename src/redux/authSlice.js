import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase/fireBaseCof";
import { signOut } from "firebase/auth";

const initialState = {
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signOutAction: (action) => {
            signOut(auth)
                .then(() => {
                    console.log("You have been Logged Out")
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
})

export const { signOutAction } = authSlice.actions
export default authSlice.reducer 