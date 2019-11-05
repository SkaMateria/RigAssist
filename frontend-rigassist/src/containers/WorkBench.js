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
				xAxis: "0",
				yAxis: "0",
				width: "0",
				height: "0",
				position: "0",
				color: "0",
			},
			animation: {
				name: "customAnimation",
				duration: "0",
				timingFunction: "0",
				delay: "0",
				iterationCount: "0",
				direction: "0",
				fillMode: "0",
				playState: "running",
			},
			keyFrames: {
				stage: "0",
				xAxis: "0",
				yAxis: "0",
			},
			transform: {
				rotate: "0",
				scale: "0",
				translate: "0",
				skew: "0",
			},
			filter: {
				blur: "0",
				brightness: "0",
				contrast: "0",
				greyscale: "0",
				hueRotate: "0",
				dropShadow: "0",
				invert: "0",
				opacity: "0",
				saturate: "0",
				sepia: "0",
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
					<Box state={this.state} />
					<ControlPanel/>
					<PlayerRemote animation={this.state.animation} handlePause={this.handlePause} handlePlay={this.handlePlay} />
			</div>
		)
	}
}