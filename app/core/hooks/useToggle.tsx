import { useCallback, useState } from "react";

export function useToggle(initialState: boolean = false) {
  const [state, setState] = useState(initialState);

  const toggle = useCallback((nextState?: boolean) => {
    setState(prevState => nextState ?? !prevState);
  }, [setState])

  return [state, toggle] as const;
}