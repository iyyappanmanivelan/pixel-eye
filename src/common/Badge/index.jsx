import styles from "./styles.module.css";

const Badge = ({ title }) => {
  return <div className={styles.badgecard}>{title}</div>;
};

export default Badge;
