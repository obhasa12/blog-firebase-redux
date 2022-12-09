import { createSlice } from '@reduxjs/toolkit'

const initialState  = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
    ]
}

export const projectSlice = createSlice({
    name: 'projects',
    initialState ,
    reducers:{
    }
})

export const {} = projectSlice.actions
export default projectSlice.reducer