import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BookDemo = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 order-2 lg:order-1">
                        <h1 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 mb-8 leading-tight">
                            Ready to See<br />Outmate in Action?
                        </h1>
                        <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg">
                            Outmate turns all of your online and offline GTM data into real-time signals, AI-powered recommendations, and the industry's best-performing account scoring.
                        </p>

                        <Link to="/book-demo" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-all flex items-center gap-2 text-lg shadow-xl shadow-gray-200 w-fit" target="_blank" rel="noopener noreferrer">
                            Book a demo <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    {/* Right Visual - Dark Dashboard Mockup */}
                    <div className="order-1 lg:order-2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        <div className="bg-[#0F1115] rounded-xl p-4 shadow-2xl border border-gray-800 rotate-1 hover:rotate-0 transition-transform duration-700 ease-out">
                            {/* Window Config */}
                            <div className="flex items-center gap-2 mb-4 px-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                            </div>

                            {/* Dashboard Content */}
                            <div className="flex gap-4 h-[400px]">
                                {/* Sidebar */}
                                <div className="w-16 flex flex-col items-center gap-6 pt-4 border-r border-gray-800/50">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600"></div>
                                    <div className="w-8 h-8 rounded-lg bg-gray-800/50"></div>
                                    <div className="w-8 h-8 rounded-lg bg-gray-800/50"></div>
                                    <div className="w-8 h-8 rounded-lg bg-gray-800/50"></div>
                                </div>

                                {/* Main Area */}
                                <div className="flex-1 overflow-hidden">
                                    {/* Header Stats */}
                                    <div className="flex gap-4 mb-6">
                                        <div className="bg-gray-800/30 p-4 rounded-lg flex-1 border border-gray-800">
                                            <div className="text-gray-400 text-xs mb-1">Pipeline Value</div>
                                            <div className="text-white font-bold text-lg">$2.4M</div>
                                        </div>
                                        <div className="bg-gray-800/30 p-4 rounded-lg flex-1 border border-gray-800">
                                            <div className="text-gray-400 text-xs mb-1">Win Rate</div>
                                            <div className="text-green-400 font-bold text-lg">27.5%</div>
                                        </div>
                                    </div>

                                    {/* Chart */}
                                    <div className="h-48 bg-gray-800/20 rounded-lg border border-gray-800 mb-4 relative overflow-hidden p-4">
                                        <div className="absolute inset-0 flex items-end justify-between px-4 pb-0 opacity-20">
                                            {[...Array(12)].map((_, i) => (
                                                <div key={i} className="w-px h-full bg-gray-700 border-dashed"></div>
                                            ))}
                                        </div>
                                        {/* Fake Line Chart SVG */}
                                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                                            <path d="M0 30 C 10 25, 20 35, 30 15 S 50 5, 60 20 S 80 25, 100 10" fill="none" stroke="#8b5cf6" strokeWidth="2" />
                                            <path d="M0 35 C 15 38, 25 30, 35 25 S 55 20, 70 30 S 90 15, 100 20" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.7" />
                                            {/* Area fill for purple */}
                                            <path d="M0 30 C 10 25, 20 35, 30 15 S 50 5, 60 20 S 80 25, 100 10 V 40 H 0 Z" fill="url(#gradient)" opacity="0.1" />
                                            <defs>
                                                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="0%" stopColor="#8b5cf6" />
                                                    <stop offset="100%" stopColor="transparent" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>

                                    {/* List */}
                                    <div className="space-y-2">
                                        {[
                                            { name: "TechCorp", score: "98%", status: "Hot Lead" },
                                            { name: "Global Systems", score: "85%", status: "Warm" },
                                            { name: "Innovate Ltd", score: "72%", status: "Nurture" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-800/50">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-purple-500' : i === 1 ? 'bg-orange-500' : 'bg-gray-500'}`}></div>
                                                    <div className="text-gray-300 text-sm font-medium">{item.name}</div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className="text-green-400 text-xs font-bold">{item.score} Match</div>
                                                    <div className="text-gray-500 text-xs px-2 py-0.5 bg-gray-800 rounded">{item.status}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDemo;
