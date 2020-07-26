import React from 'react';

import { ReactComponent as GitHubIcon } from '../../img/social/github.svg';
import { ReactComponent as MailIcon } from '../../img/social/mail.svg';

export default function Social( { className } ) {

    return (
        <section className={ `social ${ className ? className : '' }` }>
            {/* <a title="instagram" href="https://instagram.com">
                <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                />
            </a> */}
            <a
                className="social__link social__link--github"
                href="https://github.com/fivepixelparallax/fivepixelparallax"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GitHubIcon className="social__icon" alt="github" />
            </a>
            <a
                className="social__link social__link--mail"
                href="mailto:info@fivepixelparallax.com?subject=fivepixelparallax%20Enquiry&amp;body=What%20would%20you%20like%20to%20ask%20us%3F"
            >
                <MailIcon className="social__icon" alt="mail" />
            </a>
        </section>
    )
}