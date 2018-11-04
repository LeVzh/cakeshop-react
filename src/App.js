import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

const cakesArr= [
  {
    id: 1,
    ref: './cakes/1.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 2,
    ref: './cakes/2.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 3,
    ref: './cakes/3.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 4,
    ref: './cakes/4.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 5,
    ref: './cakes/5.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 6,
    ref: './cakes/6.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 7,
    ref: './cakes/7.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 8,
    ref: './cakes/8.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 9,
    ref: './cakes/9.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 10,
    ref: './cakes/10.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 11,
    ref: './cakes/11.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 12,
    ref: './cakes/12.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 13,
    ref: './cakes/13.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 14,
    ref: './cakes/14.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 15,
    ref: './cakes/15.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 16,
    ref: './cakes/16.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 17,
    ref: './cakes/17.jpg',
    legend: 'Vilka-huilka'
  },
  {
    id: 18,
    ref: './cakes/18.jpg',
    legend: 'Vilka-huilka'
  },
]

class App extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    cakes: cakesArr,
  }

  render() {
    return (
      <section>
        <Header />
        <Main data={this.state.cakes}/>
        <Navbar/>
      </section>
    );
  }
}

export default App;
