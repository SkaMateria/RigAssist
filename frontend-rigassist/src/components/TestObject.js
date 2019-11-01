import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
	width: 64px;
	height: 64px;
	margin: 0 auto;
	background-color: red;
`;

const Ball = styled.div`
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
        <Box></Box>
        <Ball></Ball>
      </div>
    )
  }
}
