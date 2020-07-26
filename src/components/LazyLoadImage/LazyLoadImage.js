import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import ImageLoader from './ImageLoader';

function LazyLoadImage( { src, srcConfigs, alt, className, pictureClassName, imgClassName, placeholder = true, placeholderModifier } ) {

    let placeholderClass;
    if ( placeholder ) {
        placeholderClass = `lazy-image__placeholder ${ placeholderModifier || '' }`;
    }

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
                            <ImageLoader
                                src={ src }
                                srcConfigs={ srcConfigs }
                                alt={ alt }
                                pictureClassName={ pictureClassName }
                                imgClassName={ imgClassName }/>
                        </div>
                    ) : (
                        <ImageLoader
                            src={ src }
                            srcConfigs={ srcConfigs }
                            alt={ alt }
                            pictureClassName={ pictureClassName }
                            imgClassName={ imgClassName }/>
                    )
                }
            </div>
        </LazyLoad>
    );
}

LazyLoadImage.propTypes = {
    src: PropTypes.string.isRequired, // the img src URL, should contain at least one ODIR width/height param
    srcConfigs: PropTypes.arrayOf( PropTypes.object ), // array of source config objects, e.g. { srcSet: 'https://image.jpg?width=100&', media: '(max-width: 840px)' }
    alt: PropTypes.string, // alt attribute for the image
    placeholder: PropTypes.bool, // set to false to not use a placeholder for the image
    placeholderModifier: PropTypes.string, // the styling modifier for the placeholder, e.g. 'placeholder--light'
    className: PropTypes.string, // a class for the lazy load element
    pictureClassName: PropTypes.string, // the styling class for the picture element
    imgClassName: PropTypes.string // the styling class for the img element
};

export default LazyLoadImage;