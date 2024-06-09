import { createSlice, nanoid ,createAsyncThunk} from "@reduxjs/toolkit";
import {sub} from 'date-fns';
const POSTS_URL='https://jsonplaceholder.typicode.com/posts';
import axios from "axios";
const initialState = {
  posts:[],
  status:'idle',
  error:null

}
export const fetchPosts=createAsyncThunk('posts/fetch',async()=>{
  try{
    const response=await axios.get(POSTS_URL)
    return [...response.data];
  }catch(err)
  {
    return err.message;
  }
})
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded:{
        reducer(state,action)
      {
        state.posts.push(action.payload)
      },
      prepare(title,content,userId)
      {
        return{
          payload:{
            id:nanoid(),
            title,
            content,
            date:new Date().toISOString(),
            userId,
            reaction:{
              thumbsUp:0,
              wow:0,
              heart:0,
              rocket:0,
              coffee:0
            }
          }
        }
      
    
      } 
    },
    reactionAdded(state,action){
      const{postId,reaction}=action.payload
      const existingPost=state.posts.find(post=>post.id===postId)
      if(existingPost){
        existingPost.reaction[reaction]++
      }
    }
  }
})
export const selectAllPosts=(state)=>state.posts.posts;
export const {postAdded,reactionAdded} =postSlice.actions
export default postSlice.reducer;