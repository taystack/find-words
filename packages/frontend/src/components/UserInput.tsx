import styled from "styled-components";

import { SubmitButton } from "./SubmitButton";
import { MainInput } from "./MainInput";
import { useWordSoup } from "../hooks/useWordSoup";
import { useUserInputStore } from "../stores/UserInputStore";


export function UserInput() {
  const { get } = useWordSoup();
  const { value } = useUserInputStore();
  return (
    <Wrapper onSubmit={(event) => {
      event.preventDefault();
      get(value || '');
    }}>
      <MainInput />
      <SubmitButton />
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-self: stretch;

  & > input, & > button {
    border-radius: 5px;
  }
`
