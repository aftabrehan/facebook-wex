import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed({ posts }) {
  return (
    <div className="flex flex-grow h-[calc(100vh-72px)] pt-6 sm:mr-4 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export default Feed
