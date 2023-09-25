import { Title } from './components/Title';
import { UserInput } from './components/UserInput';

import styled from 'styled-components';
import { WordSoupResults } from './components/WordSoupResults';
import { WarningMessage } from './components/WarningMessage';

export function App() {
  return (
    <Wrapper>
      <Title />
      <UserInput />
      <WarningMessage />
      <WordSoupResults />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

