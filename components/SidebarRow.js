import Image from 'next/image'

const SidebarRow = ({ src, Icon, title }) => (
  <div className="flex items-center justify-center sm:justify-start space-x-2 px-2 sm:px-4 py-4 cursor-pointer hover:bg-gray-200 rounded-full">
    {src && (
      <Image
        alt=""
        className="rounded-full bg-white"
        src={src}
        width={40}
        height={40}
        layout="fixed"
      />
    )}
    {Icon && (
      <Icon className="p-0 h-8 w-8 text-blue-500 rounded-full cursor-pointer" />
    )}
    <p className="hidden sm:inline-flex font-medium">{title}</p>
  </div>
)

export default SidebarRow
