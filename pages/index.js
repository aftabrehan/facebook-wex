import Head from 'next/head'
import { getServerSession } from 'next-auth/next'
import { authOptions } from './api/auth/[...nextauth]'

import Header from '../components/Header'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'


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

export async function getServerSideProps({ req, res }) {
  const session = await getServerSession(req, res, authOptions)
  return { props: { session, posts: [] } }
}
