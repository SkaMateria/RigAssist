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

  loopToggle = () => {
    console.log("props:",this.props)
    console.log("state:", this.state)
  }

  render(){
    return(
      <div>
        <button id="playButton" onClick={this.props.handlePlay}> PLAY </button>
        <button id="pauseButton" onClick={this.props.handlePause} >PAUSE</button>
        <button id="loopButton" onClick={this.props.handleLoop} >LOOP SETTINGS</button>
        <button id="directionButton">DIRECTION SETTINGS</button>
      </div>
    )
  }
}

//? direction: normal/reverse/alternate/alternate-reverse
//? loop 0-infite