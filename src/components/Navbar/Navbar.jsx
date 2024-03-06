import "./Navbar.css";
import AVATAR from "../../assets/avatar2.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const scrollAnimation = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
    return () => {
      window.removeEventListener("scroll", scrollAnimation);
    };
  }, [show]);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
        alt="Netflix Logo"
        className="nav__logo"
      />
      <img src={AVATAR} alt="Avatar Logo" className="nav__avatar" />
    </div>
  );
};

export default Navbar;
