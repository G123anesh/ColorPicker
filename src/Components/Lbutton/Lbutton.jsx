import Nbutton from "../Nbutton/Nbutton"; //color
import styles from "./Lbutton.module.css";

// eslint-disable-next-line react/prop-types
const Lbutton = ({ color, swap }) => {
  // eslint-disable-next-line react/prop-types
  const listColor = color.map((some, index) => {
    return (
      <Nbutton
        key={index}
        style={{ background: `${some}`, border: `${some}` }}
        colorClicked={() => swap(index)}
      />
    );
  });
  return <div className={styles.clrBtns}>{listColor}</div>;
};
export default Lbutton;
