"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const lessons = [
    { id: 1, title: "Welcome to the Masterclass", duration: "05:20", completed: true },
    { id: 2, title: "What is pure Price Action?", duration: "12:45", completed: true },
    { id: 3, title: "Setting up your TradingView", duration: "18:30", completed: false },
    { id: 4, title: "Understanding Candlestick Anatomy", duration: "25:10", completed: false },
    { id: 5, title: "Market Structure: Higher Highs & Lower Lows", duration: "32:15", completed: false },
    { id: 6, title: "Identifying Valid Pullbacks", duration: "28:40", completed: false },
    { id: 7, title: "Support, Resistance & Supply, Demand", duration: "40:05", completed: false },
];

export default function CourseLearningPage() {
    const [activeLesson, setActiveLesson] = useState(3);
    const [notes, setNotes] = useState("");

    const currentLesson = lessons.find(l => l.id === activeLesson);

    return (
        <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] bg-background">
            {/* Sidebar - Lessons List */}
            <aside className="w-full lg:w-80 border-r border-border/50 bg-surface/30 flex flex-col h-[50vh] lg:h-[calc(100vh-4rem)] lg:sticky lg:top-16 overflow-y-auto order-2 lg:order-1">
                <div className="p-6 border-b border-border/50">
                    <Link href="/courses" className="text-sm text-brand hover:underline flex items-center mb-4">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Courses
                    </Link>
                    <h2 className="font-bold text-lg text-white mb-2">Price Action Masterclass</h2>
                    <div className="w-full bg-background rounded-full h-2 mb-2">
                        <div className="bg-brand h-2 rounded-full" style={{ width: "28%" }}></div>
                    </div>
                    <p className="text-xs text-muted">2/7 Lessons Completed (28%)</p>
                </div>

                <div className="flex-1 py-4">
                    <h3 className="px-6 text-sm font-semibold text-muted uppercase tracking-wider mb-2">Module 1: The Foundation</h3>
                    <ul className="space-y-1">
                        {lessons.map((lesson) => (
                            <li key={lesson.id}>
                                <button
                                    onClick={() => setActiveLesson(lesson.id)}
                                    className={`w-full text-left px-6 py-3 flex items-start gap-3 transition-colors ${activeLesson === lesson.id
                                            ? "bg-brand/10 border-r-4 border-brand"
                                            : "hover:bg-surface/50 border-r-4 border-transparent"
                                        }`}
                                >
                                    <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center border ${lesson.completed
                                            ? "bg-profit border-profit text-white"
                                            : activeLesson === lesson.id
                                                ? "border-brand text-brand"
                                                : "border-muted text-transparent"
                                        }`}>
                                        {lesson.completed ? (
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                                        )}
                                    </div>
                                    <div className="flex-1 pr-2">
                                        <p className={`text-sm ${activeLesson === lesson.id ? "text-white font-medium" : "text-muted"}`}>
                                            {lesson.title}
                                        </p>
                                        <p className="text-xs text-muted/70 mt-1">{lesson.duration}</p>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Main Content - Video Player & Notes */}
            <main className="flex-1 flex flex-col order-1 lg:order-2">
                {/* Mock Video Player */}
                <div className="w-full bg-black aspect-video relative flex items-center justify-center group">
                    <div className="absolute inset-0 bg-surface/20 flex flex-col items-center justify-center">
                        {/* Play Button Mock */}
                        <button className="w-20 h-20 rounded-full bg-brand/90 hover:bg-brand hover:scale-105 transition-all text-brand-foreground flex items-center justify-center shadow-[0_0_30px_rgba(255,193,7,0.4)]">
                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </button>
                    </div>

                    {/* Mock Video Controls */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-full h-1 bg-surface/50 rounded-full mb-4 cursor-pointer">
                            <div className="h-full bg-brand rounded-full relative" style={{ width: "0%" }}>
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-white">
                            <button><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg></button>
                            <div className="text-sm font-medium">00:00 / {currentLesson?.duration}</div>
                            <div className="flex-1"></div>
                            <button><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></button>
                            <button><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg></button>
                        </div>
                    </div>
                </div>

                {/* Content Tabs */}
                <div className="flex-1 bg-background p-6 lg:p-10">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            {currentLesson?.id}. {currentLesson?.title}
                        </h1>

                        <div className="flex border-b border-border/50 gap-8 mb-8">
                            <button className="pb-4 border-b-2 border-brand text-white font-medium">Overview</button>
                            <button className="pb-4 border-b-2 border-transparent text-muted hover:text-white transition-colors">Resources</button>
                            <button className="pb-4 border-b-2 border-transparent text-muted hover:text-white transition-colors">Discussions</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="md:col-span-2">
                                <h3 className="text-lg font-bold text-white mb-4">Lesson Overview</h3>
                                <p className="text-muted leading-relaxed mb-6">
                                    In this lesson, we will cover the foundational concepts of setting up your charting platform correctly. The way you view the market significantly impacts your psychology and decision-making process.
                                </p>
                                <p className="text-muted leading-relaxed">
                                    Avoid cluttered charts with too many indicators. We rely on clean price action, which means your charts should only highlight key structural levels, liquidity pools, and significant candlestick formations.
                                </p>

                                <div className="mt-8 flex gap-4">
                                    <Button variant="secondary" className="flex-1">Previous Lesson</Button>
                                    <Button variant="primary" className="flex-1">Complete & Continue</Button>
                                </div>
                            </div>

                            <div className="md:col-span-1">
                                <div className="bg-surface/50 border border-border rounded-xl p-5">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="font-bold text-white">My Notes</h3>
                                        <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">Save</Button>
                                    </div>
                                    <textarea
                                        className="w-full h-48 bg-background border border-border/50 rounded-lg p-3 text-sm text-foreground focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand resize-none placeholder:text-muted/50"
                                        placeholder="Type your notes here... They will be saved securely for this lesson."
                                        value={notes}
                                        onChange={(e) => setNotes(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
