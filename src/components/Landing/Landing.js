import React from 'react';

import { ReactComponent as BrandIcon } from '../../img/brand-icon.svg';
import { ReactComponent as BrandWordmark } from '../../img/brand-wordmark.svg';

export default function Landing() {

    return (
        <section className="landing">
            <div className="landing__logo-container">
                <BrandIcon className="landing__icon" alt="fivepixelparallax icon" />
                <BrandWordmark className="landing__wordmark" alt="fivepixelparallax wordmark" />
            </div>
        </section>
    )
}