import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SkillCard from '../components/SkillCard';
import skills from '../data/skills';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Skills — responsive grid of animated skill cards.
 */
function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="section-heading text-gray-900 dark:text-gray-50">
            My Tech Stack
          </h2>
          <p className="section-subheading mx-auto">
            Technologies and tools I work with to build modern web experiences.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill) => (
            <motion.div key={skill.id} variants={cardVariants}>
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Skills;
