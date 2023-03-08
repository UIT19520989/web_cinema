import logo from "../../../../../assets/logo/logo.svg";
import style from "./Logo.module.scss";

const Logo = () => {
  return (
    <a href='/' className={style.logo}>
      <img
        src={logo}
        alt='The Movie Database (TMDB)'
        width='154'
        height='64'
      ></img>
    </a>
  );
};

export default Logo;
