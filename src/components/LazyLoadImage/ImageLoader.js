import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ImageLoader( { src, srcConfigs, alt, pictureClassName, imgClassName } ) {

    const [ imageLoaded, setImageLoaded ] = useState( false );

    const onLoad = () => {
        setImageLoaded( true );
    };

    return (
        <picture className={ `lazy-image__picture ${ pictureClassName || '' }` }>
            {
                srcConfigs && srcConfigs.length > 0 ? (
                    srcConfigs.map( ( srcConfig, i ) => {
                        return <source srcSet={ srcConfig.srcSet } media={ srcConfig.mediaQuery } key={ i }/>;
                    } )
                ) : (
                    null
                )
            }
            <img
                className={ `lazy-image__img ${ imgClassName || '' } ${ imageLoaded ? 'is-loaded' : '' }` }
                src={ src }
                alt={ alt || 'Image' }
                onLoad={ () => onLoad() }/>
        </picture>
    );
}

ImageLoader.propTypes = {
    src: PropTypes.string.isRequired, // the img src URL, should contain at least one ODIR width/height param
    srcConfigs: PropTypes.array, // array of source config objects, e.g. { srcSet: 'https://image.jpg?width=100&', media: '(max-width: 840px)' }
    alt: PropTypes.string, // alt attribute for the image
    pictureClassName: PropTypes.string, // the styling class for the picture element
    imgClassName: PropTypes.string // the styling class for the img element
};

export default ImageLoader;