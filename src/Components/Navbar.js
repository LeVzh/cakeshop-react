import React, { Component } from 'react';
import './css/navbar.css'

class Navbar extends Component {

  constructor(props) {
    super(props)
    this.onClckHandler = this.onClckHandler.bind(this)
  }


  renderCats = () =>{
    const {category} = this.props
    let cakesCat = null
    let temp

    cakesCat = category.map((cat) => {
        
        if (temp !== cat.category) {
          temp = cat.category
          return <li key={cat.id} className={cat.category} 
                    onClick={this.onClckHandler}>{cat.nameCategory}</li>
        }
        return null
      })

    return cakesCat;
  }

  onClckHandler(e) {
    this.props.getCurrentCategory(e.target.className)
  }


  render() {
    return (
      <nav>
        
        <div className='catContainer'>
          <ul className='push' >{this.renderCats()}</ul>
        </div>
        
      </nav>
    );
  }
}

export default Navbar;