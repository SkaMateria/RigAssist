import React from 'react'
import styled, {keyframes} from 'styled-components'

/*//&---NOTE(Matrix Property)----
	//: for transform: matrix combines scaleX, skewY, skewX, scaleY, translateX, translateY
	//? matrix(1, -0.3, 0, 1, 0, 0)	 
	*/
const rotate = keyframes`
	0% {
		transform:
			rotate(0turn) scale(0.2, .2) translate(0px, 0px) scaleX(0.2) skew(0deg, 0deg);
		left:
			0%;
		top:
			0%;
		filter:
			blur(10px) contrast(0%);
		visibility:
			visible;
	}

	50% {
		visibility:
			collapse;
	}

	100% {
		transform: 
			rotate(360deg) scale(2.0, 2.0) translate(0px, 0px) scaleX(2.0) scaleY(3.0) skew(50deg, 100deg);
		left:
			50%;
		top:
			50%;
		filter:
			blur(0px) contrast(100%);
	}

`
/*//& --NOTE(Properties)
	//! all of these will be followed by a :
	//: opacity: 0.0-1.0 
	//: filter: blur:px || brightness:0.0-inf || contrast:0%-inf || greyscale:0%-100% || hue-rotate:0deg-359deg || 
	//: filter: drop-shadow(infpx infpx infpx color) || invert: 0-100% || opacity: 0-100% || saturate:0-inf% || sepia:0-100%
	//? object-position can be %, px, or right, left top bottom center
	*/

const Box = styled.div.attrs(props => ({
	color: props.state.color,
	animationLength: props.state.animationLength,
	animationPlayState: props.state.animationPlayState
}))`
	width: 60px
	height: 60px
	position: fixed
	left: 50%
	top: 50%
	margin: 0 auto
	animation: ${rotate} ${props => props.animationLength} ${props => props.animationPlayState}
	background-color: ${props => props.color}
`
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



			export default class TestObject extends React.Component{
	constructor(props) {
		super(props)
		
		this.state = {
			color: this.props.backgroundColor,
			width: "64px",
			height: "64px",
			animationLength: "2s ease-in-out infinite normal",
		}
	}
	
	buttonClick = () => {
			this.state.animationPlayState === "running" ? this.pauseClick() : this.playClick()
	}

	pauseClick(){
		this.setState({
			animationPlayState: "paused"
		})
	}

	playClick(){
		this.setState({
			animationPlayState: "running"
		})
	}

  render() {
		return(
			<div>
        <Box onClick={this.buttonClick} state={this.state} ></Box>
			</div>
    )
  }
}