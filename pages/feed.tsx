import React from 'react'
import PostInput from '../components/postInput'
import Post from '../components/post'

//Mui
import { Typography } from '@mui/material'
import { Box } from '@mui/system'

//Context
import { useUserContext } from '../contexts/UserContext'

import {
  getFirestore,
  collection,
  collectionGroup,
  getDocs,
} from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firebaseApp } from '../firebase/clientApp'
import { db } from '../firebase/clientApp'

import { v4 as uuidv4 } from 'uuid'

export default function Feed() {
  const { user } = useUserContext()
  const [posts, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), 'Posts'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  )

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 3,
        marginTop: 9,
      }}
    >
      <PostInput />
      {posts?.docs.map((post) => (
        <Post
          key={uuidv4()}
          name={post.data().User}
          message={post.data().Message}
          avatar={post.data().Avatar}
          likes={post.data().Likes}
        />
      ))}
    </Box>
  )
}
