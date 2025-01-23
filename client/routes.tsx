import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { Projects } from './components/pages/Projects'
import { Contact } from './components/pages/Contact'
import App from './components/pages/App'
import { About } from './components/pages/About'
import { Admin } from './components/pages/Admin'
import { ProjectPage } from './components/pages/ProjectPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Projects />} />
      <Route path="/:id" element={<ProjectPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
    </Route>,
  ),
)
