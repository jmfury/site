import { motion } from "framer-motion";

// @TODO - Make this better for reusability; not tied to implementation
const variants = {
  initial: {
    opacity: 0,
    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0 100%)",
  },
  animate: {
    opacity: 0.55,
    clipPath: "polygon(0% 0%, 100% 1%, 100% 100%, 0 100%)",
  },
};

export default function MotionPolygonComponent({
  id,
  node,
  children,
  ...props
}) {
  return (
    <motion.polygon
      variants={variants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 2.4,
        repeatType: "reverse",
        repeat: Infinity,
        repeatDelay: 1,
      }}
      {...props}
      id={id}
    >
      {children}
    </motion.polygon>
  );
}
