import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SiBehance } from 'react-icons/si';
import socials from '../data/socials';
import profile from '../data/profile';

const SOCIAL_LINKS = [
  { icon: FiMail,     href: `mailto:${socials.email}`,  label: 'Email'    },
  { icon: FiGithub,   href: socials.github,              label: 'GitHub'   },
  { icon: FiLinkedin, href: socials.linkedin,            label: 'LinkedIn' },
  { icon: SiBehance,  href: socials.behance,              label: 'Behance'  },
];

/**
 * Footer — copyright, social icons, and back-to-top button.
 */
function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-500 order-2 sm:order-1">
          © {year}{' '}
          <span className="text-gray-700 dark:text-gray-300 font-medium">{profile.name}</span>
          . All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-2 order-1 sm:order-2">
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-xl flex items-center justify-center
                text-gray-500 dark:text-gray-500
                hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10
                transition-all duration-200"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium
            text-gray-500 dark:text-gray-500
            hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-500/10
            transition-all duration-200 cursor-pointer order-3"
        >
          <FiArrowUp size={14} />
          Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
