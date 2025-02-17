import { withAuthenticationRequired } from '@auth0/auth0-react'
import { PageLoader } from './PageLoader'

interface Props {
  component: React.ComponentType
}

export function AuthenticationGuard({ component }: Props) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <PageLoader />,
  })

  return <Component />
}
