import React from "react";

// This lists the Images to the Site
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt={image.description} />
    });

    return <div>{images}</div>;
};
export default ImageList;