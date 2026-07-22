import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import profile from '../data/profile';

const statItems = [
  { value: '3+',   label: 'Years Experience' },
  { value: '20+',  label: 'Projects Built'   },
  { value: '100%', label: 'Passion for Code' },
];

/**
 * About — brief personal introduction with stats.
 */
function About() {
  return (
    <SectionWrapper id="about" className="bg-gray-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <motion.p
          className="text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div>
            <h2 className="section-heading text-gray-900 dark:text-gray-50 mb-6">
              Crafting experiences,<br />
              <span className="gradient-text">pixel by pixel.</span>
            </h2>

            <div className="flex flex-col gap-4">
              {profile.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 dark:text-gray-400 leading-relaxed text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 lg:pt-12">
            {statItems.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-5 rounded-2xl
                  bg-white dark:bg-white/5
                  border border-gray-100 dark:border-white/10
                  shadow-sm"
              >
                <span className="text-3xl font-extrabold text-gray-900 dark:text-gray-50 mb-1">
                  {value}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500 font-medium leading-tight text-center">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;
