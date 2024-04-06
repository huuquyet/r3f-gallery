'use client'

import { Html } from '@react-three/drei'

export default function NotFound() {
  return (
    <Html>
      <div className="error">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
      </div>
    </Html>
  )
}
