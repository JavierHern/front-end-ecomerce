import ProductItem from "./ProductItem";

const ProductList = () => {
    return (
        <ol>
            <li><ProductItem cubo={"Cubo 2x2"}/></li>
            <li><ProductItem cubo={"Cubo 3x3"}/></li>
            <li><ProductItem cubo={"Cubo 4x4"}/></li>
        </ol>
    )
}

export default ProductList;