import '../styles/CubeImage-BEM.css'

const CubeImage = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className="cube-image"
        />
    )
}

export default CubeImage;
