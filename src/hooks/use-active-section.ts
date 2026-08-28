import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport.
 * Pass the ids of your scrollable sections (without the leading '#').
 * Returns the currently active id (or "" if none).
 */
export function useActiveSection(ids: string[], offset = 100): string {
  const [active, setActive] = useState("");
  const idsKey = ids.join(",");

  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + offset;

      // Sort sections by their real position in the document (accounts for
      // sections being out of navigation order), then pick the lowest one
      // whose top is above the scroll position.
      let current = "";
      let highestTop = -Infinity;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= pos && top > highestTop) {
          highestTop = top;
          current = id;
        }
      }

      // If near the very bottom, force the lowest section active
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      if (window.scrollY + winHeight >= docHeight - 4) {
        let lastTop = -Infinity;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top > lastTop) {
            lastTop = top;
            current = id;
          }
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idsKey, offset]);

  return active;
}
