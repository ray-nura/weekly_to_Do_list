import React from "react";
import "../App.css";
import "./FormChooseTheme.css";

const FormChooseTheme = (props) =>{
  
  const handleClick = (event)=>{
  event.preventDefault()
  const block="block"; 
  props.displaySectionAdd(block);
}
    return (
        <form >
          <button className="todo-button" type="submit"  onClick={handleClick}>Add New Task</button>
          <label htmlFor="bgImg" className="label-select">Choose a theme</label>
          <select id="bgImg" name="themesBg" className="themes"  onChange={props.handleSelect}>
            <option value="">--Choose a theme--</option>
            <option value="greenNatureData">Green Nature</option>
            <option value="moonData">Moon</option>
            <option value="magicSkyData">Magic Sky</option>
            <option value="mountainData">Mountain</option>
            <option value="flowersData">Flowers</option>
          </select>
        </form>
);
};
export default FormChooseTheme;
