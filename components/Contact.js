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
    <div className="absolute bottom-3 left-8 bg-green-400 h-3 w-3 rounded-full animate-bloque" />
  </div>
)

export default Contact
