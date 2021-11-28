import React from 'react'
import PostInput from '../components/PostInput'
import { default as PostComponent } from '../components/Post'

//Mui
import { Box } from '@mui/system'

//Context
import { getFirestore, collection } from 'firebase/firestore'
import { useCollection } from 'react-firebase-hooks/firestore'
import { firebaseApp } from '../firebase/clientApp'

import { v4 as uuidv4 } from 'uuid'
import { Post } from '../types/post'

export default function Feed() {
  const [posts, loading, error] = useCollection<Post>(
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
      {posts?.docs.map((postData) => {
        const post = postData.data()
        return <PostComponent key={uuidv4()} post={post} />
      })}
    </Box>
  )
}
