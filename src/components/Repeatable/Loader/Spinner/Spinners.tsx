import React from "react";
import styled from "styled-components"


const Wrapper = styled.div`
  position: relative;
  height: 100px;
  padding: 20px 0;
`;

const Element = styled.div`
  top: 20px;
  left: calc(50% - 30px);
  width: 60px;
  height: 60px;
  position: absolute;
  border-radius: 100%;
  border-left: 7px solid var(--green);
  border-bottom: 7px solid var(--green);
  border-right: 7px solid transparent;
  border-top: 7px solid transparent;
  animation: rotator 1s linear infinite;
  transform: rotate(360deg);

  @keyframes rotator {
    0% {
      transform: rotate(0deg)
    }
    100% {
      transform: roatate(360deg)
    }
  }
`

export function Spinners() {
    return (
        <Wrapper>
            <Element/>
        </Wrapper>
    )
}