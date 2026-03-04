import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-background active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-brand text-brand-foreground hover:bg-brand-hover shadow-[0_0_15px_rgba(255,193,7,0.3)] hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]',
    secondary: 'bg-surface text-foreground hover:bg-surface/80 border border-border',
    outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-brand-foreground',
    ghost: 'text-foreground hover:bg-surface hover:text-brand',
  };
  
  const sizes = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-8 py-4',
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
