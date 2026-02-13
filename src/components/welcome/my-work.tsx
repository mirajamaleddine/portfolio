import Card from '../ui-elements/card'
import CurvedLoop from '../ui-elements/curved-loop'

export default function MyWork() {
  const text = 'My ✦ selected ✦ work ✦'

  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="bg-linear-to-b from-[#db2777] via-[#ef4444] to-yellow-300 w-3/4 h-3/4 rounded-2xl">
        <div className=" w-full overflow-hidden h-2/7">
          <CurvedLoop marqueeText={text} curveAmount={240} />
        </div>

        <div className="text-white text-center text-lg opacity-60 outfit-light">
          {/* This is work I have done that I a genuinely proud of. */}A selection of projects that
          I’ve shaped, shipped, and stood behind.
        </div>
        {/* <div className="flex flex-row gap-6 -mx-20 h-80 mt-20">
          <Card title="Project 1" description="Description 1" />
          <Card title="Project 2" description="Description 2" />
          <Card title="Project 3" description="Description 3" />
        </div> */}
      </div>
    </div>
  )
}
