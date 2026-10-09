import { useEffect, useState } from 'react'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import Post from './Post'
import { getFirebase } from '../firebase'

const Posts = ({ posts = [] }) => {
  const [realtimePosts, setRealtimePosts] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    try {
      const { db } = getFirebase()
      return onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        snapshot => {
          setRealtimePosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))
          setError('')
        },
        () => setError('Posts could not be loaded. Please try again later.'))
    } catch {
      queueMicrotask(() => setError('Posts are currently unavailable.'))
    }
  }, [])

  const postsToRender = realtimePosts ?? posts
  return (
    <div className="pb-12">
      {error && <p role="alert" className="mt-5 rounded-lg bg-white p-4 text-red-700">{error}</p>}
      {realtimePosts && !postsToRender.length && <p className="mt-5 text-gray-500">No posts yet.</p>}
      {postsToRender.map(post => <Post key={post.id} {...post} />)}
    </div>
  )
}

export default Posts
