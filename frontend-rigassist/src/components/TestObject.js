import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`

const Box = styled.div.attrs(props => ({
	color: props.state.color,
	animationLength: props.state.animationLength,
}))`
	width: 64px
	height: 64px
	margin: 0 auto
	background-color: ${props => props.color}
	animation: ${rotate} ${props => props.animationLength}
`
		/*//& --NOTE--
			UrlRef = https://www.w3schools.com/cssref/css3_pr_animation.asp
			//! animation: name | duration | timing-function | delay | iteration-count | direction | fill-mode | play-state
			*/


export default class TestObject extends React.Component{
	constructor(props) {
		super(props)
		
		this.state = {
			color: this.props.backgroundColor,
			width: "64px",
			height: "64px",
			animationLength: "2s linear 10 reverse",
		}
	}
	
	
	clickHandler = () => {
	}

  render() {
		return(
			<div>
        <Box onClick={this.clickHandler} state={this.state} ></Box>
			</div>
    )
  }
}


