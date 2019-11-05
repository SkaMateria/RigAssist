import React, {Component} from 'react'

export default class PlayerRemote extends Component {
  constructor(){
    super()
    this.state = {
      playState: this.props.animation.playState,
      iterationCount: this.props.animation.iterationCount,
      direction: this.props.animation.direction,
    }
  }

  buttonClick = () => {
    this.state.playState === "running" ? this.pauseClick() : this.playClick()
  }
  
  pauseClick(){
  this.setState({
    animationPlayState: "paused"
    })
  }
  
  playClick(){
  this.setState({
    animationPlayState: "running"
    })
  }


  render(){
    return(
      <div>
        <button>PLAY</button>
        <button>PAUSE</button>
        <button>LOOP SETTINGS</button>
        <button>DIRECTION SETTINGS</button>
      </div>
    )
  }

}
