import React from 'react';
import { ArrowRight, RefreshCw, TrendingUp, ShieldCheck, CircleHelp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Platform = () => {
    return (
        <div className="pt-24 min-h-screen bg-white bg-[radial-gradient(circle_at_0%_0%,#a855f7_0%,transparent_45%),radial-gradient(circle_at_100%_100%,#a855f7_0%,transparent_45%)]">
            <div className="container mx-auto px-6 py-12 md:py-20">

                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-8">
                        <span className="w-4 h-4 rounded-full bg-purple-600 flex items-center justify-center text-white text-[10px]">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-2 h-2"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                        </span>
                        System Intelligence
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-8 tracking-tight">
                        It gets smarter every day
                    </h1>

                    <p className="text-xl text-gray-500 leading-relaxed">
                        Outmate isn't a static tool. It observes outcomes, learns from closed deals, and refines its own scoring algorithms automatically.
                    </p>
                </div>

                {/* Features Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            title: "Feedback Loops",
                            desc: "Every \"closed lost\" reason feeds back into the qualification engine to refine future matching.",
                            icon: RefreshCw,
                            color: "bg-purple-100 text-purple-600"
                        },
                        {
                            title: "Conversion Optimization",
                            desc: "Automatically adjusts outreach timing based on highest engagement windows for your specific audience.",
                            icon: TrendingUp,
                            color: "bg-blue-100 text-blue-600"
                        },
                        {
                            title: "Data Hygiene",
                            desc: "Continuously verifies emails and contact info to keep bounce rates near zero.",
                            icon: ShieldCheck,
                            color: "bg-indigo-100 text-indigo-600"
                        }
                    ].map((feature, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:transform hover:-translate-y-1 transition-all duration-300 group">
                            <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* FAQ / Support Section Teaser */}
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider">
                            Support
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors">
                            <span className="font-medium text-lg text-gray-900">How does Outmate source its contact data?</span>
                            <CircleHelp className="w-6 h-6 text-purple-600" />
                        </button>
                    </div>

                    <div className="text-center mt-12">
                        <Link to="/book-demo" className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all" target="_blank" rel="noopener noreferrer">
                            See how it works <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Platform;
