import React, { Component } from 'react';
import './css/header.css'

class Header extends Component {
  render() {
    return (
      <header>
        
        <div className="post-header">
        
          <div className="post-cat">
            <a href="">АРТ-КОНДИТЕРСКАЯ</a>
          </div>
          <div className="post-title">
            <h2>
              <a href="">Miracolo</a>
            </h2>
          </div>
          <div className="post-meta">Кондитер: <a href="https://vk.com">Бунос Евгений Сергеевич</a> / тел. +375(29)741-54-29</div>
            <div className="border">
              <span></span>
              <span></span>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;