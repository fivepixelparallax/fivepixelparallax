import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';

import useSiteMetadata from '../SiteMetadata/SiteMetadata';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import '../../styles/screen.scss';

const Main = ( { children, isLanding } ) => {
    const { title, description } = useSiteMetadata();
    return (
        <>
            <Helmet>
                <html lang="en" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href={`${withPrefix( '/' )}img/favicons/apple-touch-icon.png`}
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix( '/' )}img/favicons/favicon-32x32.png`}
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href={`${withPrefix( '/' )}img/favicons/favicon-16x16.png`}
                    sizes="16x16"
                />

                <link
                    rel="mask-icon"
                    href={`${withPrefix( '/' )}img/favicons/safari-pinned-tab.svg`}
                    color="#010101"
                />
                <meta name="theme-color" content="#010101" />
                <meta property="og:type" content="business.business" />
                <meta property="og:title" content={title} />
                <meta property="og:url" content="/" />
                <meta property="og:image" content={`${withPrefix( '/' )}img/favicons/og-image.jpg`} />
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap" rel="stylesheet"/>
            </Helmet>
            <Navigation isLanding={ isLanding }/>
            <main role="main" className="main">{ children }</main>
            <Footer />
        </>
    )
}

export default Main;
