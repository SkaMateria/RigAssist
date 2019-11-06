import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import PlayerRemote from '../components/workbench/PlayerRemote'
import Box from '../components/workbench/Box'
import { handleStateChange, handlePlay, handlePause, handleLoop, loopInfinite, outOfInfinite } from '../functions/clickHandlers'

export default class WorkBench extends Component {
	constructor() {
		super()
		this.state = {
			stateChange: true,
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
				name: "customAnimation",
				duration: "2s",
				timingFunction: "ease-in-out",
				delay: "0s",
				iterationCount: "infinite",
				direction: "alternate",
				fillMode: "forwards",
				playState: "running",
			},
			keyframes: {
				stage: {
					beginning: "0%",
					middle: "50%",
					end: "100%"
				},
				xAxis: "0",
				yAxis: "0",
			},
			transform: {
				rotate: "110deg",
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

	// handleStateChange = () => {
  //   this.setState({
  //     stateChange: !this.state.stateChange
	// 	})
  // }

	// handlePlay = () => {
	// 	this.setState({
	// 		animation: {...this.state.animation, playState: "running" }
	// 	})
	// }

	// handlePause = () => {
	// 	this.setState({
	// 		animation: {...this.state.animation, playState: "paused" }
	// 	})
	// }
	
	// handleLoop = () => {
	// 	if (this.state.animation.iterationCount === "5"){
	// 		this.loopInfinite();
	// 	} 
	// 	else if (this.state.animation.iterationCount === "infinite") {
	// 		this.outOfInfinite();
	// 	} else {
	// 		let newCount = parseInt(this.state.animation.iterationCount) + 1
	// 		this.setState(() => ({
	// 			animation: {
	// 				...this.state.animation,
	// 				iterationCount: newCount.toString()
	// 			}
	// 		}))
	// 		let boxElm = document.querySelector("#root > div > div:nth-child(3) > div.sc-bdVaJa.cSERZV")
			
	// 	}
	// }

	// loopInfinite = () => {
	// 	this.setState({
	// 		animation: {...this.state.animation, iterationCount: "infinite"}
	// 	})
	// }

	// outOfInfinite = () => {
	// 	this.setState({
	// 		animation: {...this.state.animation, iterationCount: "1"}
	// 	})
	// }

		render() {
			return (
				<div>
					<Box 
						key={this.state.stateChange}
						object={this.state.objectOrigin}
						animation={this.state.animation}
						keyframes={this.state.keyframes}
						transform={this.state.transform}
						filter={this.state.filter}
					/>
					<ControlPanel/>
					<PlayerRemote 
						// handleStateChange={this.handleStateChange}
						handleStateChange={handleStateChange}
						animation={this.state.animation} 
						// handlePause={this.handlePause} 
						handlePause={handlePause} 
						// handlePlay={this.handlePlay} 
						handlePlay={handlePlay} 
						// handleLoop={this.handleLoop}
						handleLoop={handleLoop}
					/>
			</div>
		)
	}
}