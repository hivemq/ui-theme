/*
Copyright 2024-present HiveMQ GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { useEffect, useState } from 'react'

// A section becomes current once its top passes this fraction of the viewport height
const ACTIVATION_LINE = 0.3

/**
 * Returns the id of the section the reader is currently in: the last section whose top
 * has passed the activation line, or the last section once the page is scrolled to the end.
 */
export function useScrollSpy(ids: string[]): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(ids[0])
  const key = ids.join('|')

  useEffect(() => {
    const sectionIds = key.split('|')

    // Browsers fire scroll events at most once per frame, so no extra throttling is needed
    const update = () => {
      const scrolledToEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (scrolledToEnd && window.scrollY > 0) {
        setActiveId(sectionIds[sectionIds.length - 1])
        return
      }
      const line = window.innerHeight * ACTIVATION_LINE
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const rect = document.getElementById(id)?.getBoundingClientRect()
        // Elements without layout (height 0, e.g. in jsdom) can't be positioned, so they're skipped
        if (rect && rect.height > 0 && rect.top <= line) {
          current = id
        }
      }
      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [key])

  return activeId
}
