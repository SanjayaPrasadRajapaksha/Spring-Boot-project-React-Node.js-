import { Link } from "react-router-dom";
import { useAuth } from "./utils/AuthContext";


function Home() {
    const { logout, isAuthenticated } = useAuth();
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to home page</p>

            <Link to="/users">Users</Link>
            <br />
            <Link to="/products">Products</Link>
            <br />
            {
                isAuthenticated &&
                <button type="button" onClick={logout} className="btn btn-danger">logout</button>
            }


        </div>
    )
}

export default Home;