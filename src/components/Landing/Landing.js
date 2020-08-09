import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

import { ReactComponent as BrandIcon } from '../../img/brand-icon.svg';
import { ReactComponent as BrandWordmark } from '../../img/brand-wordmark.svg';

export default function Landing() {

    return (
        <ParallaxProvider>
            <section className="landing">
                <div className="landing__logo-container">
                    <Parallax className="landing__icon" y={[80, -80]} tagOuter="div">
                        <BrandIcon className="landing__img" alt="fivepixelparallax icon" />
                    </Parallax>
                    <Parallax className="landing__wordmark" y={[120, -120]} tagOuter="div">
                        <BrandWordmark className="landing__img" alt="fivepixelparallax wordmark" />
                    </Parallax>
                </div>
            </section>
        </ParallaxProvider>
    );
}