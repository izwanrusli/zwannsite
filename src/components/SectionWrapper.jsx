import { motion } from 'framer-motion';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * SectionWrapper — wraps each section in a Framer Motion fade-up animation.
 * Uses IntersectionObserver via `whileInView` to trigger animations on scroll.
 */
function SectionWrapper({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      className={`section-padding ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUpVariants}
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
