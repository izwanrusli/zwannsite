import { motion } from 'framer-motion';
import {
  DiHtml5, DiCss3,
} from 'react-icons/di';
import {
  SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiJquery, SiGit, SiNetlify, SiRubyonrails,
  SiFigma, SiWordpress,
} from 'react-icons/si';
import { MdDevices } from 'react-icons/md';

// Icon registry — maps iconName string → component (enables tree-shaking)
const ICON_REGISTRY = {
  DiHtml5, DiCss3,
  SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiJquery, SiGit, SiNetlify, SiRubyonrails,
  SiFigma, SiWordpress,
  MdDevices,
};

/**
 * SkillCard — displays a skill with its icon, label, and hover animation.
 */
function SkillCard({ skill }) {
  const IconComponent = ICON_REGISTRY[skill.iconName];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl
        bg-white dark:bg-white/5
        border border-gray-100 dark:border-white/10
        shadow-sm hover:shadow-md dark:hover:shadow-none
        hover:border-blue-200 dark:hover:border-blue-500/30
        cursor-default transition-colors duration-200 group"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200"
        style={{ backgroundColor: `${skill.color}18` }}
      >
        {IconComponent ? (
          <IconComponent size={28} style={{ color: skill.color }} />
        ) : (
          <span className="text-xl font-bold" style={{ color: skill.color }}>
            {skill.fallbackText || skill.label.charAt(0)}
          </span>
        )}
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
        {skill.label}
      </span>
    </motion.div>
  );
}

export default SkillCard;
