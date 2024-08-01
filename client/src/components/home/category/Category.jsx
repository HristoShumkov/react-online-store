import { Link } from "react-router-dom"
import "./category.css"

export default function Category({icon, name, link}) {
    return (
        <>
            <Link to={`/items${link}`} style={{textDecoration: "none", color: "#fff"}}>
                <div id="category-circle">
                    {icon}
                </div>
                <p>{name}</p>
            </Link>
        </>
    )
}
