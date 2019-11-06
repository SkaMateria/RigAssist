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



  render(){
    return(
      <div>
        <button id="restartButton" onClick={this.props.handleStateChange}> RESTART </button>
        <button id="playButton" onClick={this.props.handlePlay, this.stateChange}> PLAY </button>
        <button id="pauseButton" onClick={this.props.handlePause} >PAUSE</button>
        <button id="loopButton" onClick={this.props.handleLoop} >LOOP SETTINGS</button>
        <button id="directionButton">DIRECTION SETTINGS</button>
      </div>
    )
  }
}

//? direction: normal/reverse/alternate/alternate-reverse
//? loop 0-infite