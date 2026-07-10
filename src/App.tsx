import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ContentContainer } from "./ContentContainer";
import { Intro } from "./components/Introduction/intro";
import {Learnmore} from './components/LearnMore/Learnmore'

function App() {
  return (
    <div className="App">
      <ContentContainer>
        <Navbar />
        <Intro />
        <Learnmore />
      </ContentContainer>
    </div>
  );
}

export default App;