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
        <button onClick={this.props.handlePlay}> PLAY </button>
        <button onClick={this.props.handlePause} >PAUSE</button>
        <button>LOOP SETTINGS</button>
        <button>DIRECTION SETTINGS</button>
      </div>
    )
  }

}
