import { Suspense, useCallback } from "react";
import styled from "styled-components";

import { useLoadingResults } from "../hooks/useLoadingResults";

export const SubmitButton = () => (
  <Suspense fallback={<SubmitButtonLoading />}>
    <SubmitButtonLazy />
  </Suspense>
)

function SubmitButtonLazy() {
  const loading = useLoadingResults();
  const handleClick = useCallback(() => {}, []);
  return (
    <Button type="submit" disabled={loading} onClick={handleClick}>
      {loading ? 'Loading' : 'Find words'}
    </Button>
  );
}

const SubmitButtonLoading = () => <Button disabled>Loading…</Button>

const Button = styled.button`
  border: none;
  padding: 20px 30px;
  background: #97e697;
  font-size: 1rem;
`