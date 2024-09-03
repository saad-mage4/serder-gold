import React from "react";

const getOptimizedImage = (imagePath) => {
    try {
        return new URL(`../assets/${imagePath}`, import.meta.url).href;
    } catch (e) {
        return "https://dummyimage.com/216x500/000/f0b90b";
    }
};

const Image = ({
    value,
    alt = "",
    defaultSrc = "https://dummyimage.com/216x500/000/f0b90b",
    className = "",
}) => {
    const optimizedSrc = value ? getOptimizedImage(value) : defaultSrc;

    return (
        <img
            src={value || defaultSrc}
            alt={alt}
            loading="lazy"
            className={className}
        />
    );
};

export default Image;
