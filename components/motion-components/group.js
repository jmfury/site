import { motion } from "framer-motion";

export default function MotionGroupComponent({ id, children, ...props }) {
  return (
    <motion.g {...props} id={id}>
      {children}
    </motion.g>
  );
}
