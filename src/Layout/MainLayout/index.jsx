import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainLayout;
