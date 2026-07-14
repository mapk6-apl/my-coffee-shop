import React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { ContentContainer } from "./ContentContainer";
import { Intro } from "./components/Introduction/intro";
import {Learnmore} from './components/LearnMore/Learnmore'
import {MoreInfo} from './components/MoreCoffeeInfo/MoreInfo'
import {Demo} from './components/AppDemo/Demo'
import {Reserve} from './components/Reservations/Reserve'
import {Footer} from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <ContentContainer>
        <Navbar />
        <Intro />
        <Learnmore />
        <MoreInfo />
        <Demo />
        <Reserve /> 
        <Footer />
      </ContentContainer>
    </div>
  );
}

export default App;