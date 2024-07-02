import React from "react";
import useImageURL from "../hooks/useImageURL";

const Image = () => {
    const { imageURL, error, loading } = useImageURL();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>A network error was encountered: {error}</p>;

    return (
        <>
            <h1>An image</h1>
            <img src={imageURL} alt={"placeholder text"} />
        </>
    );
};

export default Image;
