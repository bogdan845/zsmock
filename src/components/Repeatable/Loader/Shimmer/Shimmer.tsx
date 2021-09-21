import React from "react";
import styled from "styled-components"


const Layout = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #eee, #ccc, #eee, #ccc), 0, 0;
  background-size: 400% 400%;
  animation: gradient 1s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%
  }
  100% {
    background-position: 0 50%;
  }
`

export function Shimmer() {
    return (
        <Layout/>
    )
}