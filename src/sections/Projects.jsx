import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Projects — 2×2 responsive grid of featured project cards.
 */
function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="section-heading text-gray-900 dark:text-gray-50">
            Featured Projects
          </h2>
          <p className="section-subheading mx-auto">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Projects;
