import React from 'react'
import PropTypes from 'prop-types'

import LazyLoadImage from '../LazyLoadImage/LazyLoadImage';

const FeatureGrid = ( { gridItems } ) => (
    <div className="features">
        {gridItems.map( ( item ) => (
            <figure key={ item.text } className="features__feature feature">
                <LazyLoadImage imageInfo={ item } className="feature__image-container" imgClassName="feature__image"/>
                <figcaption className="feature__caption">
                    <h4 className="feature__title">{ item.title }</h4>
                    <p className="feature__description">{ item.text }</p>
                </figcaption>
            </figure>
        ) ) }
    </div>
)

FeatureGrid.propTypes = {
    gridItems: PropTypes.arrayOf(
        PropTypes.shape( {
            image: PropTypes.oneOfType( [PropTypes.object, PropTypes.string] ),
            text: PropTypes.string,
        } )
    ),
}

export default FeatureGrid
