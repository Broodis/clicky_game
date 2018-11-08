import React, { Component } from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import HeaderText from "./components/HeaderText";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import skins from "./skins.json";
import "./App.css";

function shuffleSkins(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

class App extends Component {
    state = {
        skins,
        currentScore: 0,
        bestScore: 0,
        rightWrong: "",
        clicked: [],
    };

    handleClick = id => {
        if (this.state.clicked.indexOf(id) === -1) {
            this.handleIncrement();
            this.setState({ clicked: this.state.clicked.concat(id) });
        } else {
            this.handleReset();
        }
    };  

    handleIncrement = () => {
        const newScore = this.state.currentScore + 1;
        this.setState({
          currentScore: newScore,
          rightWrong: ""
        });
        if (newScore >= this.state.bestScore) {
          this.setState({ bestScore: newScore });
        }
        else if (newScore === 12) {
          this.setState({ rightWrong: "You've collected all 12 skins!" });
        }
        this.handleShuffle();
      };
    
      handleReset = () => {
        this.setState({
          currentScore: 0,
          bestScore: this.state.bestScore,
          rightWrong: "Try Again!",
          clicked: []
        });
        this.handleShuffle();
      };
    
      handleShuffle = () => {
        let shuffledSkins = shuffleSkins(skins);
        this.setState({ skins: shuffledSkins });
      };
    
      render() {
        return (
          <Wrapper>
            <Header
              title="Fortnite Skin Collector Game"
              score={this.state.currentScore}
              bestScore={this.state.bestScore}
              rightWrong={this.state.rightWrong}
            />
    
            <HeaderText>
              Collect all 12 skins and don't collect the same skin more than once!
            </HeaderText>
    
            <Container>
              <Row>
                {this.state.skins.map(skins => (
                  <Column size="md-3 sm-6">
                    <Card
                      key={skins.id}
                      handleClick={this.handleClick}
                      handleIncrement={this.handleIncrement}
                      handleReset={this.handleReset}
                      handleShuffle={this.handleShuffle}
                      id={skins.id}
                      image={skins.image}
                    />
                  </Column>
                ))}
              </Row>
            </Container>
          </Wrapper>
        );
      }
    }
    
    export default App;