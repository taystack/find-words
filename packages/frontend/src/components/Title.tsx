import React from 'react';
import styled from 'styled-components';
import { Mono } from './Mono';

export function Title() {
  return (
    <div className="App">
      <Header>Word Soup</Header>
      <Instructions>Type in a word and hit <Mono>Enter</Mono>.</Instructions>
    </div>
  );
}

const Header = styled.h1`
  font-family: monospace;
  text-align: center;
`
const Instructions = styled.p`
  text-align: center;
`
