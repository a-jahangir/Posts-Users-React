import { useState } from "react"
import Swal from "sweetalert2"

const DeletePost = ({ postId }) => {
    const [loading, setLoading] = useState(false)
    
    const DeletePost = () => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'DELETE',
        })
            .then(res => {
                setLoading(false)
                Swal.fire(
                    'Good Bye!',
                    `Post ${postId} deleted`,
                    'warning'
                )
            })
            .catch(err => {
                setLoading(false)
                Swal.fire(
                    ':(',
                    `${err.message}`,
                    'warning'
                )
            })
    }

    return (
        <button onClick={DeletePost} className="btn btn-sm btn-danger">
            {loading && <div className="spinner-border spinner-border-sm me-2"></div>}
            Delete
        </button>
    )
}

export default DeletePost