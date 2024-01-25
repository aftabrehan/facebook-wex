import Image from 'next/image'
import { signOut, useSession } from 'next-auth/react'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'

import HeaderIcon from './HeaderIcon'

import logo from '../public/logo.png'

const Header = () => {
  const { data: session } = useSession()

  return (
    <div className="w-full sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center ">
        <Image alt="" src={logo} width={40} height={40} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="w-7 md:w-5 h-7 md:h-5 text-gray-500" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      <div className="flex justify-center flex-grow space-x-6 md:space-x-2">
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          alt=""
          onClick={signOut}
          className="rounded-full cursor-pointer bg-gray-100"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
        <p className="hidden md:inline-flex whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  )
}

export default Header
