import React, {Component} from 'react'
import '../../styles/ExportSettings.css'

export default class ExportSettings extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  
  /** What to do next
   * ?add 50% percent setting
   * ?add 2 more things to manipulate
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
        <div className='exportsettings'> 
        .customAnimation  {"{"} 
          <p> position: {this.props.objectOrigin.position}; </p>
          <p> top: {this.props.objectOrigin.top}; </p>
          <p> left: {this.props.objectOrigin.left}; </p>
          <p> animation-delay: {this.props.animation.delay}; </p>
          <p> animation-direction: {this.props.animation.direction}; </p>
          <p> animation-duration: {this.props.animation.duration}; </p>
          <p> animation-fill-mode: {this.props.animation.fillMode}; </p>
          <p> animation-iteration-count: {this.props.animation.iterationCount}; </p>
          <p> animation-name: {this.props.animation.name}; </p>
          <p> animation-playState: {this.props.animation.playState}; </p>
          <p> animation-timing-function: {this.props.animation.timingFunction}; </p>
        {"}"}
          <br/>
          <br/>
        @keyframes customAnimation {"{"}
          <p> {this.props.keyframes.prct0.prct} {"{"}</p>
            <p className='p2'> left: {this.props.keyframes.prct0.left}; </p>
            <p className='p2'> top: {this.props.keyframes.prct0.top}; </p>
            <p className='p2'> filter: </p>
              <p className='p3'> blur({this.props.keyframes.prct0.filter.blur}) </p>
              <p className='p3'> brightness({this.props.keyframes.prct0.filter.brightness}) </p>
              <p className='p3'> contrast({this.props.keyframes.prct0.filter.contrast}) </p>
              <p className='p3'> opacity({this.props.keyframes.prct0.filter.opacity}); </p>
            <p className='p2'> transform: </p>
              <p className='p3'> rotate({this.props.keyframes.prct0.transform.rotate}) </p>
              <p className='p3'> scale({this.props.keyframes.prct0.transform.scale}); </p>
          <p> {"}"} </p>
          <br/>
          <p> {this.props.keyframes.prct100.prct} {"{"}</p>
            <p className='p2'> left: {this.props.keyframes.prct100.left}; </p>
            <p className='p2'> top: {this.props.keyframes.prct100.top}; </p>
            <p className='p2'> filter: </p>
              <p className='p3'> blur({this.props.keyframes.prct100.filter.blur}) </p>
              <p className='p3'> brightness({this.props.keyframes.prct100.filter.brightness}) </p>
              <p className='p3'> contrast({this.props.keyframes.prct100.filter.contrast}) </p>
              <p className='p3'> opacity({this.props.keyframes.prct100.filter.opacity}); </p>
            <p className='p2'> transform: </p>
              <p className='p3'> rotate({this.props.keyframes.prct100.transform.rotate}) </p>
              <p className='p3'> scale({this.props.keyframes.prct100.transform.scale}); </p>
          <p> {"}"} </p>
          {"}"}
        </div>
        )
      }
    }
  
  
  