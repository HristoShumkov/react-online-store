import ItemPreview from "../itemPreview/ItemPreview"
import "./catalog.css"

export default function Catalog() {

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
