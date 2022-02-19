import { useState } from "react";
import { toppings } from "./utils/toppings";
import "./styles.css";
// export const toppings = [
//     { name: "Capsicum",
//       price: 1.2
//     }, {
//       name: "Paneer",
//       price: 2.0 },
const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div className="App">
      <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })}
        <li>
          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </li>
      </ul>
    </div>
  );
}



addTask = (e) => {
  const { curTask, taskDate, tasks } = this.state;
  let ifexists = tasks.filter((task) => task.name === curTask);
  if (curTask !== "" && e.key === "Enter" && ifexists.length === 0) {
    localStorage.setItem(
      "data",
      JSON.stringify([
        ...tasks,
        { name: curTask, date: taskDate, isCompleted: false },
      ])
    );
    this.setState({
      tasks: [
        ...tasks,
        { name: curTask, date: taskDate, isCompleted: false },
      ],
      curTask: "",
      taskDate: "",
    });
  } else if (
    ifexists.length !== 0 &&
    curTask !== "" &&
    e.key !== "Backspace" &&
    e.key === "Enter"
  ) {
    alert("This task already in your list");
  } else if (curTask === "" && e.key === "Enter") {
    alert("Please type something");
  }
};