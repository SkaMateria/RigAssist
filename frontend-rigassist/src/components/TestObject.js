import React from 'react'
import styled from 'styled-components'

const Ball1 = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	margin: 0 auto;
	background-color: red;
`;

const Ball2 = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	margin: 0 auto;
	background-color: red;
`;

export default class TestObject extends React.Component{

  render() {
    return(
      <div>
        <Ball1></Ball1>
        <Ball2></Ball2>
      </div>
    )
  }
}
