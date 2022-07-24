import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import data from "./resumeData.json";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
    };
  }

  getResumeData() {
    this.setState({
      resumeData: data,
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
      </div>
    );
  }
}

export default App;
