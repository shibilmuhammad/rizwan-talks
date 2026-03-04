import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
}

export function Card({ className = '', hoverable = false, children, ...props }: CardProps) {
    const baseStyles = 'bg-surface border border-border rounded-xl overflow-hidden';
    const hoverStyles = hoverable ? 'transition-all duration-300 hover:border-brand/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1' : '';

    return (
        <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
            {children}
        </div>
    );
}

export function CardHeader({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`p-6 pb-4 ${className}`} {...props}>{children}</div>;
}

export function CardContent({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`p-6 pt-0 ${className}`} {...props}>{children}</div>;
}

export function CardFooter({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={`p-6 pt-0 flex items-center ${className}`} {...props}>{children}</div>;
}
