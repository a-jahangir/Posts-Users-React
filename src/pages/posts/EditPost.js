import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditFormPost from "../../components/posts/EditForm";

const EditPost = () => {
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams()

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => {
                setPost(data);
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, [id]);

    return (
        <>
            <h2>Edit Post :</h2>
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {post && <EditFormPost post={post} />}
        </>
    )
}

export default EditPost