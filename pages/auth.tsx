import React, { useState } from 'react'

//Firebase
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {
  auth,
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
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

type EmailUser = {
  email?: string
  password?: string
}

function SignInScreen(): JSX.Element {
  const [emailSign, setEmailSign] = useState<EmailUser | undefined>(undefined)
  console.log(emailSign)

  const createAccount = async () => {
    await createUserWithEmailAndPassword(
      auth,
      emailSign?.email,
      emailSign?.password
    )
      .then((userCredential) => {
        const user = userCredential.user
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

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
            width: '350px',
            gap: '15px',
          }}
        >
          <TextField
            color="secondary"
            label="E-mail address"
            variant="outlined"
            type="email"
            onChange={(e) =>
              setEmailSign({ ...emailSign, email: e.target.value })
            }
          />
          <TextField
            color="secondary"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(e) =>
              setEmailSign({ ...emailSign, password: e.target.value })
            }
          />
          <Button variant="contained" size="large" onClick={createAccount}>
            Sign up
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SignInScreen
