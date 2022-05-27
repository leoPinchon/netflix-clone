import {
  ArrowDropDown,
  CreateOutlined,
  HelpOutline,
  PermIdentityOutlined,
} from "@material-ui/icons";
import "./navbarProfile.scss";

const NavbarProfile = () => {
  return (
    <div className="account-dropdown-menu">
      <ArrowDropDown className="arrow-icon" />
      <div className="dropdown-container">
        <div className="dropdown-container__item">
          <img
            src="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYzFjwS6Ubp1CtAqfYlMZ_uJDZBdhSas-5ogiRyL8v_E8b1egRHovPnnVeTu74Wqte8dztyx8AFEfOG6bL4rcMep6KCuDVo.png?r=762"
            alt="profile"
          />
          <p>Sylvie</p>
        </div>
        <div className="dropdown-container__item">
          <img
            src="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABenQK-ZtIvoX5hq9D2kn-8iBHdrNHpKZqvmoF9wG9nE61o9GnMEfWBOyc7oFfaV1WiAIjqJFiQw_sGLUeWLJ5EZQTWOD1sA.png?r=850"
            alt="profile"
          />
          <p>Léo</p>
        </div>
        <div className="dropdown-container__item">
          <img
            src="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZUj_AcBlLMEVkmTBrDO4I3hXw36cUn2fDA1creHYKRabtobqfzGk8jk_GVrJKZiJ6e8Wi0XWad6fBgThVC61yuw4GKKu6E.png?r=a64"
            alt="profile"
          />
          <p>Louna</p>
        </div>
        <div className="dropdown-container__item">
          <img
            src="https://occ-0-55-56.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABd-MswedclS69NP-6NiwrakKzGNIxs6HgPcyqiEM_WOhhpUevcrtF3QvVZd-oJpKpvWg_FGhrczBSYwC1d8gwDuzdr9X2xPcxxftDz8TqS_bWmDz-0JVdb1mUDr-fbYne8MGQlQxZdHLlg.png?r=ed4"
            alt="profile"
          />
          <p>Jeunesse</p>
        </div>

        <div className="dropdown-container__item">
          <CreateOutlined />
          <p>Gérer les profiles</p>
        </div>
      </div>
      <div className="dropdown-container">
        <p>Jeunesse</p>
        <p>Direct</p>
      </div>
      <div className="dropdown-container">
        <div className="dropdown-container__item">
          <PermIdentityOutlined />
          <p>Compte</p>
        </div>
        <div className="dropdown-container__item">
          <HelpOutline />
          <p>Centre d'aide</p>
        </div>
      </div>
      <div className="dropdown-container dropdown-container__deco">
        <p>Se Déconnecter</p>
      </div>
    </div>
  );
};

export default NavbarProfile;
