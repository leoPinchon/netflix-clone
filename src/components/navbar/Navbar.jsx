import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import NavbarProfile from "../navbarProfile/NavbarProfile";
import "./navbar.scss";
import "../navbarProfile/navbarProfile.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  //Autre méthode pour gérer le scroll
  // window.onscroll = () => {
  //   setIsScrolled(window.pageYOffset === 0 ? false : true);
  //   return () => (window.onscroll = null);
  // };

  const transitionNavBar = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);

  console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="logo netflix"
          />
          <span>Accueil</span>
          <span>Séries</span>
          <span>Films</span>
          <span>Nouveautés</span>
          <span>Ma liste</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>DIRECT</span>
          <span>KID</span>
          <Notifications className="icon" />
          <div className="profile">
            <div>
              <img
                src="https://images.pexels.com/photos/4823732/pexels-photo-4823732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="profil"
              />
              <ArrowDropDown className="icon arrow-profile" />
              <NavbarProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
