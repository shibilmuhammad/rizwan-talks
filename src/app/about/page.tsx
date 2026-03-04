import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
    title: "About Rizwan Pazheri | Rizwan Talks",
    description: "Learn about the trading journey and mission of Rizwan Pazheri.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="pt-24 pb-16 border-b border-border/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                        My <span className="text-brand">Trading Journey</span>
                    </h1>
                    <p className="text-xl text-muted">
                        From blowing multiple accounts to finding consistency through pure price action.
                    </p>
                </div>
            </section>

            {/* Story Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                    <div className="prose prose-lg prose-invert text-muted max-w-none">
                        <h2 className="text-2xl font-bold text-white mb-4">The Early Days</h2>
                        <p className="mb-8">
                            My journey in Forex wasn't an overnight success. Like many beginners, I started by looking for the "Holy Grail" indicator. I watched countless YouTube videos, joined signal groups, and bought automated robots hoping to make quick money. The result? I blew account after account.
                        </p>

                        <h2 className="text-2xl font-bold text-white mb-4">The Turning Point</h2>
                        <p className="mb-8">
                            The real shift happened when I stopped looking at indicators and started looking at price. I cleared my charts. No RSI, no MACD, no moving averages. Just naked candlesticks. I spent thousands of hours studying market structure, liquidity concepts, and how institutional players manipulate retail traders.
                        </p>

                        <blockquote className="border-l-4 border-brand pl-6 italic text-xl text-white my-10 bg-surface/30 py-4 pr-4 rounded-r-lg">
                            "Trading without understanding market structure is like trying to navigate a new city without a map. You might get lucky occasionally, but eventually, you will get lost."
                        </blockquote>

                        <h2 className="text-2xl font-bold text-white mb-4">Our Mission at Rizwan Talks</h2>
                        <p className="mb-8">
                            Why did I start teaching? Because the Malayalam trading space is filled with scammers promising 100% daily returns using useless indicators. I created <strong>Rizwan Talks</strong> to provide honest, unfiltered education about what it actually takes to be a profitable trader in the foreign exchange markets.
                        </p>
                        <p className="mb-12">
                            My goal is to create a community of independent traders who don't rely on signals, who understand risk management, and who approach the markets with professional discipline.
                        </p>
                    </div>

                    <div className="bg-surface border border-border rounded-xl p-8 text-center mt-12">
                        <h3 className="text-2xl font-bold text-white mb-4">Ready to learn the right way?</h3>
                        <p className="text-muted mb-6">Join our comprehensive Price Action Masterclass today.</p>
                        <Link href="/courses">
                            <Button size="lg" className="w-full sm:w-auto">Explore Courses</Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
