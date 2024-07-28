import { FaComputer, FaDumbbell, FaFilm, FaHouse, FaShirt } from "react-icons/fa6";
import Category from "./category/Category";
import "./home.css";

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
                    <Category icon={<FaShirt />}/>
                    <Category icon={<FaComputer />}/>
                    <Category icon={<FaFilm />} />
                    <Category icon={<FaHouse />}/>
                    <Category icon={<FaDumbbell />}/>
                </section>
            </section>
        </>
    )

}