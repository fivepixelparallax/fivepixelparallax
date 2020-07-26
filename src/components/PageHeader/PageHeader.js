import React from 'react';
import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';

export default function PageHeader( { image, title, subtitle } ) {
    
    return (
        <div className="page-header">
            <LazyLoadImage
                src={ image }
                srcConfigs={ [
                    { srcSet: `${ image }, ${ image } 2x`, mediaQuery: '(max-width: 840px)' }
                ] }
                alt="Live Stream Poster Image"
                className="page-header__image"/>
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