import Head from 'next/head'
import { getSession } from 'next-auth/react'

import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

import { db } from '../firebase'

const Home = ({ session, posts }) => (
  <div>
    <Head>
      <title>Facebook Clone</title>
    </Head>

    {session ? (
      <div className="bg-gray-100">
        <Header />
        <main className="flex">
          <Sidebar />
          <Feed posts={posts} />
          <Widgets />
        </main>
      </div>
    ) : (
      <Login />
    )}
  </div>
)

export default Home

export async function getServerSideProps(context) {
  const session = await getSession(context)
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get()

  const docs = posts?.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }))

  return { props: { session, posts: docs } }
}
