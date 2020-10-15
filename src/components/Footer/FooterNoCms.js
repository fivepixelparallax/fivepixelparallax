import React from 'react';
import { Link } from 'gatsby';

import Social from '../Social/Social';

import { ReactComponent as BrandLogo } from '../../img/brand-logo.svg';

export default function Footer() {

    return (
        <footer className="footer footer--no-cms">
            <div className="footer__wrapper wrapper">
                <Link to="/" className="footer__logo-link" title="Logo">
                    <BrandLogo className="footer__logo-icon" alt="fivepixelparallax" />
                </Link>
                <Social className="footer__section"/>
            </div>
        </footer>
    )
}
