import { Suspense, useCallback } from "react";
import styled from "styled-components";

import { useLoadingResults } from "../hooks/useLoadingResults";
import { useInputValue } from "../hooks/useInputValue";
import { setUserInputStore } from "../stores/UserInputStore";


export const MainInput = () => (
  <Suspense fallback={<MainInputLoading />}>
    <MainInputLazy />
  </Suspense>
)

function MainInputLazy() {
  const loading = useLoadingResults();
  const value = useInputValue();
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUserInputStore(event.currentTarget.value);
    },
    []
  );
  return (
    <Input
      autoFocus
      name="main-input"
      disabled={loading}
      value={value || ''}
      onChange={handleChange}
    />
  );
}

const MainInputLoading = () => <Input disabled />

const Input = styled.input`
  background: rgba(255,255,255,0.75);
  border: none;
  font-size: 1.5rem;
  flex-grow: 1;
  padding: 0 20px;
`
