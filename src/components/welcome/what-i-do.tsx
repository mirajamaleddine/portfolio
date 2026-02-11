import { motion } from 'framer-motion'
import Typewriter from '../ui-elements/typewriter'
import Card, { type CardProps } from '../ui-elements/card'
import StickyNote from '../ui-elements/sticky-note'

interface SkillCardProps {
  title: string
  description: string
  delay: number
}

export default function WhatIDo() {
  const revealDuration = 8
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: revealDuration, ease: [0.22, 1, 0.36, 1], delay: 2 }}
        className="h-full w-px absolute top-0 right-1/6 bg-linear-to-t from-black via-slate-500 to-black"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: revealDuration, ease: [0.22, 1, 0.36, 1], delay: 1 }}
        className="h-5/7 w-px absolute bottom-0 left-1/12 bg-linear-to-t from-black via-slate-500 to-black"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: revealDuration, ease: [0.22, 1, 0.36, 1] }}
        className="w-5/6 h-px absolute top-1/6 left-1/6 bg-linear-to-r from-black via-slate-700 to-black"
      />
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: revealDuration, ease: [0.22, 1, 0.36, 1] }}
        className="w-5/6 h-px absolute bottom-1/6 right-0 bg-linear-to-r from-black via-slate-700 to-slate-900"
      />

      <div className="flex py-[20vh] h-full max-w-7xl mx-auto text-white outfit-regular flex-col gap-6">
        <div className="flex items-center flex-row gap-1.5 text-5xl mt-24">
          <span className="opacity-60">I build</span>
          <Typewriter
            delayBetween={2000}
            words={['experiences.', 'clean interfaces.', 'software products.']}
          />
        </div>
        <span className="text-xl nunito-300 opacity-60">
          Not just features. Not just tickets. End-to-end product thinking with engineering depth.
        </span>

        <div className="flex flex-row gap-18 py-10 h-full">
          <Note
            rotate={3}
            delay={0.3}
            children={
              <div className="flex flex-col h-full items-center justify-between px-6">
                <p className="text-3xl font-bold">Product Thinking</p>
                <div className="flex flex-row items-center gap-2">
                  <div className="flex-none">business goals</div>{' '}
                  <img src="right-arrow.png" alt="arrow right" className="w-8" />{' '}
                  <div>Scope + flows + edge cases</div>
                </div>
                <img src="bulb.png" alt="bulb" className="w-8" />
              </div>
            }
          />
          <Note
            rotate={-5}
            delay={0.9}
            children={
              <div className="flex flex-col h-full items-center justify-between px-6">
                <p className="text-3xl font-bold">Engineering Execution</p>
                <div className="flex flex-row items-center gap-2 text-center">
                  Component systems + scalable UI + performance
                </div>
                <img src="web-development.png" alt="web" className="w-8" />
              </div>
            }
          />
          <Note
            rotate={9}
            delay={1.6}
            children={
              <div className="flex flex-col h-full items-center justify-between px-6">
                <p className="text-3xl font-bold">Delivery & Leadership</p>
                <div className="flex flex-row items-center gap-2 text-center">
                  Team coordination + feedback loops
                </div>
                <img src="product-launch.png" alt="launch" className="w-10" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

const Note = ({
  rotate,
  children,
  delay,
}: {
  rotate: number
  delay?: number
  children: React.ReactNode
}) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay }}
      className="flex flex-1"
    >
      <StickyNote rotate={rotate}>{children}</StickyNote>
    </motion.p>
  )
}
