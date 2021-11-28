import React, { useState } from 'react'

//Context
import { useUserContext } from '../contexts/UserContext'

//Mui
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import { InputBase, TextField, Button } from '@mui/material'

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebase/clientApp'

export default function PostInput() {
  const [value, setValue] = useState('')
  const { user } = useUserContext()

  const sendPost = async () => {
    try {
      const docRef = await addDoc(collection(db, 'Posts'), {
        User: user?.displayName,
        Message: value,
        Avatar: user?.photoURL,
        Likes: 0,
      })
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
    setValue('')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'primary.main',
        width: '60%',
        padding: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        <Avatar
          sx={{ width: 48, height: 48, marginRight: 3 }}
          alt={user?.displayName || ''}
          src={user?.photoURL || ''}
        />
        <TextField
          inputProps={{ style: { fontSize: 20 } }}
          multiline
          label="What's on your mind?"
          variant="standard"
          fullWidth
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        size="large"
        color="primary"
        sx={{
          display: 'flex',
          alignSelf: 'flex-end',
          width: 100,
          marginTop: 3,
        }}
        onClick={() => sendPost()}
      >
        Post !
      </Button>
    </Box>
  )
}
