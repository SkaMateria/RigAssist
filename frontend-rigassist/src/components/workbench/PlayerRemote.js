import React, {Component} from 'react'
import {Button, Icon} from 'semantic-ui-react'

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


  render(){``
    return(
      <div>
        <Button class="ui button" color='olive' id="restartButton" onClick={this.props.handleStateChange} > <Icon name='undo'/> RESTART </Button>
        <Button class="ui button" color='green' id="playButton" onClick={this.props.handlePlay} > <Icon name='play'/> PLAY </Button>
        <Button class="ui button" color='yellow' id="pauseButton" onClick={this.props.handlePause} > <Icon name='pause'/> PAUSE </Button>
        <Button class="ui button" color='violet' id="loopButton" onClick={this.props.handleLoop} onMouseOver={this.loopOn} onMouseLeave={this.loopOff} > <Icon name='sync'/> LOOP SETTING </Button>
        <Button class="ui button" color='purple' id="directionButton" onClick={this.props.handleDirection} onMouseOver={this.directOn} onMouseLeave={this.directOff} > <Icon name='arrows alternate'/> DIRECTION SETTING </Button>
      </div>
    )
  }
}