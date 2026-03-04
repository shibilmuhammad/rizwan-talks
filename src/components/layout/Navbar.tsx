import React from 'react';
import Link from 'next/link';

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="h-8 w-8 rounded bg-brand flex items-center justify-center font-bold text-brand-foreground text-xl group-hover:shadow-[0_0_15px_rgba(255,193,7,0.5)] transition-all">
                                R
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white group-hover:text-brand transition-colors">
                                Rizwan Talks
                            </span>
                        </Link>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/courses" className="text-sm font-medium text-muted hover:text-brand transition-colors">
                            Courses
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-muted hover:text-brand transition-colors">
                            About
                        </Link>
                        <Link href="/community" className="text-sm font-medium text-muted hover:text-brand transition-colors">
                            Community
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-muted hover:text-brand transition-colors">
                            Insights
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/login" className="hidden sm:block text-sm font-medium text-foreground hover:text-brand transition-colors">
                            Log in
                        </Link>
                        <Link href="/courses" className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow hover:bg-brand-hover transition-colors">
                            Start Learning
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
