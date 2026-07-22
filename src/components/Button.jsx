/**
 * Button — reusable button with primary and secondary variants.
 */
function Button({ children, variant = 'primary', href, onClick, className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer';

  const variants = {
    primary:
      'bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-md hover:shadow-blue-500/30 hover:shadow-lg active:scale-[0.98]',
    secondary:
      'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/15 active:scale-[0.98]',
    outline:
      'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:text-blue-500 active:scale-[0.98]',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;
