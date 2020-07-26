import React from 'react'
import { Link } from 'gatsby'

import { ReactComponent as BrandIcon } from '../../img/brand-icon.svg';
import { ReactComponent as GitHubIcon } from '../../img/social/github.svg';

const Navigation = class extends React.Component {
    
	constructor( props ) {
		super( props )
		this.state = {
			active: false,
			navBarActiveClass: '',
		}
	}

	toggleHamburger = () => {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active,
			},
			// after state has been updated,
			() => {
				// set the class in state for the navigation__ accordingly
				this.state.active
					? this.setState( {
						navBarActiveClass: 'is-active',
					} )
					: this.setState( {
						navBarActiveClass: '',
					} )
			}
		)
	}

	render() {
		return (
			<nav className="navigation" role="navigation" aria-label="main-navigation">
                <div className="wrapper">
                    <div id="navMenu" className={`navigation__menu ${ this.state.navBarActiveClass }`}>
                        <div className="navigation__brand">
                            <Link to="/" className="navigation__item navigation__item--home" title="Logo">
                                <BrandIcon className="navigation__icon" alt="fivepixelparallax" />
                            </Link>
                            <button
                                className={`navigation__burger burger u-show-tablet ${ this.state.navBarActiveClass }`}
                                data-target="navMenu"
                                onClick={() => this.toggleHamburger()}>
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
}

export default Navigation;
