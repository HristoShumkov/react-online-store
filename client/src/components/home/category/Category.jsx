import { FaComputer } from "react-icons/fa6"
import "./category.css"

export default function Category() {
    return (
        <>
            <a href="#">
                <div id="category-circle">
                    <FaComputer style={{
                        color: "white",
                        fontSize: "7.5em"
                    }}
                    />
                </div>
            </a>
        </>
    )
}
