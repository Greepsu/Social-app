// Import the useAuthStateHook
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/clientApp'

export default function Home(): JSX.Element {
  const [user, loading, error] = useAuthState(auth)
  console.log('Loading:', loading, '|', 'Current user:', user)

  return <div>Hello!</div>
}
