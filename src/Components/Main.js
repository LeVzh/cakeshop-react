import React, { Component } from 'react';

import Collapsible from 'react-collapsible';



import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './css/main.css';

var uuid = require('uuid');
var firebase = require('firebase');


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDWhiS6XGQ1XcC3Qg4PkHbFgQaWVecKjv4",
    authDomain: "cakeshoplistenner.firebaseapp.com",
    databaseURL: "https://cakeshoplistenner.firebaseio.com",
    projectId: "cakeshoplistenner",
    storageBucket: "cakeshoplistenner.appspot.com",
    messagingSenderId: "599979021552"
  };
  firebase.initializeApp(config);

class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: uuid.v1(),
      name: '',
      email: '',
      comments: '',
      submitted: false
    }
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeComments = this.handleChangeComments.bind(this)
  }

  handleChangeName(e) {
    this.setState({name: e.target.value})
  }
  handleChangeEmail(e) {
    this.setState({email: e.target.value})
  }
  handleChangeComments(e) {
    this.setState({comments: e.target.value})
  }

  handleSubmit(e) {
    firebase.database().ref('users/'+this.state.id).set({
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comments
    })
    this.setState({
      submitted: true
    })
    e.preventDefault();
  }
  
  getSnapshotBeforeUpdate() {
    if(this.props.currentCategory === 'married')
      this.slider.slickGoTo(0)
    if(this.props.currentCategory === 'children')
      this.slider.slickGoTo(3)
    if(this.props.currentCategory === 'corporative')
      this.slider.slickGoTo(6)
    if(this.props.currentCategory === 'design')
      this.slider.slickGoTo(9)
    if(this.props.currentCategory === 'capcake')
      this.slider.slickGoTo(12)
    if(this.props.currentCategory === 'other')
      this.slider.slickGoTo(15)
  }
  componentDidUpdate(){}

  renderCakes = () =>{
    const {data} = this.props
    let cakesImgs = null
    cakesImgs = data.map((imgRef) => {
        return  <div key={imgRef.id} className="box">
                    <img className="cake-imgs"  src={imgRef.ref} />
                </div>
      })
    return cakesImgs;
  }
  

  render() {
    
    var order = null
    if(!this.state.submitted) {
      order = <Collapsible trigger="Сделать заказ" >
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <input type="text" value={this.state.name} onChange={this.handleChangeName} placeholder="Введите имя"></input><br/>
                  <input type="text" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Введите email"></input><br/>
                  <input type="text" value={this.state.comments} onChange={this.handleChangeComments} placeholder="Введите комментарий"></input><br/>
                  <input type="submit" className='buttnSubmit'value="Отправить" />
                </form>
              </Collapsible> 
    } else {
      order = <div className="elem">
                <h2>Спасибо, {this.state.name}.</h2>
                <p>Мы обязательно свяжемся с вами.</p>
              </div>
    }
      

    const settings = {
      autoplay: false,
      arrows: false,
      accessibility: false,
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    
    return (
      <div className="main">
        <div className="post-header-m">
        {order}
        <Slider ref={c => (this.slider = c)} {...settings}>
          {this.renderCakes()}
        </Slider>
        <p className="elem">Здесь записана вся возможная информация о наших тортах. 
          И прочее, что автор хотел бы сюда добавить. Так же сдесь можно разметить и другую информация, 
          которую не дали в шапке. Большое спасибо за внимание!</p>
          <p className="elem">Здесь записана вся возможная информация о наших тортах. 
          И прочее, что автор хотел бы сюда добавить. Так же сдесь можно разметить и другую информация, 
          которую не дали в шапке. Большое спасибо за внимание!</p>
          <div className="border" >
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;