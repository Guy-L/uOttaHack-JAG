import React from 'react';
import ReactDOM from 'react-dom';
import styled, {keyframes} from 'styled-components'



const Container = styled.div`
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      position: relative;
`

const CircleAnimation = keyframes`
  from {
    transform: scale(.5, .5);
    opacity: .5;
  }
  to {
    transform: scale(2.5, 2.5);
    opacity: 0;
  }
`;

const Circle1 = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
  animation: ${CircleAnimation} 4s infinite cubic-bezier(.36, .11, .89, .32);
  animation-delay: -1s;
`
const Circle2 = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
  animation: ${CircleAnimation} 4s infinite cubic-bezier(.36, .11, .89, .32);
  animation-delay: -2s;
`
const Circle3 = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
  animation: ${CircleAnimation} 4s infinite cubic-bezier(.36, .11, .89, .32);
  animation-delay: -3s;
`

const Circle4 = styled.div`
  border-radius: 50%;
  background-color: red;
  width: 50px;
  height: 50px;
  position: absolute;
  opacity: 0;
  animation: ${CircleAnimation} 4s infinite cubic-bezier(.36, .11, .89, .32);
  animation-delay: -4s;
`
class PoundingCircle extends React.Component {

    render() {
        return (
            <Container>
                <Circle1></Circle1>
                <Circle2></Circle2>
                <Circle3> </Circle3>
                <Circle4> </Circle4>
            </Container>       
        );
    }
}

export default PoundingCircle;