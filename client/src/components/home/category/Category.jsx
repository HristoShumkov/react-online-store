import { Link } from "react-router-dom"
import { FaComputer } from "react-icons/fa6"
import "./category.css"

export default function Category({icon}) {
    return (
        <>
            <Link to="/catalog">
                <div id="category-circle">
                    {/* <FaComputer style={{
                        color: "white",
                        fontSize: "7.5em"
                    }}
                    /> */}
                    {icon}
                </div>
            </Link>
        </>
    )
}
