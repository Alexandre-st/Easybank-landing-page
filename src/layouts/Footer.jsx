import easybankLogo from "../assets/images/white_logo.svg";
// Social images
import FacebookLogo from "../assets/images/icon-facebook.svg";
import InstagramLogo from "../assets/images/icon-instagram.svg";
import PinterestLogo from "../assets/images/icon-pinterest.svg";
import TwitterLogo from "../assets/images/icon-twitter.svg";
import YoutubeLogo from "../assets/images/icon-youtube.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-img footer-container">
        <div className="footer-social">
          <img className="footer-social-logo" src={easybankLogo} alt="Easybank" />
          <div className="footer-social-link">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={FacebookLogo} alt="Facebook link" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={YoutubeLogo} alt="Youtube link" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={TwitterLogo} alt="Twitter link" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={PinterestLogo} alt="Pinterest link" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={InstagramLogo} alt="Instagram Link" />
            </a>
          </div>
        </div>
        <div className="footer-link">
          <ul className="footer-link-list">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className="footer-link-list">
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <a href="/" className="button">Request Invite</a>
          <p>© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
