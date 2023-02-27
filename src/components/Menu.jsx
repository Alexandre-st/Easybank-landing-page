import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import logoCloseMenu from "../assets/images/icon-close.svg";
import logoOpenMenu from "../assets/images/icon-hamburger.svg";

const Menu = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prevMenu => !prevMenu);
  };

  return (
    <div className="navigation-menu">
      {!openMenu && (
        <img src={logoOpenMenu} alt="Open the menu" onClick={toggleMenu} />
      )}
      {openMenu && (
        <>
          <img src={logoCloseMenu} alt="Close the menu" onClick={toggleMenu} />
          <AnimatePresence>
            <motion.div className="navigation-background">
              <nav className="navigation-mobile">
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Blog</li>
                  <li>Carrers</li>
                </ul>
              </nav>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};
 
export default Menu;