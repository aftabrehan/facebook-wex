import { SearchIcon } from '@heroicons/react/outline'
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid'

import Contact from '../components/Contact'

const contacts = [
  {
    src: 'https://images.unsplash.com/photo-1627664058792-a1258a7f1c8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80',
    name: 'Woman',
  },
  {
    src: 'https://images.unsplash.com/photo-1627664057310-67ca6b8f27e0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'AHlana',
  },
  {
    src: 'https://media.istockphoto.com/photos/learn-to-love-yourself-first-picture-id1291208214?b=1&k=20&m=1291208214&s=170667a&w=0&h=sAq9SonSuefj3d4WKy4KzJvUiLERXge9VgZO-oqKUOo=',
    name: 'Happy',
  },
  {
    src: 'https://media.istockphoto.com/photos/put-more-in-get-more-out-picture-id1291318636?b=1&k=20&m=1291318636&s=170667a&w=0&h=UvVIk7wwkN3X9OFm8gBlWWviV5vAjfrq2ejYP30JmnA=',
    name: 'Hightnow',
  },
  {
    src: 'https://media.istockphoto.com/photos/relax-you-did-good-picture-id1283630226?b=1&k=20&m=1283630226&s=170667a&w=0&h=yLA1c0bwlZX066RksdZHiBI7_BXZYViPJIwuvSYfqdU=',
    name: 'El Haj Lma3ty',
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'some one',
  },
  {
    src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Abd Alah',
  },
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
