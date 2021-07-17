import { motion } from "framer-motion"
import { useMotionSvgContext } from "./context"

export default function MotionPolygonComponent({
  id,
  node,
  children,
  ...props
}) {
  const { polygon: motionPolygonProps } = useMotionSvgContext()

  return (
    <motion.polygon {...motionPolygonProps} {...props} id={id}>
      {children}
    </motion.polygon>
  )
}
