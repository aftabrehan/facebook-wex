import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

const Feed = ({ posts }) => (
  <div className="flex flex-grow h-[calc(100vh-72px)] pt-6 px-2 sm:px-4 sm:mr-4 overflow-y-auto scrollbar-hide">
    <div className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-2xl">
      <Stories />
      <InputBox />
      <Posts posts={posts} />
    </div>
  </div>
)

export default Feed
