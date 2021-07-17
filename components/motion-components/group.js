import { motion } from "framer-motion"
import { useMotionSvgContext } from "./context"

export default function MotionGroupComponent({ id, children, ...props }) {
  const { g: motionGroupProps } = useMotionSvgContext()

  return (
    <motion.g {...motionGroupProps} {...props} id={id}>
      {children}
    </motion.g>
  )
}
