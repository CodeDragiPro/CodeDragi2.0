import { motion } from "framer-motion";

//animation d'opacité
const opacityAnimation = {
  initial: { opacity: 0},
  animate: { opacity: 1 },
  exit: { opacity: 0},
};

//animation de rotation
const rotateAnimation = {
  initial: { rotateY: 90},
  animate: { rotateY: 0 },
  exit: { rotateY: -90},
};

//animation de zoom
const zoomAnimation = {
  initial: { scale: 0.7, opacity: 1},
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 1, opacity: 0},
};

//animation de transition vers la droite
const widthAnimation = {
  initial: { with: 0},
  animate: { with: '100%'},
  exit: { with: '100%', x:window.innerWidth},
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      className=""
      transition={{ ease: "easeInOut", duration: 1 }}
      variants={zoomAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
