import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import theme from '../utils/theme'
import '../utils/firebaseui-styling.global.css'

//Context
import { UserContextProvider } from '../contexts/UserContext'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserContextProvider user={null}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContextProvider>
  )
}

export default MyApp
