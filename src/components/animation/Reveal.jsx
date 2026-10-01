import { motion } from 'framer-motion'

const directions = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
}

function Reveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}) {
  const initialPosition = directions[direction] || directions.up

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...initialPosition,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal