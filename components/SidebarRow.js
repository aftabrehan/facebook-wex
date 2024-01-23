import Image from 'next/image'

function SidebarRow({ src, Icon, title }) {
  return (
    <div className=" flex items-center space-x-2 p-4 cursor-pointer hover:bg-gray-200 rounded-full">
      {src && (
        <Image
          alt=""
          className="rounded-full"
          src={src}
          width={40}
          height={40}
          layout="fixed"
        />
      )}
      {Icon && <Icon className=" sidebarrowicon" />}
      <p className="hidden sm:inline-flex font-medium">{title}</p>
    </div>
  )
}

export default SidebarRow
