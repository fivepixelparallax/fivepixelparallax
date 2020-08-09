import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const PreviewCompatibleImage = ( { imageInfo, className } ) => {

    const [ imageLoaded, setImageLoaded ] = useState( false );
    const { alt = '', childImageSharp, image } = imageInfo

    const onLoad = () => {
        setImageLoaded( true );
    };

    if ( !!image && !!image.childImageSharp ) {
        return (
            <Img 
                className={ `${ className } ${ imageLoaded ? 'is-loaded' : '' }` }
                fluid={ image.childImageSharp.fluid }
                alt={ alt } 
                onLoad={ () => onLoad() }/>
        )
    }

    if ( !!childImageSharp ) {
        return <Img 
                    className={ `${ className } ${ imageLoaded ? 'is-loaded' : '' }` }
                    fluid={ childImageSharp.fluid }
                    alt={ alt } 
                    onLoad={ () => onLoad() }/>
    }

    if ( !!image && typeof image === 'string' )
        return <img 
                    className={ `${ className } ${ imageLoaded ? 'is-loaded' : '' }` }
                    src={ image }
                    alt={ alt } 
                    onLoad={ () => onLoad() }/>

    return null
}

PreviewCompatibleImage.propTypes = {
    imageInfo: PropTypes.shape( {
        alt: PropTypes.string,
        childImageSharp: PropTypes.object,
        image: PropTypes.oneOfType( [PropTypes.object, PropTypes.string] ).isRequired,
        style: PropTypes.object,
    } ).isRequired,
    className: PropTypes.string
}

export default PreviewCompatibleImage
