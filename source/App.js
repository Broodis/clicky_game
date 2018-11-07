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

function shuffleCards(array) {
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