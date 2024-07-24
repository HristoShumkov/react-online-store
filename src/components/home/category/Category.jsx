import { FaComputer } from "react-icons/fa6"
import "./category.css"

const Category = () => {
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

export default Category