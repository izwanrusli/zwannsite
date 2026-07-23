// ─── Projects Data ────────────────────────────────────────────
// Add, remove, or edit projects here. The Projects section will update automatically.

import photographerAgency from '../assets/projects/photographer-agency.jpg';
import portfolioLanding from '../assets/projects/portfolio-landing.jpg';
import creativeAgency from '../assets/projects/creative-agency.jpg';
import photocora from '../assets/projects/photocora.jpg';
import wanderlust from '../assets/projects/wanderlust.jpg';

const projects = [
  {
    id: 2,
    title: 'Photographer Agency Landing Page',
    description:
      'A website design for a photographer agency, focused on user interface and user experience. Designed in Adobe XD.',
    tech: ['Adobe XD', 'UI/UX Design', 'Web Design'],
    liveUrl: '#',
    githubUrl: '#',
    image: photographerAgency,
    featured: true,
  },
  {
    id: 3,
    title: 'Portfolio Landing Page',
    description:
      'A website design for a designer portfolio, covering user interface and user experience design. Designed in Adobe XD.',
    tech: ['Adobe XD', 'UI/UX Design', 'Web Design'],
    liveUrl: '#',
    githubUrl: '#',
    image: portfolioLanding,
    featured: true,
  },
  {
    id: 4,
    title: 'Creative Agency Landing Page',
    description:
      'A website design for a creative agency, covering user interface and user experience design. Designed in Adobe XD.',
    tech: ['Adobe XD', 'UI/UX Design', 'Web Design'],
    liveUrl: '#',
    githubUrl: '#',
    image: creativeAgency,
    featured: true,
  },
  {
    id: 5,
    title: 'Photocora',
    description:
      'A single-page personal photography website featuring a grid gallery with color overlay effects.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    liveUrl: 'https://photocora.netlify.com/',
    githubUrl: '#',
    image: photocora,
    featured: true,
  },
  {
    id: 6,
    title: 'Wanderlust',
    description:
      'A cinematic, editorial-style travel destination landing page concept, letting full-bleed photography and bold typography carry the storytelling.',
    tech: ['Adobe XD', 'UI/UX Design', 'Web Design'],
    liveUrl: 'https://www.behance.net/gallery/253166475/Wanderlust',
    githubUrl: '#',
    image: wanderlust,
    featured: true,
  },
  {
    id: 7,
    title: 'FileRename Pro',
    description:
      'A fast, private, browser-based batch file renamer for PDFs and images — apply naming rules and download individually or as a ZIP, all client-side with no uploads.',
    tech: ['JavaScript', 'HTML', 'CSS', 'JSZip'],
    liveUrl: 'https://filerenamepro.netlify.app/',
    githubUrl: 'https://github.com/izwanrusli/file_rename',
    // TODO: drop a screenshot into src/assets/projects/ and import it here
    image: null,
    featured: true,
  },
];

export default projects;
