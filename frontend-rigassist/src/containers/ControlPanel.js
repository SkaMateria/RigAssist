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
				<AnimationSlider setting={this.leftSlide} sliderHandle={this.props.handleSlider} />
				<AnimationSlider setting={this.topSlide} sliderHandle={this.props.handleSlider} />
				<AnimationSlider setting={this.rotateSlide} sliderHandle={this.props.handleSlider} />
				<AnimationSlider setting={this.blurSlide} sliderHandle={this.props.handleSlider} />
				<AnimationSlider setting={this.brightnessSlide} sliderHandle={this.props.handleSlider} />
				<AnimationSlider setting={this.contrastSlide} sliderHandle={this.props.handleSlider} />
			</div>
		)
	}
}

export default ControlPanel     