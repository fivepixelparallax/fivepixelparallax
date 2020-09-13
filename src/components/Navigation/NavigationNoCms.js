import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'

import { CLASS_NAMES } from '../../common/constants';

import { ReactComponent as BrandIcon } from '../../img/brand-icon.svg';
import { ReactComponent as BrandWordmark } from '../../img/brand-wordmark.svg';
import { ReactComponent as GitHubIcon } from '../../img/social/github.svg';

export default function Navigation( { isLanding } ) {

    const SCROLL_DEBOUNCE = 300;
    const SCROLL_OFFSET = 150;
    
    const [ isOpen, setOpen ] = useState( false );
    const [ isDocked, setDocked ] = useState( false );
    
    const toggleMenu = () => {
        isOpen ? setOpen( false ) : setOpen( true );
    };

    const shouldDock = () => {
        if ( ( window.scrollY + SCROLL_OFFSET ) >= window.innerHeight ) {
            setDocked( true );
            document.body.classList.add( CLASS_NAMES.IS_DOCKED );
        } else {
            setDocked( false );
            document.body.classList.remove( CLASS_NAMES.IS_DOCKED );
        }
    };
    
    useEffect( () => {

        if ( isLanding ) {

            let timeoutId = null;
            const scrollListener = () => {
                clearTimeout( timeoutId );
                timeoutId = setTimeout( () => shouldDock(), SCROLL_DEBOUNCE );
            };
            window.addEventListener( 'scroll', scrollListener );
    
            // clean up function
            return () => {
                window.removeEventListener( 'scroll', scrollListener );
            };
        }

    }, [ isLanding ] );

    return (
        <nav className={ `navigation navigation--no-cms ${ isDocked || !isLanding ? CLASS_NAMES.IS_DOCKED : '' }` } role="navigation" aria-label="main-navigation">
            <div className="wrapper">
                <div id="navMenu" className={`navigation__menu ${ isOpen ? 'is-open' : '' }`}>
                    <div className="navigation__item navigation__item--home">
                        <Link to="/" className="navigation__link" title="Logo">
                            <BrandIcon className="navigation__icon" alt="fivepixelparallax" />
                            <BrandWordmark className="navigation__wordmark" alt="fivepixelparallax" />
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
                    <div className="navigation__item navigation__item--github">
                        <a
                            className="navigation__link"
                            href="https://github.com/fivepixelparallax/fivepixelparallax"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon className="navigation__icon" alt="github" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
