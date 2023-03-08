import styles from "./Info.module.scss";

const Info = ({ lists }) => {
  return (
    <div>
      <h3 className={styles.header}>{lists.header}</h3>
      <ul>
        {lists.listItem.map((item, index) => {
          return (
            <li key={index}>
              <a className={styles.list} href={item.link}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Info;
