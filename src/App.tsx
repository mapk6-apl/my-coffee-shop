import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ContentContainer } from "./ContentContainer";
import { Intro } from "./components/Introduction/intro";
import {Learnmore} from './components/LearnMore/Learnmore'
import {MoreInfo} from './components/MoreCoffeeInfo/MoreInfo'
function App() {
  return (
    <div className="App">
      <ContentContainer>
        <Navbar />
        <Intro />
        <Learnmore />
        <MoreInfo />
      </ContentContainer>
    </div>
  );
}

export default App;