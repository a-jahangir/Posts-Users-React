import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const EditForm = ({ post }) => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault(e)
        setLoading(true)

        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
                id: post.id
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false)
                setError(null)
                Swal.fire(
                    'Good job!',
                    'Post Edited!',
                    'success'
                )
            }).catch(err => {
                setLoading(false)
                setError(err.message)
            });
    }

    useEffect(() => {
        setTitle(post.title)
        setBody(post.body)
    }, [post])

    return (
        <div className="col-md-6">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" className="form-control" />
                    <div className="form-text text-danger">{title ? '' : 'Title is required'}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Body</label>
                    <textarea onChange={(e) => setBody(e.target.value)} value={body} className="form-control" rows="5" />
                    <div className="form-text text-danger">{body ? '' : 'Body is required'}</div>
                </div>
                <button type="submit" className="btn btn-dark" disabled={title === '' || body === ''}>
                    {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
                    Edit
                </button>
                {error && <div className="mt-2 fw-bold text-danger">{error}</div>}
            </form>
        </div>
    )
}

export default EditForm