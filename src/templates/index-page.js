import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Main from '../components/Main/Main';
import Landing from '../components/Landing/Landing';
import BlogRoll from '../components/BlogRoll/BlogRoll';

export const IndexPageTemplate = ( {
    image,
    title,
    heading,
    subheading,
    mainpitch,
    description,
    intro,
} ) => (
    <div>
        <Landing />
        <section className="section">
            <div className="wrapper">
                <h1 className="section__title">{ mainpitch.title }</h1>
                <h3 className="section__subtitle">{ mainpitch.description }</h3>
                <div className="section__heading">
                    <h3 className="section__heading-title">{ heading }</h3>
                    <p className="section__heading-description">{ description }</p>
                </div>
                <div className="section__heading">
                    <Link className="section__link button" to="/products">
                        See all products
                    </Link>
                </div>
                <div className="section__heading">
                    <h3 className="section__heading-title">Latest Stories</h3>
                    <BlogRoll />
                    <Link className="section__link button" to="/blog">
                        Read more
                    </Link>
                </div>
            </div>
        </section>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType( [PropTypes.object, PropTypes.string] ),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape( {
        blurbs: PropTypes.array,
    } ),
}

const IndexPage = ( { data } ) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Main isLanding={ true }>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Main>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape( {
        markdownRemark: PropTypes.shape( {
            frontmatter: PropTypes.object,
        } ),
    } ),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
