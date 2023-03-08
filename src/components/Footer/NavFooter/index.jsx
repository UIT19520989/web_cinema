import Info from "./Info";
import JoinCo from "./JoinCo";
import styles from "./NavFooter.module.scss";

const NavFooter = () => {
  const lists = [
    {
      header: "The Basics",
      listItem: [
        {
          link: "/news",
          name: "Giới thiệu về TMDB",
        },
        {
          link: "/news",
          name: "Contact Us",
        },
        {
          link: "/news",
          name: "Support Forums",
        },
        {
          link: "/news",
          name: "API",
        },
        {
          link: "/news",
          name: "System Status",
        },
      ],
    },
    {
      header: "Get Involved",
      listItem: [
        {
          link: "/news",
          name: "Contribution Bible",
        },
        {
          link: "/news",
          name: "Add New Movie",
        },
        {
          link: "/news",
          name: "Add New TV Show",
        },
      ],
    },
    {
      header: "Community",
      listItem: [
        {
          link: "/news",
          name: "Guidelines",
        },
        {
          link: "/news",
          name: "Discussions",
        },
        {
          link: "/news",
          name: "Leaderboard",
        },
        {
          link: "/news",
          name: "Twitter",
        },
      ],
    },
    {
      header: "Legal",
      listItem: [
        {
          link: "/news",
          name: "Terms of Use",
        },
        {
          link: "/news",
          name: "API Terms of Use",
        },
        {
          link: "/news",
          name: "Privacy Policy",
        },
      ],
    },
  ];

  return (
    <div className={styles.nav}>
      <JoinCo />
      {lists.map((item, index) => {
        return <Info key={index} lists={item} />;
      })}
    </div>
  );
};

export default NavFooter;
