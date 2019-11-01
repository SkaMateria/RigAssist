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
	color: props.color
}))`
	width: 64px
	height: 64px
	margin: 0 auto
	background-color: ${props => props.color}
	animation: ${rotate} 2s linear infinite
`

export default class TestObject extends React.Component{
	constructor(props) {
		super(props)
		
		this.state = {
			color: this.props.backgroundColor,
			width: "64px",
			height: "64px",
			animationLength: "2s linear infinite",
		}
	}
	
	
	clickHandler = () => {
	}

  render() {
		return(
			<div>
        <Box onClick={this.clickHandler} color={this.state.color} ></Box>
			</div>
    )
  }
}


