import React, { Component } from 'react'
import AnimationSlider from '../components/workbench/Slider'
import '../styles/ControlPanel.css'


export class ControlPanel extends Component {
	constructor(){
		super()
		this.state = {
			
		}
	}
	
	leftSlide(){
		return "left"
	}

	topSlide(){
		return "top"
	}

	rotateSlide(){
		return "rotate"
	}

	scaleSlide(){
		return "scale"
	}

	blurSlide(){
		return "blur"
	}

	brightnessSlide(){
		return "brightness"
	}

	contrastSlide(){
		return "contrast"
	}

	
	render() {
		return (
			<div className='divGrid' >
				<div><AnimationSlider setting={this.leftSlide} sliderHandle={this.props.handleSlider}></AnimationSlider>X Axis</div>
				<div><AnimationSlider setting={this.topSlide} sliderHandle={this.props.handleSlider}></AnimationSlider>Y Axis</div>
				<div><AnimationSlider setting={this.rotateSlide} sliderHandle={this.props.handleSlider}></AnimationSlider>Rotation</div>
				<div><AnimationSlider setting={this.blurSlide} sliderHandle={this.props.handleSlider} ></AnimationSlider>Blur</div>
				<div><AnimationSlider setting={this.brightnessSlide} sliderHandle={this.props.handleSlider} ></AnimationSlider>Brightness</div>
				<div><AnimationSlider setting={this.contrastSlide} sliderHandle={this.props.handleSlider} ></AnimationSlider>Contrast</div>
			</div>
		)
	}
}

export default ControlPanel     