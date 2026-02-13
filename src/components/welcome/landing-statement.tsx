import { motion } from 'framer-motion'
import LightRays from '../ui-elements/light-rays'

export default function LandingStatement() {
  return (
    <div className="space-y-3 outfit-regular text-center text-white">
      <div className="w-full h-full absolute top-0 left-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.5}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
        className="text-4xl md:text-3xl opacity-80"
      >
        This was about code
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.9 }}
        className="text-4xl md:text-5xl"
      >
        It isn’t just that anymore
      </motion.p>
    </div>
  )
}
