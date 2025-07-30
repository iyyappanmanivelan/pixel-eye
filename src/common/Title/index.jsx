import styles from "./styles.module.css";

const Title = ({ title, subtitle, special, iswhite }) => {
  return (
    <div className={`text-center ${styles.commonTitle}`}>
      <h2 style={{ color: iswhite ? "#FFFEFA" : "" }}>
        {special ? <span>{special}</span> : ""}
        {title}
      </h2>
      <div className="d-flex justify-content-center">
        <p style={{ color: iswhite ? "#FFFEFA" : "" }}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Title;
