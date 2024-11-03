import { Link } from "react-router-dom";

const Post = ({post}) => {
    console.log(post)
    const {body, id, title} = post;

    const postStyle ={
        border:'2px solid red',
        padding:'5px',
        borderRadius:'10px'
    }
    return (
        <div style={postStyle}>
            <h2>Title : {title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}>
            <button>Show post</button>
            </Link>
        </div>
    );
};

export default Post;