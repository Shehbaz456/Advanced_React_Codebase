import { createFileRoute } from '@tanstack/react-router'
import App from "../App.jsx"
export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><App/></div>
}
