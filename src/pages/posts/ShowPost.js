import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";

const ShowPost = () => {
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
            {error && <div>{error}</div>}
            {loading && <div className="spinner-border"></div>}
            {post && <div className="col-md-8">
                <div className="card">
                    <div className="card-header fw-bold">
                        <p>{post.title}</p>
                    </div>
                    <div className="card-body">
                        {post.body}
                    </div>
                    <div className="card-footer">
                        <Link className="me-2 btn btn-dark" to={`/posts/edit/${id}`}>Edit</Link>
                        <Link className="btn btn-danger" to={`/posts/edit/${id}`}>Delete</Link>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ShowPost