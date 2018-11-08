import React, { Component } from 'react';
import './App.css';



import Header from './Components/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';



const cakesArr= [
  {
    id: 1,
    ref: './cakes/1.jpg',
    category: 'married',
    nameCategory: 'Свадебные торты'
  },
  {
    id: 2,
    ref: './cakes/2.jpg',
    category: 'married',
    nameCategory: 'Свадебные торты'
  },
  {
    id: 3,
    ref: './cakes/3.jpg',
    category: 'married',
    nameCategory: 'Свадебные торты'
  },
  {
    id: 4,
    ref: './cakes/4.jpg',
    category: 'children',
    nameCategory: 'Детские торты'
  },
  {
    id: 5,
    ref: './cakes/5.jpg',
    category: 'children',
    nameCategory: 'Детские торты'
  },
  {
    id: 6,
    ref: './cakes/6.jpg',
    category: 'children',
    nameCategory: 'Детские торты'
  },
  {
    id: 7,
    ref: './cakes/7.jpg',
    category: 'corporative',
    nameCategory: 'Корпоративные торты'
  },
  {
    id: 8,
    ref: './cakes/8.jpg',
    category: 'corporative',
    nameCategory: 'Корпоративные торты'
  },
  {
    id: 9,
    ref: './cakes/9.jpg',
    category: 'corporative',
    nameCategory: 'Корпоративные торты'
  },
  {
    id: 10,
    ref: './cakes/10.jpg',
    category: 'design',
    nameCategory: 'Дизайнерские торты'
  },
  {
    id: 11,
    ref: './cakes/11.jpg',
    category: 'design',
    nameCategory: 'Дизайнерские торты'
  },
  {
    id: 12,
    ref: './cakes/12.jpg',
    category: 'design',
    nameCategory: 'Дизайнерские торты'
  },
  {
    id: 13,
    ref: './cakes/13.jpg',
    category: 'capcake',
    nameCategory: 'Капкейки'
  },
  {
    id: 14,
    ref: './cakes/14.jpg',
    category: 'capcake',
    nameCategory: 'Капкейки'
  },
  {
    id: 15,
    ref: './cakes/15.jpg',
    category: 'capcake',
    nameCategory: 'Капкейки'
  },
  {
    id: 16,
    ref: './cakes/16.jpg',
    category: 'other',
    nameCategory: 'Начинки'
  },
  {
    id: 17,
    ref: './cakes/17.jpg',
    category: 'other',
    nameCategory: 'Начинки'
  },
  {
    id: 18,
    ref: './cakes/18.jpg',
    category: 'other',
    nameCategory: 'Начинки'
  },
]

class App extends Component {

  state = {
    cakes: cakesArr,
    currentCategory: ''
  }

  getCurrentCategory = (value) => {
    this.setState({
      currentCategory: value
    })
    
  }

  render() {
    return (
      <section>
        <Header />
        <Main data={this.state.cakes} currentCategory={this.state.currentCategory}/>
        <Navbar category={this.state.cakes} getCurrentCategory={this.getCurrentCategory}/>
      </section>
    );
  }
}

export default App;
