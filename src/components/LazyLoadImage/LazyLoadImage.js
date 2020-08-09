import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage';

function LazyLoadImage( { imageInfo, className, imgClassName, placeholder = true, placeholderModifier } ) {

    const [ imageLoaded, setImageLoaded ] = useState( false );

    let placeholderClass;
    if ( placeholder ) {
        placeholderClass = `lazy-image__placeholder ${ placeholderModifier || '' }`;
    }

    const onLoad = () => {
        setImageLoaded( true );
    };

    return (
        <LazyLoad
            height={100}
            once>
            
            <div className={ `lazy-image ${ className || '' }` }>
                {
                    placeholder ? (
                        <div className={ placeholderClass }>
                            <div
                                className="lazy-image__placeholder-image"
                                style={{
                                    backgroundImage: `url('/img/logo.svg')`
                                }}
                            ></div>
                            <PreviewCompatibleImage
                                imageInfo={ imageInfo }
                                className={ `lazy-image__img ${ imgClassName || '' } ${ imageLoaded ? 'is-loaded' : '' }` }
                                onLoad={ () => onLoad( true ) } />
                        </div>
                    ) : (
                        <PreviewCompatibleImage
                            imageInfo={ imageInfo }
                            className={ `lazy-image__img ${ imgClassName || '' } ${ imageLoaded ? 'is-loaded' : '' }` }
                            onLoad={ () => onLoad( true ) } />
                    )
                }
            </div>
        </LazyLoad>
    );
}

LazyLoadImage.propTypes = {
    imageInfo: PropTypes.object.isRequired,
    className: PropTypes.string, // a class for the lazy load element
    imgClassName: PropTypes.string, // the styling class for the img element
    placeholder: PropTypes.bool, // set to false to not use a placeholder for the image
    placeholderModifier: PropTypes.string, // the styling modifier for the placeholder, e.g. 'placeholder--light'
};

export default LazyLoadImage;