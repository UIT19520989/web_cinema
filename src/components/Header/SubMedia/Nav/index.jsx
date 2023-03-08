import Logo from "./Logo";
import Subnav from "./Subnav";
import styles from "./Nav.module.scss";
import { Space } from "antd";

const Nav = () => {
  const itemsMovies = [
    {
      key: "1",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          Popular
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          Now Playing
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          Upcoming
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          Top rated
        </a>
      ),
    },
  ];

  const itemsTV = [
    {
      key: "1",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          Popular
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          Airing Today
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          On TV
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          Top rated
        </a>
      ),
    },
  ];

  const itemsPeople = [
    {
      key: "1",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          Popular People
        </a>
      ),
    },
  ];

  const itemsMore = [
    {
      key: "1",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.antgroup.com'
        >
          Discussions
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.aliyun.com'
        >
          Leaderboard
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          Support
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.luohanacademy.com'
        >
          API
        </a>
      ),
    },
  ];

  return (
    <div className={styles.nav}>
      <Logo />
      <Space direction='horizontal' style={{ alignItems: "center" }}>
        <Subnav items={itemsMovies} type={"Movies"} />
        <Subnav items={itemsTV} type={"TV Shows"} />
        <Subnav items={itemsPeople} type={"People"} />
        <Subnav items={itemsMore} type={"Movies"} />
      </Space>
    </div>
  );
};

export default Nav;
