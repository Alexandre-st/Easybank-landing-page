import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import easybankLogo from "../assets/images/logo.svg";
import Menu from "../components/Menu";

const Header = () => {
  return (
    <AnimatePresence>
      <motion.header
        className="navigation container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
      <img src={easybankLogo} alt="Easybank" />
      <nav className="navigation-desktop">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Carrers</li>
        </ul>
      </nav>
        {/* <Link to="/" className="navigation-button">Request Invite</Link> */}
        <Menu />
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
