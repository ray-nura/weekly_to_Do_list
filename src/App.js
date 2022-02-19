import { Component } from "react";
import "./App.css";
import FormChooseTheme from "./components/FormChooseTheme";
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
      slideId: '',
      displaySection: 'none',
    };
  }

  handleSelectTheme=(e)=>{
   const objOfThemes= {mountainData : mountainData,magicSkyData:magicSkyData,flowersData:flowersData,greenNatureData:greenNatureData,moonData:moonData}
    this.setState({bgImgTheme:objOfThemes[e.target.value]})
  }

  render() {
    const { slideId, bgImgTheme, displaySection} = this.state;
    return (
      <div className="main">
        <header>
          <h1>My Weekly Planner</h1>
        </header>
        <FormChooseTheme handleSelect={this.handleSelectTheme}
           displaySectionAdd={(block) => this.setState({ displaySection: block })}
        />
        <SectionAddTask displaySection={displaySection}
          displaySectionAdd={(none) => this.setState({ displaySection: none })}
        />
        <Day
          slideId={slideId}
          theme={bgImgTheme}
          addActive={(id) => this.setState({ slideId: id })}
        />
      </div>
    );
  }
}
export default App;