import styles from "./Button.module.css";
// eslint-disable-next-line react/prop-types
const Button = ({ btnHandle, isDisabled }) => {
  return (
    <button  onClick={()=>{
      btnHandle()
    }} className={styles.addBtn} disabled={isDisabled}>
      Add a Color
    </button>
  );
};
export default Button;
