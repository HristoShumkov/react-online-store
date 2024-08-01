import { FaComputer, FaDumbbell, FaFilm, FaHouse, FaShirt } from "react-icons/fa6";
import Category from "./category/Category";
import "./home.css";

const categoryData = [
    {
        icon: <FaShirt />,
        name: "Clothing",
        link: "/clothing"
    },
    {
        icon: <FaComputer />,
        name: "Electronics",
        link: "/electronics"
    },
    {
        icon: <FaFilm />,
        name: "Entertainment",
        link: "/entertainment"
    },
    {
        icon: <FaHouse />,
        name: "Home & Garden",
        link: "/home-and-garden"
    },
    {
        icon: <FaDumbbell />,
        name: "Sports",
        link: "/sports"
    }
]

export default function Home() {

    return (
        <>
            <section id="hero">
                <div className="hero-content">
                    <h2>Welcome to buyStuff</h2>
                    <p>The ultimate shopping experience</p>
                    <a href="#shop-now" className="cta-button">Shop Now</a>
                </div>
            </section>
            <section id="shop-now">
                <h1>Shop By Category</h1>
                <section id="category-container">
                    {categoryData.map(x => <Category key={x.name} icon={x.icon} name={x.name} link={x.link} />)}
                </section>
            </section>
        </>
    )

}