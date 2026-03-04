import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "Blog & Market Insights | Rizwan Talks",
    description: "Weekly trading tips, fundamental analysis, and price action breakdowns.",
};

export default function BlogPage() {
    const articles = [
        {
            id: 1,
            title: "Why Support & Resistance Trading Fails in 2026",
            excerpt: "Retail traders are still drawing horizontal lines and wondering why they keep getting stopped out before the real move happens...",
            category: "Price Action",
            date: "March 2, 2026",
            readTime: "5 min read",
        },
        {
            id: 2,
            title: "How to Actually Handle a Losing Streak without Quitting",
            excerpt: "Psychology is 80% of trading. Here is my exact protocol for recovering from a 5-trade losing streak without revenge trading.",
            category: "Psychology",
            date: "February 24, 2026",
            readTime: "8 min read",
        },
        {
            id: 3,
            title: "The Reality of Prop Firm Accounts: What They Don't Tell You",
            excerpt: "Passing a challenge is easy. Keeping the funded account is hard. Let's break down the math behind drawdown limits.",
            category: "Prop Insights",
            date: "February 15, 2026",
            readTime: "6 min read",
        },
        {
            id: 4,
            title: "Top 3 Mistakes Beginners Make in EUR/USD",
            excerpt: "The most traded currency pair is also the most manipulated. Learn the specific session timings to avoid fakeouts.",
            category: "Market Analysis",
            date: "February 8, 2026",
            readTime: "4 min read",
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-24 pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Market <span className="text-brand">Insights</span>
                    </h1>
                    <p className="text-xl text-muted max-w-2xl">
                        Read our latest articles on trading psychology, price action strategies, and weekly market breakdowns.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article) => (
                        <Card key={article.id} hoverable className="bg-surface border-border flex flex-col h-full cursor-pointer group">
                            <CardContent className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-xs font-semibold text-brand tracking-wider uppercase">
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-muted">
                                        {article.readTime}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                                    {article.title}
                                </h2>

                                <p className="text-muted leading-relaxed mb-8 flex-grow">
                                    {article.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-border/50 flex items-center justify-between">
                                    <span className="text-sm text-muted">{article.date}</span>
                                    <span className="text-brand font-medium text-sm flex items-center gap-1 group-hover:underline">
                                        Read Article
                                        <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button variant="outline" size="lg">Load More Articles</Button>
                </div>
            </div>
        </div>
    );
}
