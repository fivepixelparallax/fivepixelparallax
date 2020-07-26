import React from 'react';
import { Link } from 'gatsby';

import Social from '../Social/Social';

import { ReactComponent as BrandLogo } from '../../img/brand-logo.svg';

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer__wrapper wrapper">
                <Link to="/" className="footer__logo-link" title="Logo">
                    <BrandLogo className="footer__logo-icon" alt="fivepixelparallax" />
                </Link>
                <section className="footer__section">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link className="footer__link" to="/blog">
                                Latest Stories
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className="footer__section">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link className="footer__link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="/products">
                                Products
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" to="/contact/examples">
                                Form Examples
                            </Link>
                        </li>
                        <li className="footer__item">
                            <a
                                className="footer__link"
                                href="/admin/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Admin
                            </a>
                        </li>
                    </ul>
                </section>
                <Social className="footer__section"/>
            </div>
        </footer>
    )
}
