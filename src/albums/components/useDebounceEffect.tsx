import { useEffect } from "react";

export function useDebounceEffect(
  callback: () => void,
  deps: readonly unknown[],
  timeout = 500
) {
  useEffect(() => {
    // Constructor
    const handler = setTimeout(callback, timeout);

    // Destructor
    return () => clearTimeout(handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
