import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const ShowUser = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams()

    useEffect(() => {

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                setLoading(false)
                setError(null)
            }).catch(err => {
                setError(err.message)
                setLoading(false)
            })

    }, [id]);

    return (
        <div className="container mt-5">
            <div className="row g-3">
                {error && <div>{error}</div>}
                {loading && <div className="spinner-border"></div>}
                {user && <div className="col-md-4">
                    <div className="card">
                        <div className="card-header fw-bold">
                            <p>{user.name}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">username : {user.username}</li>
                            <li className="list-group-item">email : {user.email}</li>
                            <li className="list-group-item">phone : {user.phone}</li>
                        </ul>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default ShowUser