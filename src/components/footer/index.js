import { ReactComponent as FacebookSVG } from "../../assets/media/facebook.svg";
import { ReactComponent as InstagramSVG } from "../../assets/media/instagram.svg";
import { ReactComponent as LinkedInSVG } from "../../assets/media/linkedin.svg";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import classNames from "classnames";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-root">
        <div className="footer-left">
          <p className="footer-text-bold">Experts.ai</p>
          <div>
            <FacebookSVG />
            <InstagramSVG />
            <LinkedInSVG />
          </div>
        </div>
        <div className="footer-right">
          <Navbar className="footer-nav-bar" variant="dark">
            <Nav className="footer-nav-items">
              <NavLink href="#pricing" className="footer-link">Pricing</NavLink>
              <NavLink href="#blog" className="footer-link">Blog</NavLink>
              <NavLink href="#help" className="footer-link">Help</NavLink>
            </Nav>
          </Navbar>
          <p className={classNames("footer-privacy-text", "mt-29")}>Terms of Use & Privacy Policy</p>

        </div>
      </div>
      <div className='divider' />
      <p className="footer-privacy-text">© {new Date().getFullYear()}  Experts | All rights reserved.</p>
    </div>
  );
}

export default Footer;
