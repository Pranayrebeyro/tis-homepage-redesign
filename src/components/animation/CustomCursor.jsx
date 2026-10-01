import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  const cursorX = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  })

  const cursorY = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.5,
  })

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)')

    const updatePointer = () => {
      setIsDesktop(mediaQuery.matches)
    }

    updatePointer()
    mediaQuery.addEventListener('change', updatePointer)

    return () => {
      mediaQuery.removeEventListener('change', updatePointer)
    }
  }, [])

  useEffect(() => {
    if (!isDesktop) {
      return undefined
    }

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
    }

    const handlePointerOver = (event) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const interactiveElement = event.target.closest(
        'a, button, [data-cursor="interactive"]',
      )

      setIsHovering(Boolean(interactiveElement))
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handlePointerOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handlePointerOver)
    }
  }, [isDesktop, mouseX, mouseY])

  if (!isDesktop) {
    return null
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[80] h-8 w-8 rounded-full border border-[#164f45]/70"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        scale: isHovering ? 1.6 : 1,
        opacity: isHovering ? 0.45 : 0.7,
      }}
      transition={{
        duration: 0.2,
      }}
    />
  )
}

export default CustomCursor