import { Suspense } from "react";
import { useWordSoup } from "../hooks/useWordSoup";
import { NumberTag } from "./Number";

export const Summary = () => (
  <summary>
    <Suspense fallback={<LoadingSummary />}>
      <SummaryLazy />
    </Suspense>
  </summary>
)

export function SummaryLazy() {
  return (
    <>
      <WordSoupCount />
      <WordPerformance />
    </>
  );
}

const WordSoupCount = () => {
  const { value } = useWordSoup();
  return value && value.total > 0
    ? <><NumberTag value={value.total} /> words found</>
    : <>Type a word and hit Enter</>
}

const LoadingSummary = () => <>Loading…</>;

const WordPerformance = () => {
  const { value } = useWordSoup();
  const perf = value?.duration || 0;
  return (
    <>{perf ? <>{' in '}<NumberTag value={`${perf.toFixed(2)}ms`} /></> : ''}</>
  )
};
