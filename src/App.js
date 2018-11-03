import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

const cakesArr= [
  {
    id: 1,
    ref: './cakes/1.jpg'
  },
  {
    id: 2,
    ref: './cakes/2.jpg'
  },
  {
    id: 3,
    ref: './cakes/3.jpg'
  },
  {
    id: 4,
    ref: './cakes/4.jpg'
  },
  {
    id: 5,
    ref: './cakes/5.jpg'
  },
  {
    id: 6,
    ref: './cakes/6.jpg'
  },
  {
    id: 7,
    ref: './cakes/7.jpg'
  },
  {
    id: 8,
    ref: './cakes/8.jpg'
  },
  {
    id: 9,
    ref: './cakes/9.jpg'
  },
  {
    id: 10,
    ref: './cakes/10.jpg'
  },
  {
    id: 11,
    ref: './cakes/11.jpg'
  },
  {
    id: 12,
    ref: './cakes/12.jpg'
  },
  {
    id: 13,
    ref: './cakes/13.jpg'
  },
  {
    id: 14,
    ref: './cakes/14.jpg'
  },
  {
    id: 15,
    ref: './cakes/15.jpg'
  },
  {
    id: 16,
    ref: './cakes/16.jpg'
  },
  {
    id: 17,
    ref: './cakes/17.jpg'
  },
  {
    id: 18,
    ref: './cakes/18.jpg'
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
