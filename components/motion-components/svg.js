import { motion } from "framer-motion";

export default function MotionSvgComponent({ id, children, ...props }) {
  return (
    <motion.svg {...props} id={id}>
      {children}
    </motion.svg>
  );
}
