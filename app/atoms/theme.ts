import { WritableAtom, atom } from 'jotai'

export type mode = 'dark' | 'light' | 'system'

export function themeWithToggle(initialValue?: mode): WritableAtom<mode, mode | undefined> {
  const themeAtom = atom(initialValue, (get, set) => {
    set(themeAtom, (x) => (x === 'dark' ? 'light' : x === 'light' ? 'system' : 'dark'))
  })
}
