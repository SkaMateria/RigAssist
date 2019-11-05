import React, {Component} from 'react'

export default class PlayerRemote extends Component {
  constructor(props){
    super(props)
    this.state = {
      playState: props.animation.playState,
      // iterationCount: this.props.animation.iterationCount,
      // direction: this.props.animation.direction,
    }
    // this.pauseClick = this.pauseClick.bind(this)
    // this.playClick = this.playClick.bind(this)
  }

  buttonClick = () => {
    console.log(this.state.playState)
    // this.state.playState === "running" ? this.pauseClick() : this.playClick()
  }
  
  // pauseClick(){
  //   this.props.handlePause
  // }
  
  // playClick(){
  // this.setState({
  //   playState: "running"
  //   })
  // }


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
