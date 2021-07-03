import { motion } from "framer-motion";

export default function MotionPathComponent({ id, node, children, ...props }) {
  return (
    <motion.path {...props} id={id}>
      {children}
    </motion.path>
  );
}
