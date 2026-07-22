import { motion } from 'framer-motion';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import profile from '../data/profile';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Hero — full-viewport hero section with animated text, CTAs, and geometric blob.
 */
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden
        bg-white dark:bg-[#0a0a0a] px-6 pt-16"
    >
      {/* ── Animated Gradient Blobs ─────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full
            bg-blue-400/10 dark:bg-blue-600/8 blur-3xl animate-blob"
        />
        <div
          className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full
            bg-violet-400/8 dark:bg-violet-600/6 blur-3xl animate-blob animation-delay-2000"
        />
        <div
          className="absolute -bottom-32 right-1/3 w-[400px] h-[400px] rounded-full
            bg-blue-300/8 dark:bg-indigo-600/6 blur-3xl animate-blob animation-delay-4000"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center py-16">
        {/* Left — Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full
              text-xs font-medium
              bg-blue-50 dark:bg-blue-500/10
              text-blue-600 dark:text-blue-400
              border border-blue-100 dark:border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {profile.availableForWork ? 'Available for work' : 'Open to opportunities'}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]
              text-gray-900 dark:text-gray-50"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400 tracking-tight"
          >
            {profile.title}
          </motion.p>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-500 dark:text-gray-500 max-w-md leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                bg-[#3B82F6] text-white hover:bg-[#2563EB]
                shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40
                transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              View Projects
              <FiArrowDown size={14} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
                bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-100
                hover:bg-gray-200 dark:hover:bg-white/15
                transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <FiMail size={14} />
              Contact
            </button>
          </motion.div>
        </motion.div>

        {/* Right — Geometric Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex items-center justify-center"
          aria-hidden="true"
        >
          <HeroIllustration />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 dark:text-gray-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={14} className="text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/**
 * HeroIllustration — minimal geometric shapes composition.
 */
function HeroIllustration() {
  return (
    <div className="relative w-80 h-80">
      {/* Outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200/40 dark:border-blue-500/20"
      />

      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-8 rounded-full border border-violet-200/40 dark:border-violet-500/15"
      />

      {/* Center card */}
      <div className="absolute inset-16 rounded-3xl glass flex items-center justify-center
        shadow-2xl shadow-blue-500/10">
        <div className="flex flex-col items-center gap-1">
          <div className="w-10 h-10 rounded-2xl bg-blue-500 flex items-center justify-center
            shadow-lg shadow-blue-500/40">
            <span className="text-white font-bold text-lg">I</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-1">
            Portfolio
          </span>
        </div>
      </div>

      {/* Floating dots */}
      {[
        { top: '10%', left: '50%', delay: 0,   size: 'w-2 h-2',   color: 'bg-blue-400' },
        { top: '50%', left: '5%',  delay: 0.5, size: 'w-1.5 h-1.5', color: 'bg-violet-400' },
        { top: '85%', left: '45%', delay: 1,   size: 'w-2 h-2',   color: 'bg-blue-300' },
        { top: '30%', left: '90%', delay: 0.8, size: 'w-1.5 h-1.5', color: 'bg-indigo-400' },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className={`absolute ${dot.size} ${dot.color} rounded-full opacity-70`}
          style={{ top: dot.top, left: dot.left }}
          animate={{ y: [-4, 4, -4], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, delay: dot.delay, ease: 'easeInOut' }}
        />
      ))}

      {/* Corner badges */}
      <motion.div
        className="absolute -top-2 right-8 glass rounded-xl px-3 py-1.5 text-xs font-medium
          text-gray-600 dark:text-gray-300 shadow-sm"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        React
      </motion.div>
      <motion.div
        className="absolute -bottom-2 left-8 glass rounded-xl px-3 py-1.5 text-xs font-medium
          text-gray-600 dark:text-gray-300 shadow-sm"
        animate={{ y: [3, -3, 3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        Tailwind
      </motion.div>
    </div>
  );
}

export default Hero;
