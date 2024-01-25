const HeaderIcon = ({ Icon, active }) => (
  <div className="group hover:text-blue-500 flex items-center cursor-pointer sm:px-2 md:px-6 lg:px-10 sm:h-14 md:hover:bg-gray-100 rounded-xl active:border-b-2 active:border-blue-500">
    <Icon
      className="h-5 text-center sm:h-7 mx:auto group-hover:text-blue-500 text-gray-500"
      style={{ color: active ? '#4E80EE' : 'gray hover:text-blue-500' }}
    />
  </div>
)

export default HeaderIcon
