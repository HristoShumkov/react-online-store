import { Link } from "react-router-dom";

import "./404NotFound.css"

export default function NotFound() {

    return (
        <div className="not-found-container">
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/" className="button-main">Go Back Home</Link>
        </div>
    )

}
