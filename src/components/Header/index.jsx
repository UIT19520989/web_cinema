import style from "./Header.module.scss";
import SubMedia from "./SubMedia";

const Header = () => {
  return (
    <header className={style.bgColor}>
      <SubMedia></SubMedia>
    </header>
  );
};

export default Header;
