import { Link } from "react-router-dom";
import ReturnHome from "../components/ReturnHome";
import "../styles/NotFound-BEM.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1 className="not-found__title">404 Page Not Found</h1>
            <ReturnHome link={"Regresar a Productos"} />
        </div>
    )
}

export default NotFound;
