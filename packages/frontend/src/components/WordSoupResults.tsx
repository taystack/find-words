import styled from "styled-components";
import { useWordSoup } from "../hooks/useWordSoup"
import { Suspense } from "react";
import { Layout } from "./Layout";
import { Summary } from "./Summary";

export const WordSoupResults = () => (
  <Suspense fallback={<WordSoupLoading />}>
    <WordSoupResultsLazy />
  </Suspense>
)

export function WordSoupResultsLazy() {
  const { value } = useWordSoup();
  if (!value?.total) return <WordSoupEmpty />
  return (
    <Layout>
        <details>
          <Summary />
          <ul>
            {value.foundMatches.map((word) => <Word key={word}>{word}</Word>)}
          </ul>
        </details>
    </Layout>
  )
}

const WordSoupEmpty = () => <Layout>No results</Layout>
const WordSoupLoading = () => <Layout>Loading…</Layout>

const Word = styled.li`
  font-family: monospace;
`