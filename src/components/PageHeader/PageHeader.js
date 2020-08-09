import React from 'react';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';

export default function PageHeader( { imageInfo, title, subtitle } ) {

    const imageObj = {
        image: imageInfo,
        text: title
    };
    
    return (
        <div className="page-header">
            <LazyLoadImage
                imageInfo={ imageObj }
                className="page-header__image"
                placeholderModifier="dark"/>
            {
                title &&
                <h1 className="page-header__title">{ title }</h1>
            }
            {
                subtitle &&
                <h2 className="page-header__subtitle">{ subtitle }</h2>
            }
        </div>
    )
}