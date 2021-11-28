import React, { useState, PropsWithChildren } from 'react'
import { Avatar, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

type PostProps = {
  name?: string
  message?: string
  avatar?: string
  likes?: number
}

//! Gérer les props dans un state ? genre [post, setPost] = useState(name: aaa, message...)
export default function Post({ name, message, avatar, likes }: PostProps) {
  const [clicked, setClicked] = useState(false)
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'primary.main',
        width: '60%',
        marginTop: 6,
        padding: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ width: 48, height: 48, marginRight: 3 }}
          alt={name}
          src={avatar}
        />
        <Typography variant="h6">{name}</Typography>
      </Box>
      <Typography
        sx={{
          my: 2,
        }}
        variant="body1"
      >
        {message}
      </Typography>
      <Box>
        <IconButton onClick={() => setClicked(!clicked)} size="small">
          {clicked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        <Typography variant="caption"> {likes}</Typography>
      </Box>
    </Box>
  )
}
