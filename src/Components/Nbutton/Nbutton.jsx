import styles from "./Nbutton.module.css";
// eslint-disable-next-line react/prop-types
const Nbutton = ({ style, colorClicked }) => {
  return (
    <button
      className={styles.nbutton}
      style={style}
      onClick={colorClicked}
    ></button>
  );
};
export default Nbutton;
