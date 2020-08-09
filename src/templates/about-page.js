import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Main from '../components/Main/Main';
import Content, { HTMLContent } from '../components/Content/Content';

export const AboutPageTemplate = ( { title, content, contentComponent } ) => {
    const PageContent = contentComponent || Content

    return (
        <section className="section">
            <div className="wrapper">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent className="content" content={content} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const AboutPage = ( { data } ) => {
    const { markdownRemark: post } = data

    return (
        <Main isLanding={ false }>
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Main>
    )
}

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
