import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import SectionWrapper from '../components/SectionWrapper';
import socials from '../data/socials';
import profile from '../data/profile';

const contactLinks = [
  {
    id: 'email',
    icon: FiMail,
    label: 'Email',
    value: socials.email,
    href: `mailto:${socials.email}`,
    description: 'Drop me a message anytime.',
    external: false,
  },
  {
    id: 'github',
    icon: FiGithub,
    label: 'GitHub',
    value: socials.github.replace('https://', ''),
    href: socials.github,
    description: 'Check out my open-source work.',
    external: true,
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: socials.linkedin.replace('https://', ''),
    href: socials.linkedin,
    description: 'Let\'s connect professionally.',
    external: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden:   { opacity: 0, x: -16 },
  visible:  { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Contact — email, GitHub, LinkedIn contact links and resume download.
 */
function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Headline */}
          <div>
            <p className="text-blue-500 font-semibold text-sm tracking-widest uppercase mb-3">
              Contact
            </p>
            <h2 className="section-heading text-gray-900 dark:text-gray-50 mb-4">
              Let&apos;s build something<br />
              <span className="gradient-text">great together.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
              I&apos;m currently {profile.availableForWork ? 'open to new opportunities' : 'not actively looking, but open to interesting projects'}.
              Feel free to reach out — I&apos;d love to hear from you.
            </p>

            {/* Resume Download */}
            <a
              href={socials.resume}
              download
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl font-semibold text-sm
                bg-gray-900 dark:bg-white text-white dark:text-gray-900
                hover:bg-gray-700 dark:hover:bg-gray-100
                shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <FiDownload size={15} />
              Download Resume
            </a>
          </div>

          {/* Right — Contact Cards */}
          <motion.div
            className="flex flex-col gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactLinks.map(({ id, icon: Icon, label, value, href, description, external }) => (
              <motion.a
                key={id}
                href={href}
                target={external ? '_blank' : '_self'}
                rel={external ? 'noopener noreferrer' : undefined}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="flex items-center gap-4 p-4 rounded-2xl
                  bg-gray-50 dark:bg-white/5
                  border border-gray-100 dark:border-white/10
                  hover:border-blue-200 dark:hover:border-blue-500/30
                  hover:bg-blue-50/50 dark:hover:bg-blue-500/5
                  transition-colors duration-200 group"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0
                  bg-white dark:bg-white/10
                  border border-gray-100 dark:border-white/10
                  group-hover:bg-blue-500 group-hover:border-blue-500
                  transition-all duration-200">
                  <Icon
                    size={18}
                    className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-200"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-0.5">
                    {label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                    {value}
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-600 mt-0.5">
                    {description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
