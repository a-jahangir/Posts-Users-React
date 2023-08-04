import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <NavLink className="navbar-brand" to="/">Jahangir</NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={(navDAta) => navDAta.isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(navDAta) => navDAta.isActive ? "nav-link active" : "nav-link"} to="/users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(navDAta) => navDAta.isActive ? "nav-link active" : "nav-link"} to="/posts">Posts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header