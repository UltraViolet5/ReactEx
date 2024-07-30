import { useRef, useEffect } from "react";

/**
 * Auto Focus on deps changes + manual focus()
 * @param deps Watch deps for focus
 * 
 * Example Use:
 * ```ts
  const { ref: playlistNameRef, focus } = useFocus([playlist.id]);
 * ```
 */
export function useFocus(deps: React.DependencyList = []) {
    const ref = useRef<HTMLInputElement | null>(null);
    const focus = () => ref.current?.focus();
    useEffect(focus, deps);

    return { ref, focus };
}