import React from 'react'
import styled from 'styled-components'

const Ball = styled.div(props => ({
	width: "64px",
	height: "64px",
	borderRadius: "50%",
	margin: "0 auto",
	backgroundColor: "red"
}));


const Box = styled.div(props => ({
	width: '64px',
	height: '64px',
	margin: '0 auto',
	backgroundColor: props.color
}))

const Box2 = styled.div.attrs(props => ({
	color2: props.color
}))`
	width: 64px
	height: 64px
	margin: 0 auto
	background-color: ${props => props.color}
`

export default class TestObject extends React.Component{
	constructor(props) {
		super(props)
		
		this.state = {
			backgroundColor: this.props.backgroundColor,
		}
	}
	
	
	clickHandler = () => {
	}

	getColor = () => {
		return this.state.backgroundColor
	}

  render() {
		return(
			<div>
        <Box onClick={this.clickHandler} color={this.getColor()} ></Box>
        <Ball onClick={this.clickHandler} color={this.getColor()} ></Ball>
        <Box2 onClick={this.clickHandler} color={this.getColor()} ></Box2>
			</div>
    )
  }
}


