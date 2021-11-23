import React from 'react'

//Firebase
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {
  auth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from '../firebase/clientApp'

//Mui
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const uiConfig = {
  signInSuccessUrl: '/',
  signInOptions: [
    GithubAuthProvider.PROVIDER_ID,
    GoogleAuthProvider.PROVIDER_ID,
  ],
}

function SignInScreen(): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" component="h3">
          Welcome !
        </Typography>
        <Typography>Please register to gain access to the project.</Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            marginTop: '1rem',
          }}
        >
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
        </Box>
        <Typography
          sx={{
            margin: '1rem',
          }}
        >
          Or
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <TextField label="First-Name" variant="outlined" />
            <TextField label="Last-Name" variant="outlined" />
          </Box>
          <TextField label="E-mail address" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <Button variant="contained" size="large">
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SignInScreen
