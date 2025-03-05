import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { UtilitySidebar } from "./UtilitySidebar";

export const Instructions = () => {
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
            <h2>Instructions</h2>
            <p>Quick Start Guide: Get started editing your website with this easy-to-follow guide.</p>
          </div>
          <div className="line-spacer">
            <div className="space-4rem"></div>
            <div className="utilities-line-spacer"></div>
            <div className="space-4rem"></div>
          </div>
          <p>Support: Explore Webflow University&#x27;s library for comprehensive video lessons on getting started.<br/>‍<br/></p>
          <a href="https://university.webflow.com/courses/webflow-101-crash-course" target="_blank">- Getting Started with Webflow</a>
          <a href="https://university.webflow.com/lesson" target="_blank">- Lesson library</a>
          <p><br/>Useful links from Webflow University:<br/><br/></p>
          <a href="https://university.webflow.com/lesson/style-manager" target="_blank">- Style manager</a>
          <a href="https://university.webflow.com/courses/interactions-and-animations-course" target="_blank">- Using Interactions</a>
          <p><br/>Before Publishing: Delete unused sections/pages, clean up CSS classes, clean up unused interactions and delete unused components.<br/><br/>Breakpoints: Check how your changes behave on different devices by clicking on the top bar of the viewport.<br/><br/>Backups: Restore previous versions from the Backups section in the left sidebar and clicking Settings in case of accidental deletions.<br/><br/>Editing Images and Text: Edit text by double-clicking on static content or use the CMS section for dynamic text. Replace images easily by clicking on them and choosing &quot;Replace Image.&quot;<br/><br/>Dynamic Content (CMS): Learn how to manage and update dynamic content using the CMS, which instantly updates referenced content across pages.<br/><br/>Components: Utilize reusable components for efficient editing and consistency across layouts.</p>
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
