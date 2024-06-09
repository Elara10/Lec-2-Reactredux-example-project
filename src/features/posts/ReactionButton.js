import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";
const reactionEmoji={
    thumbsUp:'👍',
    wow:'😮',
    heart:'❤️',
    rocket:'🚀',
    coffee:'☕ '
}

const ReactionButton = ({post}) => {
    const dispatch=useDispatch();
    const ReactionButton=Object.entries(reactionEmoji).map(([name,emoji])=>{
  return (
    <button 
       key={name}
       type="button"
       className="reactionButton"
       onClick={()=>
        dispatch(reactionAdded({postId:post.id,reaction:name}))
       }
    >
        {emoji} {post.reaction[name]}
        </button>
  )

})
return <div>{ReactionButton}</div>
}
export default ReactionButton