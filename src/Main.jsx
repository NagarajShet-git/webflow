import react from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Main = () => {
    return (
        <>
            <div data-animation="default" className="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="06ab6c64-468c-b44e-1b8c-856deb96ba7f" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
                <a href="index.html" aria-current="page" className="logo-link-wrapper w-nav-brand w--current"><img width="Auto" height="Auto" alt="logo" src="images/iDesigner.png" loading="eager" srcSet="images/iDesigner-p-500.png 500w, images/iDesigner.png 715w" sizes="(max-width: 991px) 66px, 5vw" className="logo" /></a>
                <Header />
            </div>
            <section className="hero-section">
                <div className="fingerprint"></div>
                <div className="circle"></div>
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-wrapper">
                        <h5 className="heading">Welcome</h5>
                        <h1 className="hero-text">iDESIGNER</h1>
                        <a href="#brands" className="arrow-border-wrapper w-inline-block">
                            <div data-w-id="022bdf7a-1da5-487f-e90a-10a13619b2dd" className="icon-wrapper">
                                <img width="Auto" height="Auto" alt="arrow up" src="images/arrow_outward.svg" loading="eager" data-w-id="022bdf7a-1da5-487f-e90a-10a13619b2de" className="arrow" />
                            </div>
                        </a>
                    </div>
                    <div className="hero-overlay"></div>
                </div>
                <div data-w-id="769eaa28-9e57-8d2b-bd19-a0fd96681ba3" style={{opacity: 1}} className="spline" data-animation-type="spline" data-spline-url="https://prod.spline.design/fP0LH65i8bXQDQjZ/scene.splinecode"><canvas></canvas></div>
            </section>
            <section id="brands" className="section">
                <div className="w-layout-blockcontainer container padding-4-5rem w-container">
                    <div className="space-7rem"></div>
                    <div className="brands-wrapper">
                        <div className="brands-grid slide-up-animation">
                            <div className="logos-wrapper"><img width="Auto" height="Auto" alt="brand logo" src="images/load.png" loading="eager" /></div>
                            <div className="logos-wrapper"><img loading="eager" src="images/logowithname3.png" alt="brand logo" /></div>
                            <div className="logos-wrapper"><img loading="eager" src="images/logowithname2.png" alt="brand logo" /></div>
                            <div className="logos-wrapper"><img loading="eager" src="images/logowithname1.png" alt="brand logo" /></div>
                        </div>
                        <div className="brands-grid slide-up-animation">
                            <div className="logos-wrapper"><img loading="eager" src="images/logowithname1.png" alt="brand logo" /></div>
                            <div className="logos-wrapper"><img loading="eager" src="images/logowithname2.png" alt="brand logo" /></div>
                            <div className="logos-wrapper"><img loading="eager" src="images/logowithname3.png" alt="brand logo" /></div>
                            <div className="logos-wrapper"><img width="Auto" height="Auto" alt="brand logo" src="images/load.png" loading="eager" /></div>
                        </div>
                    </div>
                    <div className="space-7rem"></div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-4-5rem w-container">
                    <div className="services-flex">
                        <div className="services-wrapper slide-from-left-animation">
                            <div className="services-card">
                                <div className="services-title-flex">
                                    <div className="services-icon"><img sizes="(max-width: 991px) 80px, 6vw" srcSet="images/Sticker-Mockup-p-500.jpg 500w, images/Sticker-Mockup-p-800.jpg 800w, images/Sticker-Mockup-p-1080.jpg 1080w, images/Sticker-Mockup.jpg 1440w" alt="sticker mock up" src="images/Sticker-Mockup.jpg" loading="lazy" className="services-image" /></div>
                                    <h4 className="caps">Branding</h4>
                                </div>
                                <div className="services-text-block">
                                    <p className="self-align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.</p>
                                </div>
                            </div>
                            <div className="services-card">
                                <div className="services-title-flex">
                                    <div className="services-icon"><img sizes="(max-width: 991px) 80px, 6vw" srcSet="images/Wall-Hanging-Poster-p-500.jpg 500w, images/Wall-Hanging-Poster-p-800.jpg 800w, images/Wall-Hanging-Poster-p-1080.jpg 1080w, images/Wall-Hanging-Poster.jpg 1440w" alt="wall hanging poster" src="images/Wall-Hanging-Poster.jpg" loading="lazy" className="services-image" /></div>
                                    <h4 className="caps">Marketing</h4>
                                </div>
                                <div className="services-text-block">
                                    <p className="self-align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.</p>
                                </div>
                            </div>
                            <p className="max-width-30rem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.</p>
                        </div>
                        <div className="services-wrapper slide-from-right-animation">
                            <h5>Creative Solutions</h5>
                            <h2 className="services-title">SERVICES</h2>
                            <div className="services-card">
                                <div className="services-title-flex">
                                    <div className="services-icon"><img sizes="(max-width: 991px) 80px, 6vw" srcSet="images/CreativeDesignStudioX-p-500.jpg 500w, images/CreativeDesignStudioX-p-800.jpg 800w, images/CreativeDesignStudioX-p-1080.jpg 1080w, images/CreativeDesignStudioX.jpg 1440w" alt="" src="images/CreativeDesignStudioX.jpg" loading="lazy" className="services-image" /></div>
                                    <h4 className="caps">Development</h4>
                                </div>
                                <div className="services-text-block">
                                    <p className="self-align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.</p>
                                </div>
                            </div>
                            <div className="services-card">
                                <div className="services-title-flex">
                                    <div className="services-icon"><img sizes="(max-width: 991px) 80px, 6vw" srcSet="images/AppleWatch-p-500.jpg 500w, images/AppleWatch-p-800.jpg 800w, images/AppleWatch-p-1080.jpg 1080w, images/AppleWatch.jpg 1440w" alt="" src="images/AppleWatch.jpg" loading="lazy" className="services-image" /></div>
                                    <h4 className="caps">Design</h4>
                                </div>
                                <div className="services-text-block">
                                    <p className="self-align-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum convallis, dolor sed consectetur gravida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="space-7rem"></div>
                    <div data-w-id="4bf48e95-1b6f-5737-3242-d95977d5bf77" className="works-title-wrapper">
                        <h2 className="works-title">My Works</h2>
                        <h2 className="works-title outline-white">My Works</h2>
                        <h2 className="works-title">My Works</h2>
                        <h2 className="works-title outline-white">My Works</h2>
                    </div>
                </div>
            </section>
            <section className="section background-black">
                <div className="w-layout-blockcontainer container overflow w-container">
                    <div className="space-4rem"></div>
                    <div className="slide-up-animation w-dyn-list">
                        <div role="list" className="works-wrapper w-dyn-items">
                            <div data-w-id="cdd86b2f-751d-506f-06f5-7a0831b8e13b" role="listitem" className="works-block w-dyn-item">
                                <a data-w-id="cdd86b2f-751d-506f-06f5-7a0831b8e13c" href="#" className="works-link-wrapper w-inline-block">
                                    <div data-w-id="cdd86b2f-751d-506f-06f5-7a0831b8e13d" className="works-icon-wrapper">
                                        <h5 className="works-hover">View Work</h5>
                                    </div>
                                    <div className="works-image-wrapper"><img loading="eager" height="" alt="" src="https://uploads-ssl.webflow.com/6684dec10d406e0b45837d1d/6684dec10d406e0b45837dc1_tech.jpg" className="parallax-image w-dyn-bind-empty" />
                                        <div data-w-id="cdd86b2f-751d-506f-06f5-7a0831b8e142" className="parallax-trigger"></div>
                                    </div>
                                </a>
                                <div className="works-text-block">
                                    <h3 className="caps w-dyn-bind-empty"></h3>
                                    <div className="works-flex">
                                        <div className="works-badge">
                                            <h5 className="w-dyn-bind-empty"></h5>
                                        </div>
                                        <div className="works-badge">
                                            <h5 className="w-dyn-bind-empty"></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-dyn-empty"></div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div className="space-7rem"></div>
                    <div className="metrics-wrapper">
                        <div data-w-id="a546ec61-5762-16bd-4aea-b274da1ddef3" className="metrics-block">
                            <h2 className="metrics-text">124</h2>
                            <p>Customers</p>
                        </div>
                        <div data-w-id="a546ec61-5762-16bd-4aea-b274da1ddef8" className="metrics-block">
                            <h2 className="metrics-text">7</h2>
                            <p>Awards</p>
                        </div>
                        <div data-w-id="a546ec61-5762-16bd-4aea-b274da1ddefd" className="metrics-block">
                            <h2 className="metrics-text">85</h2>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className="space-7rem"></div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div data-delay="4000" data-animation="slide" className="reviews-slider slide-up-animation w-slider" data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true">
                        <div className="mask w-slider-mask">
                            <div className="slide w-slide">
                                <div className="reviews-slide">
                                    <img width="Auto" height="Auto" alt="" src="images/Quote.svg" loading="lazy" />
                                    <h4>I was blown away by his creativity in <br />creating a memorable brand identity. His <br />design work has helped us stand out.</h4>
                                    <img width="64" height="64" alt="" src="https://uploads-ssl.webflow.com/66a5f61b61b9f0a48636c965/66a5f61b61b9f0a48636ca00_Reviews3.jpg" loading="eager" className="reviews-image" />
                                    <div className="review-name-block">
                                        <h5>Davis Jones</h5>
                                        <h5 className="font-primary">entrepreneur</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="slide w-slide">
                                <div className="reviews-slide"><img width="Auto" height="Auto" alt="" src="images/Quote.svg" loading="lazy" />
                                    <h4>It was a pleasure working on a design <br />project and I must say that the experience <br />exceeded all my expectations.</h4>
                                    <img width="64" height="64" alt="" src="https://uploads-ssl.webflow.com/66a5f61b61b9f0a48636c965/66a5f61b61b9f0a48636c9f7_Reviews1.jpg" loading="eager" className="reviews-image" />
                                    <div className="review-name-block">
                                        <h5>Jacob Black</h5>
                                        <h5 className="font-primary">Director</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="slide w-slide">
                                <div className="reviews-slide">
                                    <img width="Auto" height="Auto" alt="" src="images/Quote.svg" loading="lazy" />
                                    <h4>I couldn&#x27;t be happier with the <br />results of our collaboration. He took <br />our vision and brought it to life.</h4>
                                    <img width="64" height="64" alt="" src="https://uploads-ssl.webflow.com/66a5f61b61b9f0a48636c965/66a5f61b61b9f0a48636ca05_Reviews2.jpg" loading="eager" className="reviews-image" />
                                    <div className="review-name-block">
                                        <h5>Maria Smith</h5>
                                        <h5 className="font-primary">Manager</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reviews-arrow left w-slider-arrow-left">
                            <div className="reviews-icon w-icon-slider-left"></div>
                        </div>
                        <div className="reviews-arrow right w-slider-arrow-right">
                            <div className="reviews-icon w-icon-slider-right"></div>
                        </div>
                        <div className="slide-nav w-slider-nav w-round"></div>
                    </div>
                    <div className="space-4rem"></div>
                </div>
            </section>
            <section className="section">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f1" className="cta-block">
                        <div className="cta-text-block">
                            <h5>Contact me</h5>
                            <div className="flex">
                                <h2 data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f6" className="cta-large">GET IN</h2><img data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f8" loading="eager" alt="icon" src="images/arrow_out.svg" className="arrow-image-small" />
                            </div>
                            <h2 data-w-id="6e9750ff-a872-9aa1-2869-bd0dc16b00f9" className="cta-large outline-white">TOUCH</h2>
                        </div>
                        <a href="contact.html" data-w-id="3beb919a-4aaa-f885-16a0-1c9b6601a3ec" className="button-with-circle-icon button-light w-inline-block">
                            <p className="button-text">Contact</p>
                            <p className="button-text-absolute">Contact</p>
                            <div className="button-arrow-wrapper button-light"><img width="Auto" height="Auto" alt="" src="images/arrow_outward.svg" loading="eager" className="arrow invert" /></div>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section background-black">
                <div className="w-layout-blockcontainer container padding-9rem w-container">
                    <div className="space-2rem"></div>
                    <div data-w-id="fa36639f-bc34-8f1a-4024-d088998077f8" className="footer-top">
                        <div className="footer-block">
                            <a href="index.html" aria-current="page" className="footer-logo-link-wrapper w-nav-brand w--current"><img width="Auto" height="Auto" alt="logo" src="images/iDesigner.png" loading="eager" srcSet="images/iDesigner-p-500.png 500w, images/iDesigner.png 715w" sizes="(max-width: 479px) 99px, (max-width: 991px) 66px, 5vw" className="footer-logo" /></a>
                            <div className="socials-wrapper">
                                <a href="https://www.youtube.com/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="images/youtubeicon.png" loading="eager" srcSet="images/youtubeicon-p-500.png 500w, images/youtubeicon.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller" /></a>
                                <a href="https://www.instagram.com/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="images/instagram.png" loading="eager" srcSet="images/instagram-p-500.png 500w, images/instagram.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller" /></a>
                                <a href="https://www.tiktok.com/en/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="images/tiktok.png" loading="eager" srcSet="images/tiktok-p-500.png 500w, images/tiktok.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller" /></a>
                            </div>
                            <p className="max-width-19vw font-white">Beautiful design has the power to captivate audiences</p>
                        </div>
                        <Footer />
                    </div>
                    <div data-w-id="fa36639f-bc34-8f1a-4024-d0889980784b" className="footer-line"></div>
                    <div data-w-id="fa36639f-bc34-8f1a-4024-d0889980784c" className="footer-bottom">
                        <p className="font-white">© 2024 iDESIGNER. All Rights Reserved. </p>
                        <div className="footer-flex">
                            <div className="footer-flex-bottom">
                                <p className="font-white">Powered By </p>
                                <a href="https://webflow.com/" target="_blank" className="w-inline-block">
                                    <p className="footer-bottom-text">Webflow</p>
                                </a>
                            </div>
                            <div className="footer-flex-bottom">
                                <p className="font-white">Built By  </p>
                                <a href="https://webflow.com/templates/designers/rick-mummery" target="_blank" className="w-inline-block">
                                    <p className="footer-bottom-text">Rick Mummery</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
