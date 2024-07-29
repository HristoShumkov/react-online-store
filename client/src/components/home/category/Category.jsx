import { Link } from "react-router-dom"
import "./category.css"

export default function Category({icon}) {
    return (
        <>
            <Link to="/items">
                <div id="category-circle">
                    {icon}
                </div>
            </Link>
        </>
    )
}
