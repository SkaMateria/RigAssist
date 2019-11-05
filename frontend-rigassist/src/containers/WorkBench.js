import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import PlayerRemote from '../components/workbench/PlayerRemote'
import Box from '../components/workbench/Box'

	/*//&___this.state DRAFT____
		 this.state = {
			 objectOrigin: {
				 xAxis: "50%",
				 yAxis: "50%",
				 width: "60px",
				 height: "60px",
				 position: "fixed",
				 color: "blue",
			 },
			 animation: {
				 name: "Whatever",
				 duration: "3s",
				 timingFunction: "ease-in-out",
				 delay: "0s",
				 iterationCount: "infinite",
				 direction: "alternate",
				 fillMode: "forwards",
				 playState: "running",
			 },
			 keyFrames: {
				 stage: "beginning",
				 xAxis: "0px",
				 yAxis: "0px",
			 },
			 transform: {
				 rotate: "360deg/1turn",
				 scale: "1.0, 1.0",
				 translate: "0px, 0px",
				 skew: "10deg, 20deg",
			 },
			 filter: {
				 blur: "1px",
				 brightness: "0.0-infinite",
				 contrast: "0%-infinite",
				 greyscale: "0%-infinite",
				 hueRotate: "0deg-360deg",
				 dropShadow: "horizpx vertpx blurpx spreadpx color",
				 invert: "0-100%",
				 opacity: "0-100%",
				 saturate: "0-infinite%",
				 sepia: "0-100%",
			 }
		 }
	*/	
export default class WorkBench extends Component {
	constructor() {
		super()
		this.state = {
			objectOrigin: {
				left: "50%",
				top: "50%",
				width: "60px",
				height: "60px",
				position: "fixed",
				color: "red",
			},
			/*//& --NOTE(animation)--
				UrlRef = https://www.w3schools.com/cssref/css3_pr_animation.asp
				//* if the word has @ in front of it, it should read out "animation-" i.e. @duration = animation-duration
				//: animation: name | @duration | @timing-function | @delay | @iteration-count | @direction | @fill-mode | @play-state
				//! cubic-bezier: 0.0-1.0
				//? duration: in seconds || timing-function: ease/linear/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)
				//? dealy: in seconds (can be negative) ||  iteration-count: 0 - infinite  ||  
				//? direction: normal/reverse/alternate/alternate-reverse
				//: fill-mode: none/forwards/backwards/both
				//: play-state: paused/running/initial/inherit
			*/
			animation: {
				name: "",
				duration: "2s",
				timingFunction: "ease-in-out",
				delay: "0s",
				iterationCount: "infinite",
				direction: "alternate",
				fillMode: "forwards",
				playState: "running",
			},
			keyframes: {
				stage: "0",
				xAxis: "0",
				yAxis: "0",
			},
			transform: {
				rotate: "360deg",
				scale: "1.0",
				translate: "0deg, 0deg",
				skew: "0deg, 0deg",
			},
			filter: {
				blur: "0px",
				brightness: "0.0",
				contrast: "0%",
				greyscale: "0%",
				hueRotate: "0deg",
				dropShadow: "0px 0px 0px black",
				invert: "0%",
				opacity: "0%",
				saturate: "0%",
				sepia: "0%",
			}
		}
	}

	handlePlay = () => {
		this.setState({
			animation: {...this.state.animation, playState: "running" }
		})
	}
	handlePause = () => {
		this.setState({
			animation: {...this.state.animation, playState: "paused" }
		})
	}

		render() {
			return (
				<div>
					<Box 
						object={this.state.objectOrigin}
						animation={this.state.animation}
						keyframes={this.state.keyframes}
						transform={this.state.transform}
						filter={this.state.filter}
					/>
					<ControlPanel/>
					<PlayerRemote animation={this.state.animation} handlePause={this.handlePause} handlePlay={this.handlePlay} />
			</div>
		)
	}
}