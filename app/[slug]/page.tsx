'use client'

import dynamic from 'next/dynamic'
import { Route, Switch, useLocation } from 'wouter'

export default function Page() {
  const [path] = useLocation()
  const slug = path.slice(1, path.length)
  const Component = dynamic(() => import(`@/components/${slug}`), { ssr: false })

  return (
    <Switch>
      <Route path={path}>
        <Component />
      </Route>
    </Switch>
  )
}
