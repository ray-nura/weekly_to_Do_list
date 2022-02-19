import React from "react";
import "../App.css";
import "./FormChooseTheme.css";

import moonData from "../backgrounds/moonData";
import flowersData  from "../backgrounds/flowersData";
import greenNatureData  from "../backgrounds/greenNatureData";
import magicSkyData  from "../backgrounds/magicSkyData";
import mountainData  from "../backgrounds/mountainData";


const FormChooseTheme = (props) =>{

  const handleSelect = (e) => {

    let themeValue = e.target.value ;
    let imgArr= moonData;
    switch (themeValue) {
      case "moonData": imgArr = moonData;
          break;
      case "mountainData": imgArr = mountainData;
          break;
      case "flowersData": imgArr = flowersData;
          break;
      case "greenData": imgArr = greenNatureData;
          break;
      case "magicSkyData":imgArr = magicSkyData;
          break;
      default: imgArr = moonData;
    }
    props.setThemeImg(imgArr);
  };
const handleClick = (event)=>{
  event.preventDefault()
  const block="block"; 
  props.displaySelect(block);
}
    return (
        <form >
          <input type="text" className="todo-input" />
          <button className="todo-button" type="submit"  onClick={handleClick}>Add New Task</button>
          <label htmlFor="bgImg">Choose a theme</label>
          <select id="bgImg" name="themesBg" className="themes"  onChange={handleSelect}>
            <option value="">--Choose a theme--</option>
            <option value="greenData">Green Nature</option>
            <option value="moonData">Moon</option>
            <option value="magicSkyData">Magic Sky</option>
            <option value="mountainData">Mountain</option>
            <option value="flowersData">Flowers</option>
          </select>
        </form>

);
};
export default FormChooseTheme;