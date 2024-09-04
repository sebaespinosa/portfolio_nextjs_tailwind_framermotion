import Image from "next/image"

const Bulb = () => {
  return (
    <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
      <Image
        width={260}
        height={200}
        src={'/bulb.png'}
        alt=""
        className="w-full h-full"
      />
    </div>
  )
}

export default Bulb