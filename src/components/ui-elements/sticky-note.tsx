import { useState } from 'react'

export default function StickyNote({
  rotate,
  children,
}: {
  rotate: number
  children: React.ReactNode
}) {
  const [isHovered, setIsHovered] = useState(false)
  const currentRotate = isHovered ? 0 : rotate
  const translateY = isHovered ? 'translateY(-0.5rem)' : ''

  return (
    <div
      className="flex flex-1 flex-col bg-yellow-300 p-4 reenie-beanie-regular text-black text-2xl transition-transform duration-300"
      style={{ transform: `rotate(${currentRotate}deg) ${translateY}` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}
