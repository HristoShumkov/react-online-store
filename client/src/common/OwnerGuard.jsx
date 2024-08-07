import { Link, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import { useGetSingleItem } from "../hooks/useItems";

export default function OwnerGuard() {
    const { itemId } = useParams();
    const [item] = useGetSingleItem(itemId);
    const { isOwner } = useAuthContext();

    return isOwner(item?._ownerId)
        ? <Outlet />
        : <div className="error-page-container">
            <h1>UNAUTHORIZED</h1>
            <p>YOU ARE NOT THE OWNER OF THIS ITEM</p>
            <Link to="/" className="button-main">Go Back Home</Link>
        </div>
}