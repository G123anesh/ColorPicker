import Input from "../Input/Input";
import styles from "./Colorpicker.module.css";
import Button from "../Button/Button";
import Lbutton from "../Lbutton/Lbutton";
import { useState } from "react";
const Colorpicker = () => {
  const [text, setText] = useState("");

  //console.log(text)
  const [color, setColor] = useState(["red", "brown", "yellow", "maroon"]);

  const [colorr, setColorr] = useState("");
  
  const various = [
    "black",
    "silver",
    "gray",
    "white",
    "maroon",
    "red",
    "purple",
    "fuchsia",
    "greenlime",
    "olive",
    "yellow",
    "green",
    "navy",
    "blue",
    "teal",
    "aqua",
    "aliceblue",
    "antiquewhite",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "balnchedalmond",
    "bluevoilet",
    "brown",
    "burlywood",
    "cadetblue",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgrey",
    "darkgreen",
    "darkgray",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategrey",
    "darkslategray",
    "darkturquoise",
    "darkvoilet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "greenyellow",
    "grey",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "oldlace",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "whitesmoke",
    "yellowgreen",
  ];
  //First Step
  const texty = (str) => {
    setText(str);
  };

//Second Example
  const btnClickhandler = () => {
    color.map((el) => {
      if (el == text) {
        alert("clr has already been added");
        setText("");
      }
    });
    if (text.startsWith("#")) {
      setColor([...color, text]);
      setColorr(text);//mothi button aahe 
      setText("");
    } else {
      const name = text.split(" ").join("").toLowerCase();
      various.map((ele) => {
        if (ele === name) {
          setColor([...color, name]);
          setColorr(name);
          setText("");
        }
      });
    }
  };

  const swapbtn = (fIndex) => {
    const ly = [...color];
    setColorr(ly.splice(fIndex, 1));
  };

  const styleChange = { background: `${colorr}` };

  const enterHandlerKey = (e) => {
    if (e.key == "Enter") {
      btnClickhandler();
    }
  };
  return (
    <div className={styles.colorpicker}>
      <Input inputChangeHandler={texty} enter={enterHandlerKey} />
      <Button btnHandle={btnClickhandler} isDisabled={text.length === 0} />

      <div className={styles.container}>
        <div className={styles.displayBox} style={styleChange}></div>
      </div>

      <Lbutton color={color} swap={swapbtn} />
    </div>
  );
};
export default Colorpicker;
