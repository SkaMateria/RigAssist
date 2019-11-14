import React, {Component} from 'react'

export default class ExportSettings extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  
  /** What to do next
   * :use codepen to demo the copy paste
   * :figure out a way to get just plain text in a card i guess
   * ! it exports to a single css file that goes like
   * .customanimation {
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-name: customAnimation;
    }

  @keyframes customAnimation {
    0% {
      margin-left: 100%;
      width: 300%; 
    }

    100% {
      margin-left: 0%;
      width: 100%;
    }
  }

    * ?do a click then reveal the setting
    * make a copy to clipboard button
    */
    
  
  render(){
    return(
      <button>EXPORT</button>
      )
    }
  }