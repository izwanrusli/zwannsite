import { useState, useEffect } from 'react';

/**
 * useScrollSpy — tracks which section is currently in the viewport.
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {number} offset - Top offset in px for intersection threshold
 * @returns {string} activeId - ID of the currently visible section
 */
function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
}

export default useScrollSpy;
