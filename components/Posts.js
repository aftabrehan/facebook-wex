import { useEffect, useState } from 'react'

import Post from './Post'

import { db } from '../firebase'

const Posts = ({ posts }) => {
  const [realtimePosts, setRealtimePosts] = useState(null)

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setRealtimePosts(snapshot.docs.map(doc => doc.data()))
      )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const postsToRender = realtimePosts || posts

  return (
    <div className="pb-12">
      {postsToRender.map((post, i) => (
        <Post key={i} {...post} />
      ))}
    </div>
  )
}

export default Posts
