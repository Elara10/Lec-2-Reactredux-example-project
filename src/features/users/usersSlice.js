import {createSlice} from  '@reduxjs/toolkit';

const initialState=[
    {id:'0',name:'ABC'},
    {id:'1',name:'XYZ'},
    {id:'2',name:'LMN'}
]
const usersSlice=createSlice({
    name:'users',
    initialState,
    reducers:{}
})
export const selectAllUsers =(state)=>state.users;
export default usersSlice.reducer