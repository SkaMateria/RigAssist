import React, {Component} from 'react'
import '../../styles/ExportSettings.css'

export default class ExportSettings extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  
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
          <p> {this.props.keyframes.prct25.prct} {"{"}</p>
            <p className='p2'> left: {this.props.keyframes.prct25.left}; </p>
            <p className='p2'> top: {this.props.keyframes.prct25.top}; </p>
            <p className='p2'> filter: </p>
              <p className='p3'> blur({this.props.keyframes.prct25.filter.blur}) </p>
              <p className='p3'> brightness({this.props.keyframes.prct25.filter.brightness}) </p>
              <p className='p3'> contrast({this.props.keyframes.prct25.filter.contrast}) </p>
              <p className='p3'> opacity({this.props.keyframes.prct25.filter.opacity}); </p>
            <p className='p2'> transform: </p>
              <p className='p3'> rotate({this.props.keyframes.prct25.transform.rotate}) </p>
              <p className='p3'> scale({this.props.keyframes.prct25.transform.scale}); </p>
          <p> {"}"} </p>
          <br/>
          <p> {this.props.keyframes.prct50.prct} {"{"}</p>
            <p className='p2'> left: {this.props.keyframes.prct50.left}; </p>
            <p className='p2'> top: {this.props.keyframes.prct50.top}; </p>
            <p className='p2'> filter: </p>
              <p className='p3'> blur({this.props.keyframes.prct50.filter.blur}) </p>
              <p className='p3'> brightness({this.props.keyframes.prct50.filter.brightness}) </p>
              <p className='p3'> contrast({this.props.keyframes.prct50.filter.contrast}) </p>
              <p className='p3'> opacity({this.props.keyframes.prct50.filter.opacity}); </p>
            <p className='p2'> transform: </p>
              <p className='p3'> rotate({this.props.keyframes.prct50.transform.rotate}) </p>
              <p className='p3'> scale({this.props.keyframes.prct50.transform.scale}); </p>
          <p> {"}"} </p>
          <br/>
          <p> {this.props.keyframes.prct75.prct} {"{"}</p>
            <p className='p2'> left: {this.props.keyframes.prct75.left}; </p>
            <p className='p2'> top: {this.props.keyframes.prct75.top}; </p>
            <p className='p2'> filter: </p>
              <p className='p3'> blur({this.props.keyframes.prct75.filter.blur}) </p>
              <p className='p3'> brightness({this.props.keyframes.prct75.filter.brightness}) </p>
              <p className='p3'> contrast({this.props.keyframes.prct75.filter.contrast}) </p>
              <p className='p3'> opacity({this.props.keyframes.prct75.filter.opacity}); </p>
            <p className='p2'> transform: </p>
              <p className='p3'> rotate({this.props.keyframes.prct75.transform.rotate}) </p>
              <p className='p3'> scale({this.props.keyframes.prct75.transform.scale}); </p>
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
  
  
  