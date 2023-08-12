import { Route, Routes } from "react-router-dom"
import IndexPost from "./Index"
import ShowPost from "./ShowPost"
import CreatePost from "./CreatePost"

const PostRouter = () => {
    return (
        <div className="container mt-5">
            <div className="row g-3">
                <Routes>
                    <Route path="/" element={<IndexPost />} />
                    <Route path="/create" element={<CreatePost />} />
                    <Route path="/:id" element={<ShowPost />} />
                </Routes>
            </div>
        </div>
    )
}

export default PostRouter