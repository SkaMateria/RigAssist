import React, { Component } from 'react'
import AnimationSlider from '../components/workbench/Slider'
import '../styles/ControlPanel.css'
import '../styles/PlayerRemote.css'


export class ControlPanel extends Component {
	constructor(){
		super()
		this.state = {
			animationStage: 0,
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

	opacitySlide(){
		return "opacity"
	}

	changeAnimationStage = () => {
		this.state.animationStage === 100 ? 
			this.setState({
				animationStage: 0
			})
			:
			this.setState({
				animationStage: 100
			})
	}

	render() {
		return (
			<div>
			<div className='divGrid' > 
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.leftSlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>X Axis</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.topSlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>Y Axis</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.scaleSlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>Scale</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.rotateSlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>Rotation</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.blurSlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>Blur</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.opacitySlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>Opacity</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.brightnessSlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>Brightness</div>
				<div><AnimationSlider animationStage={this.state.animationStage} setting={this.contrastSlide} sliderHandle0={this.props.handleSlider0} sliderHandle100={this.props.handleSlider100}/>Contrast</div>
			</div>
			<button onClick={this.changeAnimationStage} >Animation Stage {this.state.animationStage}%</button>
			</div>
		)
	}
}

export default ControlPanel     