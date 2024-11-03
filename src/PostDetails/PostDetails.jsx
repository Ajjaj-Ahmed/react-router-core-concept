import { useLoaderData } from "react-router-dom";

const PostDetails = ({}) => {
    const post = useLoaderData()
    const {body, title} = post;

    const singlePost ={
        border:'2px solid red',
        padding:'5px',
        borderRadius:'10px'
    }
    return (
        <div style={singlePost}>
            <h2>Title : {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;