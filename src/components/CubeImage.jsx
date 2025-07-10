import '../styles/CubeImage.css'

const CubeImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="product-image"
        />
    )
}

export default CubeImage;