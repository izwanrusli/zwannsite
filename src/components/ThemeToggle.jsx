import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

/**
 * ThemeToggle — animated sun/moon icon button for dark/light mode.
 */
function ThemeToggle({ isDark, toggle }) {
  return (
    <motion.button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-9 h-9 rounded-xl flex items-center justify-center
        bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/15
        text-gray-600 dark:text-gray-300 transition-colors duration-200 cursor-pointer"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
