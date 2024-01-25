import StoryCard from './StoryCard'

const stories = [
  { name: 'John Doe', src: '/story-1.jpg', profile: '/john-doe.png' },
  { name: 'Jane Smith', src: '/story-2.jpg', profile: '/jane-smith.png' },
  { name: 'Bob Johnson', src: '/story-3.jpg', profile: '/bob-johnson.png' },
  { name: 'Emily Davis', src: '/story-4.jpg', profile: '/emily-davis.png' },
  { name: 'Alex Thompson', src: '/story-5.jpg', profile: '/alex-thompson.png' },
]

const Stories = () => (
  <div className="flex justify-center sm:justify-between gap-x-4 sm:gap-x-2 mx-auto">
    {stories.map(story => (
      <StoryCard key={story.src} {...story} />
    ))}
  </div>
)

export default Stories
