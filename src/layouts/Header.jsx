import { AnimatePresence, motion } from "framer-motion";
import easybankLogo from "../assets/images/logo.svg";
import Menu from "../components/Menu";

const Header = () => {

  return (
    <AnimatePresence>
      <motion.header
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="navigation container">
          <img className="navigation-logo" src={easybankLogo} alt="Easybank" />
          <nav className="navigation-desktop">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Carrers</li>
            </ul>
          </nav>
          <button className="navigation-button">Request Invite</button>
          <Menu />
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
