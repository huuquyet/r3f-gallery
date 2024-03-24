'use client'

import { Html } from '@react-three/drei'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Html>
      <div className="error">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </Html>
  )
}
