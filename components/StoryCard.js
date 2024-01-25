import Image from 'next/image'

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform case-in hover:scale-105 hover:animate-pulse justify-center items-center bg-white rounded-full lg:rounded-2xl">
      <div className="w-14 md:w-20 lg:w-10 h-14 md:h-20 lg:h-10 absolute rounded-full z-50 left-0 lg:left-2 top-0 lg:top-3 border-2 border-blue-500">
        <Image
          alt="users profile pictures"
          className="w-full h-auto rounded-full"
          src={profile}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Image
        alt=""
        className="object-cover filter brightness-75 rounded-full lg:rounded-2xl"
        src={src}
        layout="fill"
      />
      <p className="hidden lg:inline-flex absolute left-2 bottom-2 botton-4 w-5/6 text-white text-sm truncate">
        {name}
      </p>
    </div>
  )
}

export default StoryCard
