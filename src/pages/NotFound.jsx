import { Link } from "react-router-dom";
import ReturnHome from "../components/ReturnHome";
import "../styles/NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1>404 Page Not Found</h1>
            <ReturnHome link={"Regresar a Productos"} />
        </div>
    )
}

export default NotFound;