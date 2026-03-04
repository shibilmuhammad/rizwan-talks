import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

export const metadata = {
    title: "Courses | Rizwan Talks",
    description: "Browse our premium Forex trading courses.",
};

export default function CoursesPage() {
    const courses = [
        {
            id: "price-action-masterclass",
            title: "Price Action Masterclass",
            description: "The complete A-Z guide to trading pure price action. Learn how to read the market makers' footprints and trade without lagging indicators.",
            duration: "12 Hours",
            lessons: 45,
            price: "₹4,999",
            originalPrice: "₹9,999",
            level: "All Levels",
            image: "/images/course_thumb_v4.png",
            popular: true,
        },
        {
            id: "market-structure-advanced",
            title: "Advanced Market Structure",
            description: "Deep dive into market geometry, liquidity concepts, and advanced structural shifts to catch precise entries with high risk-to-reward.",
            duration: "8 Hours",
            lessons: 24,
            price: "₹3,499",
            originalPrice: "₹6,999",
            level: "Intermediate",
            image: "/images/course_thumb_v4.png",
            popular: false,
        },
        {
            id: "forex-basics-malayalam",
            title: "Forex Trading Basics (Malayalam)",
            description: "Start your trading journey here. Understand the fundamentals of Forex, brokers, pips, lots, and how to place your first trade.",
            duration: "4 Hours",
            lessons: 15,
            price: "Free",
            originalPrice: null,
            level: "Beginner",
            image: "/images/course_thumb.png",
            popular: false,
        }
    ];

    return (
        <div className="min-h-screen bg-background pt-24 pb-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Our <span className="text-brand">Courses</span>
                    </h1>
                    <p className="text-xl text-muted">
                        Structured learning paths designed to take you from a curious beginner to a consistently profitable trader.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {courses.map((course) => (
                        <Card key={course.id} hoverable className="flex flex-col h-full bg-surface border-border/50">
                            <div className="relative aspect-video w-full overflow-hidden border-b border-border/50">
                                {course.popular && (
                                    <div className="absolute top-4 right-4 z-10 bg-brand text-brand-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        BEST SELLER
                                    </div>
                                )}
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <CardContent className="flex flex-col flex-grow p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-xs font-semibold text-brand bg-brand/10 px-2 py-1 rounded">
                                        {course.level}
                                    </span>
                                    <div className="flex items-center text-xs text-muted">
                                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {course.duration}
                                    </div>
                                    <div className="flex items-center text-xs text-muted">
                                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        {course.lessons} Lessons
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-white mb-2 line-clamp-2">
                                    {course.title}
                                </h2>

                                <p className="text-muted text-sm mb-6 flex-grow line-clamp-3">
                                    {course.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-border/50 flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-white shadow-brand">
                                            {course.price}
                                        </span>
                                        {course.originalPrice && (
                                            <span className="text-sm text-muted line-through ml-2">
                                                {course.originalPrice}
                                            </span>
                                        )}
                                    </div>

                                    <Link href={`/courses/${course.id}`}>
                                        <Button variant="primary" size="sm">
                                            Enroll Now
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
