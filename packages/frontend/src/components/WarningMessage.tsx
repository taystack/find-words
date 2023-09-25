import { useIsInputValueValid } from "../hooks/useIsInputValueValid";

export function WarningMessage() {
  const [isValid, isTooMuch] = useIsInputValueValid();
  if (isTooMuch) return <>This will never return in our lifetime.</>;
  if (!isValid) return <>Be careful, there is only so much memory.</>;
  return null;
}