import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'

import Contact from '../components/Contact'

const contacts = [
  { src: '/jane-smith.png', name: 'Jane Smith' },
  { src: '/bob-johnson.png', name: 'Bob Johnson' },
  { src: '/emily-davis.png', name: 'Emily Davis' },
  { src: '/alex-thompson.png', name: 'Alex Thompson' },
  { src: '/karl-will.png', name: 'Karl Will' },
  { src: '/anna-warren.png', name: 'Anna Warren' },
  { src: '/berry-allen.png', name: 'Berry Allen' },
]

function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 pr-5 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl"> Contacts </h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="mr-2 h-6" />
          <SearchIcon className=" mr-2 h-6" />
          <DotsHorizontalIcon className="mr-2 h-6" />
        </div>
      </div>
      {contacts.map(contact => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  )
}

export default Widgets
