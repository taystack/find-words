import styled from "styled-components";

type NumberValue = number | string;

export const NumberTag = ({ value }: { value: NumberValue }) =>
  <NTag>{value}</NTag>

export const NTag = styled.pre`
  font-size: 1rem;
  display: inline;
`;