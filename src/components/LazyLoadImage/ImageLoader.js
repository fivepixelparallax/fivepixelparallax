import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage'

function ImageLoader( { imageInfo, imgClassName } ) {

    const [ imageLoaded, setImageLoaded ] = useState( false );

    const onLoad = () => {
        setImageLoaded( true );
    };

    return (
        // <picture className={ `lazy-image__picture ${ pictureClassName || '' }` }>
        //     {
        //         srcConfigs && srcConfigs.length > 0 ? (
        //             srcConfigs.map( ( srcConfig, i ) => {
        //                 return <source srcSet={ srcConfig.srcSet } media={ srcConfig.mediaQuery } key={ i }/>;
        //             } )
        //         ) : (
        //             null
        //         )
        //     }
        //     <img
        //         className={ `lazy-image__img ${ imgClassName || '' } ${ imageLoaded ? 'is-loaded' : '' }` }
        //         src={ src }
        //         alt={ alt || 'Image' }
        //         onLoad={ () => onLoad() }/>
        // </picture>
        <PreviewCompatibleImage imageInfo={ imageInfo } className={ `lazy-image__img ${ imgClassName || '' } ${ imageLoaded ? 'is-loaded' : '' }` }/>
    );
}

ImageLoader.propTypes = {
    imageInfo: PropTypes.object.isRequired,
    imgClassName: PropTypes.string // the styling class for the img element
};

export default ImageLoader;