import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../firebase/fireBaseCof";
import { signInWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

const initialState = {
    authError: 'horras'
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state, action) => {
            signInWithEmailAndPassword(auth, ...action.payload)
                .then(() => {
                    console.log('login success')
                    state.authError = null
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }
    }
})

export const { signIn } = authSlice.actions
export default authSlice.reducer 