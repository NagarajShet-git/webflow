import react from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer-right-flex">
        <div className="footer-wrapper">
          <h5 className="font-white">Main</h5>
          <div className="footer-link-wrapper">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/" className="footer-link move-down">Home</Link>
          </div>
          <div className="footer-link-wrapper">
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/about" className="footer-link move-down">About</Link>
          </div>
          <div className="footer-link-wrapper">
            <Link to="/works" className="footer-link">Works</Link>
            <Link to="/works" className="footer-link move-down">Works</Link>
          </div>
        </div>
        <div className="footer-wrapper">
          <h5 className="font-white">Pages</h5>
          <div className="footer-link-wrapper">
            <Link to="/contact" className="footer-link">Contact</Link>
            <Link to="/contact" className="footer-link move-down">Contact</Link>
          </div>
          <div className="footer-link-wrapper">
            <Link to="/terms-conditions" aria-current="page" className="footer-link w--current">Terms &amp; Conditions</Link>
            <Link to="/terms-conditions" aria-current="page" className="footer-link move-down w--current">Terms &amp; Conditions</Link>
          </div>
          <div className="footer-link-wrapper">
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link to="/privacy-policy" className="footer-link move-down">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-wrapper">
          <h5 className="font-white">Utilities</h5>
          <div className="footer-link-wrapper">
            <Link to="/style-guide" className="footer-link">Style Guide</Link>
            <Link to="/style-guide" className="footer-link move-down">Style Guide</Link>
          </div>
          <div className="footer-link-wrapper">
            <Link to="/instructions" className="footer-link">Instructions</Link>
            <Link to="/instructions" className="footer-link move-down">Instructions</Link>
          </div>
          <div className="footer-link-wrapper">
            <Link to="/licenses" className="footer-link">Licenses</Link>
            <Link to="/licenses" className="footer-link move-down">Licenses</Link>
          </div>
          <div className="footer-link-wrapper">
            <Link to="/changelog" className="footer-link">Changelog</Link>
            <Link to="/changelog" className="footer-link move-down">Changelog</Link>
          </div>
        </div>
      </div>
    </>
  )
}
