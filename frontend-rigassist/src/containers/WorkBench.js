import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import styled from 'styled-components'
import TestObject from '../components/TestObject'



export default class WorkBench extends Component {
	constructor() {
		super()
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
		this.state = {
			objectOrigin: {
				xAxis: "",
				yAxis: "",
				width: "",
				height: "",
				position: "",
				color: "",
			},
			animation: {
				name: "",
				duration: "",
				timingFunction: "",
				delay: "",
				iterationCount: "",
				direction: "",
				fillMode: "",
				playState: "",
			},
			keyFrames: {
				stage: "",
				xAxis: "",
				yAxis: "",
			},
			transform: {
				rotate: "",
				scale: "",
				translate: "",
				skew: "",
			},
			filter: {
				blur: "",
				brightness: "",
				contrast: "",
				greyscale: "",
				hueRotate: "",
				dropShadow: "",
				invert: "",
				opacity: "",
				saturate: "",
				sepia: "",
			}
		}
	}
		
		render() {
			return (
				<div>
				<TestObject backgroundColor={this.state.backgroundColor} />
				<ControlPanel/>
			</div>
		)
	}
}
