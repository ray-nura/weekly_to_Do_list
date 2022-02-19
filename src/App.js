import { Component } from "react";
import "./App.css";
import FormChooseTheme from "./components/FormChooseTheme"
import SectionAddTask from "./components/SectionAddTask";
import Day from "./components/Day";

import moonData from "./backgrounds/moonData";
import flowersData from "./backgrounds/flowersData";
import greenNatureData from "./backgrounds/greenNatureData";
import magicSkyData from "./backgrounds/magicSkyData";
import mountainData from "./backgrounds/mountainData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      bgImgTheme: moonData,
      slideDay: '',
      displayForm: 'none',
    };
  }

  render() {
    const { bgImgTheme, slideDay, displayForm, newTasksArray } = this.state;
    console.log(displayForm);
    return (
      <div className="main">
        <header>
          <h1>My Weekly Planner</h1>
        </header>

        <FormChooseTheme setThemeImg={(imgArr) => this.setState({ bgImgTheme: imgArr })}
          displaySelect={(block) => this.setState({ displayForm: block })} />

        <SectionAddTask displayForm={displayForm} 
        displaySelect={(none) => this.setState({ displayForm: none })}
          // addTasks={(newTasks) => this.setState({ newTasksArray: newTasks })}
           />

        <Day slideDay={slideDay} theme={bgImgTheme} addActive={(day) => this.setState({ slideDay: day })}
        />
      </div>
    );
  }
}

export default App;
