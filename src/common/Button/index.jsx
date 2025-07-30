import styles from "./styles.module.css";
const Button = ({ title, icon, bgcolor, textcolor, btnborder }) => {
  return (
    <button
      className={`btn d-flex gap-xl-3 gap-lg-2 gap-md-3 gap-2  align-items-center justify-content-center ${styles.commonBtn}`}
      style={{ background: bgcolor, color: textcolor, border: btnborder }}
    >
      {icon ? <img src={icon} className="img-fluid" /> : ""}
      <p className="m-0">{title}</p>
    </button>
  );
};

export default Button;
