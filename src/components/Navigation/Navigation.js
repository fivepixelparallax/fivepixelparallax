import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'

import { ReactComponent as BrandIcon } from '../../img/brand-icon.svg';
import { ReactComponent as GitHubIcon } from '../../img/social/github.svg';

export default function Navigation() {

    const SCROLL_DEBOUNCE = 150;
    
    const [ isOpen, setOpen ] = useState( false );
    const [ isDocked, setDocked ] = useState( false );
    
    const toggleMenu = () => {
        isOpen ? setOpen( false ) : setOpen( true );
    }

    const shouldDock = () => {
        return window.scrollY >= window.innerHeight ? true : false;
    }
    
    useEffect( () => {

        let timeoutId = null;
        const scrollListener = () => {
            clearTimeout( timeoutId );
            timeoutId = setTimeout( () => setDocked( shouldDock() ), SCROLL_DEBOUNCE );
        };
        window.addEventListener( 'scroll', scrollListener );

        // clean up function
        return () => {
            window.removeEventListener( 'scroll', scrollListener );
        };

    }, [] )

    return (
        <nav className={ `navigation ${ isDocked ? 'is-docked' : '' }` } role="navigation" aria-label="main-navigation">
            <div className="wrapper">
                <div id="navMenu" className={`navigation__menu ${ isOpen ? 'is-open' : '' }`}>
                    <div className="navigation__brand">
                        <Link to="/" className="navigation__item navigation__item--home" title="Logo">
                            <BrandIcon className="navigation__icon" alt="fivepixelparallax" />
                        </Link>
                        <button
                            className={`navigation__burger burger u-show-tablet ${ isOpen ? 'is-open' : '' }`}
                            data-target="navMenu"
                            onClick={() => toggleMenu()}>
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                    <ul className="navigation__list">
                        <li className="navigation__item">
                            <Link className="navigation__link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__link" to="/products">
                                Products
                            </Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className="navigation__item">
                            <Link className="navigation__link" to="/contact/examples">
                                Form Examples
                            </Link>
                        </li>
                    </ul>
                    <a
                        className="navigation__item navigation__item--github"
                        href="https://github.com/fivepixelparallax/fivepixelparallax"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubIcon className="navigation__icon" alt="github" />
                    </a>
                </div>
            </div>
        </nav>
    )
}
