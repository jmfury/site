import { motion } from "framer-motion";

export default function MotionCircleComponent({ id, children, ...props }) {
  return (
    <motion.circle {...props} id={id}>
      {children}
    </motion.circle>
  );
}
