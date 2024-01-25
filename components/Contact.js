import Image from 'next/image'

const Contact = ({ src, name }) => (
  <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cusor-pointer p-2 rounded-xl">
    <Image
      className="rounded-full bg-white bg-opacity-75"
      objectFit="cover"
      src={src}
      width={50}
      height={50}
      layout="fixed"
      alt=""
    />
    <p>{name}</p>
    <div className="absolute bottom-2 left-8 bg-green-400 h-[16px] w-[16px] rounded-full animate-bloque border-2 border-white" />
  </div>
)

export default Contact
