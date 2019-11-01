import React, { Component } from 'react';
import ControlPanel from './ControlPanel';
import styled from 'styled-components'
import TestObject from '../components/TestObject'



export default class WorkBench extends Component {
	constructor() {
		super()
		this.state = {
			backgroundColor: "blue",
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