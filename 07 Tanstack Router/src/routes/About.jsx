import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/About')({
  component: RouteComponent, defaultPreload: "Intent",
})

function RouteComponent() {
  return <div><h1>About Section</h1></div>
}
