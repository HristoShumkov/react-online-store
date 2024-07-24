import ItemPreview from "../itemPreview/ItemPreview"
import "./catalog.css"

const Catalog  = () => {

    return (
    <div id="catalog-container">
        <h1>Catalog</h1>
        <div id="items-list">
        <ItemPreview />
        <ItemPreview />
        <ItemPreview />
        <ItemPreview />
        <ItemPreview />
        <ItemPreview />
        </div>
    </div>
    )

}

export default Catalog 