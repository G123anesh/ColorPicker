import styles from "./Input.module.css";
// eslint-disable-next-line react/prop-types
const Input = ({ inputChangeHandler, enter }) => {
  const inp = (e) => {
    inputChangeHandler(e.target.value);
  };

  return (
    <input type="text" onChange={inp}  className={styles.inp}  onKeyUp={enter} />
  );
};
export default Input;
