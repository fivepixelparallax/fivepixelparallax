import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../PreviewCompatibleImage/PreviewCompatibleImage'

const FeatureGrid = ( { gridItems } ) => (
    <div className="columns is-multiline">
        { gridItems.map( ( item ) => (
            <figure key={ item.text } className="feature">
                <PreviewCompatibleImage imageInfo={ item } className="feature__image-container" />
                <figcpation className="feature__caption">
                    <h4 className="feature__title">{ item.title }</h4>
                    <p className="feature__description">{ item.text }</p>
                </figcpation>
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
