import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const {body, title} = post;

    const {postId} = useParams()
    console.log(postId)
      
    const navigate = useNavigate()
    const handleNavigatePosts =()=>{
        navigate(-1)
    }
    const singlePost ={
        border:'2px solid red',
        padding:'5px',
        borderRadius:'10px'
    }
    return (
        <div style={singlePost}>
            <h2>Title : {title}</h2>
            <p>{body}</p>
            <button onClick={handleNavigatePosts}>
                View Posts
            </button>
        </div>
    );
};

export default PostDetails;