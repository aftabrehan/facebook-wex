import Image from 'next/image'

const StoryCard = ({ name, src, profile }) => (
  <div className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-hidden p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse justify-center items-center bg-white/50 rounded-full lg:rounded-2xl">
    <div className="w-full lg:w-10 h-full lg:h-10 absolute rounded-full z-50 sm:z-0 lg:z-50 left-0 lg:left-2 top-0 lg:top-3 border-2 border-blue-500">
      <div className="relative w-full h-full">
        <Image
          alt="users profile pictures"
          className="w-full h-auto rounded-full"
          src={profile}
          fill sizes="(max-width: 768px) 100vw, 672px"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
    <Image
      alt=""
      className="object-cover filter brightness-75 rounded-full lg:rounded-2xl"
      src={src}
      fill sizes="(max-width: 768px) 100vw, 672px"
    />
    <p className="hidden lg:inline-flex absolute left-2 bottom-2 w-5/6 text-white text-sm truncate">
      {name}
    </p>
  </div>
)

export default StoryCard
