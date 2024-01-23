import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed({ posts }) {
  return (
    <div className="flex flex-grow h-screen pd-44 pt-6 mr-4 xl:mr-10 overflow-y-auto scrollbar-hide">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export default Feed
