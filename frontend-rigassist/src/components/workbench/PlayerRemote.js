import React, {Component} from 'react'

export default class PlayerRemote extends Component {
  constructor(props){
    super(props)
    this.state = {
      playState: props.animation.playState,
      iterationCount: props.animation.iterationCount,
      direction: props.animation.direction,
    }
  }

  loopOn = () => {
    let button = document.getElementById("loopButton")
    button.innerHTML = ` LOOP SETTING </br> <hr> <hr> ${this.props.animation.iterationCount.toUpperCase()}`
  }
  loopOff = () => {
    let button = document.getElementById("loopButton")
    button.innerHTML = ' LOOP SETTING '
  }
  
  directOn = () => {
    let button = document.getElementById("directionButton")
    button.innerHTML = ` DIRECTION SETTING </br> <hr> <hr> ${this.props.animation.direction.toUpperCase()}`
  }
  directOff = () => {
    let button = document.getElementById("directionButton")
    button.innerHTML = ' DIRECTION SETTING '
  }


  render(){
    return(
      <div>
        <button id="restartButton" onClick={this.props.handleStateChange} > RESTART </button>
        <button id="playButton" onClick={this.props.handlePlay} > PLAY </button>
        <button id="pauseButton" onClick={this.props.handlePause} > PAUSE </button>
        <button id="loopButton" onClick={this.props.handleLoop} onMouseOver={this.loopOn} onMouseLeave={this.loopOff} > LOOP SETTING </button>
        <button id="directionButton" onClick={this.props.handleDirection} onMouseOver={this.directOn} onMouseLeave={this.directOff} > DIRECTION SETTING </button>
      </div>
    )
  }
}

//? direction: normal/reverse/alternate/alternate-reverse
//? loop 0-infite