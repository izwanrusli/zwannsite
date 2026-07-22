/**
 * Badge — tech stack chip/pill component.
 */
function Badge({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
      bg-blue-50 text-blue-700 border border-blue-100
      dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20
      transition-colors duration-200">
      {label}
    </span>
  );
}

export default Badge;
