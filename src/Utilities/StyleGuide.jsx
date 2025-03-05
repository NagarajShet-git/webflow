import React from "react"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { UtilitySidebar } from "./UtilitySidebar"

export const StyleGuide = () => {
    return (
        <>
        <div data-animation="default" className="navbar w-nav" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="06ab6c64-468c-b44e-1b8c-856deb96ba7f" role="banner" data-no-scroll="1" data-duration="400" data-doc-height="1">
    <a href="../index.html" className="logo-link-wrapper w-nav-brand"><img width="Auto" height="Auto" alt="logo" src="../images/iDesigner.png" loading="eager" srcSet="../images/iDesigner-p-500.png 500w, ../images/iDesigner.png 715w" sizes="(max-width: 991px) 66px, 5vw" className="logo"/></a>
    <div className="nav-container w-container">
      <Header />
      <div className="menu-button w-nav-button">
        <div className="burger-icon w-icon-nav-menu"></div>
      </div>
    </div>
  </div>
  <section className="section">
    <div className="w-layout-blockcontainer container overflow w-container">
      <div className="space-page-top"></div>
      <div className="space-2rem"></div>
      <div className="utilities-flex">
        <UtilitySidebar />
        <div className="utilities-wrapper slide-from-right-animation">
          <div className="utilities-title">
            <h2>Style Guide</h2>
            <p className="max-width-38rem">This guide offers comprehensive instructions on various design elements, ranging from color schemes and typography to button styles and text sizes.</p>
          </div>
          <div className="space-4rem"></div>
          <div className="utilities-title-flex">
            <h3>Colors</h3>
            <div className="utilities-line"></div>
          </div>
          <div className="space-2rem"></div>
          <div className="utilities-grid-thirds">
            <div className="utilities-wrapper-colors">
              <h4>Primary</h4>
              <div className="color-wrapper">
                <div className="background-primary fill"></div>
              </div>
            </div>
            <div className="utilities-wrapper-colors">
              <h4>Secondary</h4>
              <div className="color-wrapper">
                <div className="background-secondary fill"></div>
              </div>
            </div>
            <div className="utilities-wrapper-colors">
              <h4>Light Gray</h4>
              <div className="color-wrapper">
                <div className="background-light-gray fill"></div>
              </div>
            </div>
            <div className="utilities-wrapper-colors">
              <h4>Black</h4>
              <div className="color-wrapper border">
                <div className="background-black fill"></div>
              </div>
            </div>
            <div className="utilities-wrapper-colors">
              <h4>White</h4>
              <div className="color-wrapper">
                <div className="background-white fill"></div>
              </div>
            </div>
          </div>
          <div className="line-spacer">
            <div className="space-4rem"></div>
            <div className="utilities-line-spacer"></div>
            <div className="space-4rem"></div>
          </div>
          <div className="utilities-title-flex">
            <h3>Headings &amp; Paragraph</h3>
            <div className="utilities-line"></div>
          </div>
          <div className="space-2rem"></div>
          <div className="utilities-flex-headings-and-paragraph">
            <div className="utilities-wrapper-title">
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
            </div>
            <div className="utilities-wrapper-paragraph">
              <p>Paragraph</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna. Faucibus nisl tincidunt eget nullam ipsum non.<br/><br/>Quis risus sed vulputate odio. Nisl suscipit adipiscing bibendum est. Aliquet bibendum enim facilisis gravida.<br/><br/>Risus feugiat in ante metus dictum at. Sit amet commodo nulla facilisi nullam vehicula ipsum a arcu. Ipsum nunc aliquet bibendum enim facilisis gravida neque.<br/><br/>Et netus et malesuada fames. Dui faucibus in ornare quam viverra. Lobortis scelerisque fermentum faucibus orci.</p>
            </div>
          </div>
          <div className="line-spacer">
            <div className="space-4rem"></div>
            <div className="utilities-line-spacer"></div>
            <div className="space-4rem"></div>
          </div>
          <div className="utilities-title-flex">
            <h3>Rich Text</h3>
            <div className="utilities-line"></div>
          </div>
          <div className="space-2rem"></div>
          <div className="utilities-wrapper-rich-text-and-buttons">
            <div className="rich-text w-richtext">
              <h2>What’s a Rich Text element?</h2>
              <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
              <h4>Static and dynamic content editing</h4>
              <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
              <h4>How to customize formatting for each rich text</h4>
              <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot;When inside of&quot; nested selector system.<br/>‍</p>
              <figure className="w-richtext-align-center w-richtext-figure-type-image">
                <div><img loading="lazy" src="../images/Sticker-Mockup.jpg" alt=""/></div>
                <figcaption>Image Caption</figcaption>
              </figure>
            </div>
            <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote>
            <ul role="list">
              <li>Bullet list 1</li>
              <li>Bullet list 2</li>
              <li>Bullet list 3</li>
            </ul>
            <ol role="list">
              <li>Number List 1</li>
              <li>Number List 2</li>
              <li>Number List 3</li>
            </ol>
          </div>
          <div className="line-spacer">
            <div className="space-4rem"></div>
            <div className="utilities-line-spacer"></div>
            <div className="space-4rem"></div>
          </div>
          <div className="utilities-title-flex">
            <h3>Buttons</h3>
            <div className="utilities-line"></div>
          </div>
          <div className="space-2rem"></div>
          <div className="utilities-wrapper-rich-text-and-buttons">
            <a href="../index.html" data-w-id="3beb919a-4aaa-f885-16a0-1c9b6601a3ec" className="button-with-circle-icon button-light w-inline-block">
              <p className="button-text">Explore</p>
              <p className="button-text-absolute">Explore</p>
              <div className="button-arrow-wrapper button-light"><img width="Auto" height="Auto" alt="" src="../images/arrow_outward.svg" loading="eager" className="arrow invert"/></div>
            </a>
          </div>
          <div className="space-7rem"></div>
        </div>
      </div>
    </div>
  </section>
  <section className="section background-black">
    <div className="w-layout-blockcontainer container padding-9rem w-container">
      <div className="space-2rem"></div>
      <div data-w-id="fa36639f-bc34-8f1a-4024-d088998077f8" className="footer-top">
        <div className="footer-block">
          <a href="../index.html" className="footer-logo-link-wrapper w-nav-brand"><img width="Auto" height="Auto" alt="logo" src="../images/iDesigner.png" loading="eager" srcSet="../images/iDesigner-p-500.png 500w, ../images/iDesigner.png 715w" sizes="(max-width: 479px) 99px, (max-width: 991px) 66px, 5vw" className="footer-logo"/></a>
          <div className="socials-wrapper">
            <a href="https://www.youtube.com/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="../images/youtubeicon.png" loading="eager" srcSet="../images/youtubeicon-p-500.png 500w, ../images/youtubeicon.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller"/></a>
            <a href="https://www.instagram.com/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="../images/instagram.png" loading="eager" srcSet="../images/instagram-p-500.png 500w, ../images/instagram.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller"/></a>
            <a href="https://www.tiktok.com/en/" target="_blank" className="w-inline-block"><img width="Auto" height="Auto" alt="" src="../images/tiktok.png" loading="eager" srcSet="../images/tiktok-p-500.png 500w, ../images/tiktok.png 512w" sizes="(max-width: 767px) 16px, (max-width: 991px) 2vw, 1vw" className="social-icon smaller"/></a>
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
