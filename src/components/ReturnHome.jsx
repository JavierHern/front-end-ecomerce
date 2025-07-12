import React from "react";
import { Link } from "react-router-dom";
import '../styles/ReturnHome-BEM.css';

const ReturnHome = ({ link }) => {
    return (
        <Link to="/productos" className="return-home">
            {link}
        </Link>
    )
}

export default ReturnHome;
