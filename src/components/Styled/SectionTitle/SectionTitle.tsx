import React from 'react';
import styled from "styled-components";

const Title = styled.a`

      text-decoration: none;
      position: relative;
      display: inline-block;
      padding-bottom: 20px;


      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 4px;
        width: 100px;
        transition: .25s ease-in-out;
      }

      &:hover:after {
        width: 140px;
      }
    }


    //&.green {
    //  color: $green;
    //
    //  a {
    //    color: $green;
    //
    //    &:after {
    //      background-color: $green;
    //    }
    //  }
    //}
    //
    //&.yellow {
    //  color: $yellow;
    //
    //  a {
    //    color: $yellow;
    //
    //    &:after {
    //      background-color: $yellow;
    //    }
    //  }
    //}
`;


export 
