import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Badge from './Badge';

/**
 * Generates a unique gradient placeholder for projects without a screenshot.
 */
function ProjectImagePlaceholder({ title, index }) {
  const gradients = [
    'from-blue-500/20 via-violet-500/20 to-purple-500/20',
    'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    'from-orange-500/20 via-rose-500/20 to-pink-500/20',
    'from-indigo-500/20 via-blue-500/20 to-sky-500/20',
  ];
  const gradient = gradients[index % gradients.length];
  const initials = title.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <div
      className={`w-full h-48 rounded-xl bg-gradient-to-br ${gradient}
        flex items-center justify-center border border-gray-100 dark:border-white/5`}
    >
      <span className="text-4xl font-bold text-gray-300 dark:text-gray-600 select-none">
        {initials}
      </span>
    </div>
  );
}

/**
 * ProjectCard — displays a project with image, title, description, tech badges, and links.
 */
function ProjectCard({ project, index }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className="flex flex-col rounded-2xl overflow-hidden
        bg-white dark:bg-white/5
        border border-gray-100 dark:border-white/10
        shadow-sm hover:shadow-xl hover:shadow-blue-500/5
        dark:hover:shadow-none
        transition-shadow duration-300"
    >
      {/* Screenshot / Placeholder */}
      <div className="p-4 pb-0">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-48 object-cover rounded-xl"
          />
        ) : (
          <ProjectImagePlaceholder title={project.title} index={index} />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-1">
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium
                bg-[#3B82F6] text-white hover:bg-[#2563EB]
                transition-colors duration-200"
            >
              <FiExternalLink size={12} />
              {project.liveUrl.includes('behance.net') ? 'View Case Study' : 'Live Demo'}
            </a>
          ) : (
            <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium
              bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 cursor-not-allowed">
              <FiExternalLink size={12} />
              Live Demo
            </span>
          )}
          {project.githubUrl && project.githubUrl !== '#' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium
                bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300
                hover:bg-gray-200 dark:hover:bg-white/15
                transition-colors duration-200"
            >
              <FiGithub size={12} />
              GitHub
            </a>
          ) : (
            <span className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium
              bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-gray-500 cursor-not-allowed">
              <FiGithub size={12} />
              GitHub
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
