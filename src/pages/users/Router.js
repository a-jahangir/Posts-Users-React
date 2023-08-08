import { Route, Routes } from "react-router-dom"
import ShowUser from "./ShowUser"
import IndexUser from "./Index"

const UserRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexUser />} />
            <Route path="/:id" element={<ShowUser />} />
        </Routes>
    )
}

export default UserRouter 