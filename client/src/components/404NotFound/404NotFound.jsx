import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/" className="button-main">Go Back Home</Link>
        </>
    )

}
