import React, { Component } from 'react';
import './App.css';
import Display from './display/Display.js'
import Dashboard from './dashboard/Dashboard.js'

class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    outs: 0 
  }

  onStrike = (e) => {
    e.preventDefault();
    let { outs, strikes, balls } = this.state
    if(outs > 3 || outs < 0 || balls > 4 || balls < 0
      || strikes > 3 || strikes < 0){
        console.log('Display has an error')
    }else if(outs === 3){
      this.setState({
        balls:0,
        strikes: 0,
        outs: 0 
      })
      alert('New Inning');
    }else if(strikes < 2){
      this.setState({
      strikes: strikes+1
    })
    }else if(strikes === 2 && outs < 2){
      this.setState({
        balls:0,
        strikes: 0,
        outs: outs+1 
      })
      alert('Strike out')
    }
  }

  onBall = (e) => {
    e.preventDefault();
    let { outs, strikes, balls } = this.state
    if(outs > 3 || outs < 0 || balls > 4 || balls < 0
      || strikes > 3 || strikes < 0){
      console.log('Display has an error')
    }else if(balls < 3){
      this.setState({
        balls: balls+1, 
      })
    }else{
      this.setState({
        balls:0,
        strikes: 0,
      })
      alert('Walked');
    }
  }

  onFoul = (e) => {
    e.preventDefault();
    let { outs, strikes, balls } = this.state
    if(outs > 3 || outs < 0 || balls > 4 || balls < 0
      || strikes > 3 || strikes < 0){
      console.log('Display has an error')
    }else if(strikes < 2){
      this.setState({
        strikes: strikes+1
      })
    }else{
      alert('keep trying')
    }
  }
  onHit = (e) => {
    e.preventDefault();
    let { outs, strikes, balls } = this.state
    if(outs > 3 || outs < 0 || balls > 4 || balls < 0
      || strikes > 3 || strikes < 0){
      console.log('Display has an error')
    }else{
      this.setState({
        strikes: 0,
        balls:0,
      })
    }
  }

  render() {
    let { balls, outs, strikes } = this.state
    return (
      <div className="App">
       <Display 
       balls={balls}
       strikes={strikes}
       outs={outs}/>
       <Dashboard 
       onStrike={this.onStrike}
       onBall={this.onBall}
       onFoul={this.onFoul}
       onHit={this.onHit}/>
      </div>
    );
  }
}

export default App;
