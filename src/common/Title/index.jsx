import styles from "./styles.module.css";

const Title = ({ title, subtitle, special }) => {
  return (
    <div className={`text-center ${styles.commonTitle}`}>
      <h2>
        {special ? <span>{special}</span> : ""}
        {title}
      </h2>
      <div className="d-flex justify-content-center">
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Title;
