import { useState } from "react";
import React from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdded } from "./postSlice";
const AddPostForm = () => {
    const dispatch=useDispatch();

    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');
    const [userId,setUserId]=useState('');

    const users=useSelector(selectAllUsers)


    const onChangeTitle=e=>setTitle(e.target.value)
    const onChangeContent=e=>setContent(e.target.value)
    const onChangeUserId=e=>setUserId(e.target.value)

    const onSavePostClicked=()=>{
        if(title && content  )
        {
            dispatch(
                postAdded(title,content,userId)
            )
            setTitle('')
            setContent('')
        }
    }
    const canSave=Boolean(title) && Boolean(content)  && Boolean(userId)

    const userOption=users.map(user=>(
        <option key={user.id} value={user.id}>{user.name}</option>
    ))

    
  return (
    <section>
        <form>
   <h2>Add a new Post</h2>
   <label htmlFor="postTitle">Post Title:</label><br/>
   <input type="text"
   id="postTitle"
   name="postTitle"
   value={title}
   onChange={onChangeTitle}
   /><br/>
   <label htmlFor="postAuthor">Author:</label><br/>
   <select id="postAuthor" value={userId} onChange={onChangeUserId}>
   <option value=""></option>
   {userOption}
   </select>
   <br/>
   <label htmlFor="postContent">Content:</label><br/>
   <textarea
    id="postContent"
    name="postContent"
    value={content}
    onChange={onChangeContent}

    /><br/>
    <button type="button" discard={!canSave} onClick={onSavePostClicked}>Save Post</button>
    </form>
   
  
   </section>
  )
}

export default AddPostForm