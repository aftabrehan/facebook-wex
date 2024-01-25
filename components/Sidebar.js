import { signOut, useSession } from 'next-auth/react'
import {
  ShoppingBagIcon,
  UserGroupIcon,
  LogoutIcon,
} from '@heroicons/react/outline'
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from '@heroicons/react/solid'

import SidebarRow from './SidebarRow'

const Sidebar = () => {
  const { data: session } = useSession()

  return (
    <div className="sidebar p-2 sm:mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={LogoutIcon} title="Logout" onClick={signOut} />
    </div>
  )
}

export default Sidebar
