import { createRoutesFromElements, Route } from 'react-router-dom'
import { Projects } from './components/pages/Projects'
import { Contact } from './components/pages/Contact'
import App from './components/pages/App'
import { Admin } from './components/pages/Admin'
import { ProjectPage } from './components/pages/ProjectPage'
import { AuthenticationGuard } from './components/authentication/AuthenticationGuard'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Projects />} />
    <Route path="/:id" element={<ProjectPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/admin" element={<AuthenticationGuard component={Admin} />} />
  </Route>,
)
