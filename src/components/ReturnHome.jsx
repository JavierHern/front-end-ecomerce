import React from "react";
import { Link } from "react-router-dom";

const ReturnHome = ({ link }) => {
    return (
        <Link to="/productos" className="btn-primary">
            {link}
        </Link>
    )
}

export default ReturnHome;