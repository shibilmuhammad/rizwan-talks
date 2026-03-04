import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-surface/50 py-12">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 group mb-4">
                            <div className="h-8 w-8 rounded bg-brand flex items-center justify-center font-bold text-brand-foreground text-xl">
                                R
                            </div>
                            <span className="font-bold text-xl tracking-tight text-white">
                                Rizwan Talks
                            </span>
                        </Link>
                        <p className="text-muted text-sm pb-4">
                            Master price action, market structure, and risk management from a real trader. Learn Forex trading the right way.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/courses" className="hover:text-brand transition-colors">All Courses</Link></li>
                            <li><Link href="/about" className="hover:text-brand transition-colors">About Rizwan</Link></li>
                            <li><Link href="/blog" className="hover:text-brand transition-colors">Market Insights</Link></li>
                            <li><Link href="/community" className="hover:text-brand transition-colors">Join Community</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li><Link href="/terms" className="hover:text-brand transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/refund" className="hover:text-brand transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm text-muted">
                            <li>
                                <a href="https://youtube.com/@RizwanTalks" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" /></svg>
                                    YouTube
                                </a>
                            </li>
                            <li><a href="#" className="hover:text-brand transition-colors">Telegram Group</a></li>
                            <li><a href="#" className="hover:text-brand transition-colors">WhatsApp Channel</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted">
                    <p>&copy; {new Date().getFullYear()} Rizwan Talks. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
