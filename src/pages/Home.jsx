import React from 'react';
import { ArrowRight, ArrowUpRight, Activity, GitMerge, ShieldCheck, Maximize, Check, Search, Shield, Zap, BarChart, Settings, Users, Layers, Clock, Satellite, Filter, Wand2, RefreshCw, TrendingUp, Target, Factory, Briefcase, User, CornerDownLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const Home = () => {
    const [activeTab, setActiveTab] = React.useState('signals');

    return (
        <div className="pt-0 pb-24 px-6 md:px-12 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200/40 via-white to-white">
            <div className="max-w-[1200px] mx-auto bg-white/50 border border-white/50 ring-1 ring-gray-900/5 relative z-10 backdrop-blur-3xl">
                <Navbar isContained={true} />

                {/* Hero Section */}
                <section className="relative px-6 pt-48 pb-20 text-center">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-3 py-1 mb-8">
                            <span className="flex h-2 w-2 rounded-full bg-purple-600"></span>
                            <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Built for Modern B2B & GTM teams</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-6 text-gray-900 leading-[1.1] tracking-tight">
                            Not Another Database. A Lead<br />
                            Engine Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Pipeline Growth.</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Turn your ICP into qualified leads — no filters,<br />
                            no spreadsheets, no manual work.
                        </p>

                        {/* Prompt Interface */}
                        <div className="max-w-3xl mx-auto bg-[#1a1a1a] rounded-2xl p-6 shadow-2xl text-left transform hover:scale-[1.01] transition-transform duration-500">
                            {/* Category Tags */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <button className="flex items-center gap-2 bg-white text-gray-900 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-gray-100 transition-colors">
                                    <TrendingUp size={14} /> Funding / Growth
                                </button>
                                <button className="flex items-center gap-2 bg-white text-gray-900 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-gray-100 transition-colors">
                                    <Target size={14} /> ICP / Sales
                                </button>
                                <button className="flex items-center gap-2 bg-white text-gray-900 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-gray-100 transition-colors">
                                    <Factory size={14} /> Industry / Niche
                                </button>
                                <button className="flex items-center gap-2 bg-white text-gray-900 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-gray-100 transition-colors">
                                    <Briefcase size={14} /> Hiring / Intent Signals
                                </button>
                                <button className="flex items-center gap-2 bg-white text-gray-900 px-3 py-1.5 rounded-md text-xs font-bold hover:bg-gray-100 transition-colors">
                                    <User size={14} /> Founder / Persona Based
                                </button>
                            </div>

                            {/* Input Area */}
                            <div className="bg-white rounded-xl p-4 relative min-h-[120px]">
                                <textarea
                                    className="w-full h-full text-gray-500 text-lg resize-none outline-none bg-transparent font-medium"
                                    placeholder="Help me find the top funded SaaS startups in the US that raised Series A or B in the last 2 years."
                                    readOnly
                                />
                                <div className="absolute bottom-3 right-3">
                                    <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
                                        <CornerDownLeft size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Trusted By */}
                        <div className="mt-20">
                            <p className="text-sm font-medium text-gray-500 mb-8">Trusted by the best</p>
                            <div className="flex flex-wrap justify-center items-center gap-12 transition-all duration-500">
                                <span className="text-2xl font-bold font-sans text-orange-500 flex items-center gap-1"><span className="text-3xl">*</span>zapier</span>
                                <span className="text-2xl font-bold font-sans text-blue-600 italic">Razorpay</span>
                                <span className="text-2xl font-bold font-sans text-purple-600 flex items-center gap-1">❄️ loom</span>
                                <span className="text-2xl font-bold font-sans text-pink-600">pendo</span>
                                <span className="text-2xl font-bold font-sans text-black flex items-center gap-1"><div className="w-6 h-6 bg-black rounded-sm"></div> INTERCOM</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Common GTM Pain Points Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <span className="w-6 h-1.5 rounded-full bg-purple-600"></span>
                                    <span className="text-gray-900 font-medium">Common GTM pain points</span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-[1.1]" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    If even one of these feels familiar, <br />
                                    Outmate is built for you
                                </h2>

                                <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Modern GTM stacks promise automation, but most teams end up with more tools, more complexity, and more manual work.
                                </p>

                                <Link to="/book-demo" className="bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all inline-flex items-center gap-2" target="_blank" rel="noopener noreferrer">
                                    Book a demo
                                    <ArrowRight size={20} />
                                </Link>
                            </div>

                            {/* Right Content - Cards Stack */}
                            <div className="relative h-[500px] flex items-center justify-center lg:justify-end">
                                {/* Scrollable Container */}
                                <div className="h-full w-full overflow-y-auto pr-2 space-y-6 custom-scrollbar">
                                    {[...Array(6)].map((_, index) => (
                                        <div key={index} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transform transition-all hover:scale-[1.01]">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">Pain Point Template #{index + 1}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <style jsx>{`
                                    .custom-scrollbar::-webkit-scrollbar {
                                        width: 6px;
                                    }
                                    .custom-scrollbar::-webkit-scrollbar-track {
                                        background: transparent;
                                    }
                                    .custom-scrollbar::-webkit-scrollbar-thumb {
                                        background-color: rgba(156, 163, 175, 0.3);
                                        border-radius: 20px;
                                    }
                                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                                        background-color: rgba(156, 163, 175, 0.5);
                                    }
                                `}</style>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy Comparison Section */}
                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                Most GTM tools optimize for power.<br />
                                We optimize for progress.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Left Card: The Uncomfortable Truth */}
                            <div className="bg-gray-100 rounded-3xl p-10 md:p-12 border border-gray-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'SN Pro, sans-serif' }}>The uncomfortable truth</h3>

                                <p className="text-gray-500 font-medium mb-8">Most modern GTM tools are:</p>

                                <div className="space-y-6 mb-12">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[20px]"><div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-xs font-bold">!</div></div>
                                        <p className="text-gray-900 font-medium"><span className="font-bold">Powerful</span>, but complex</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[20px]"><div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-xs font-bold">!</div></div>
                                        <p className="text-gray-900 font-medium"><span className="font-bold">Flexible</span>, but fragile</p>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[20px]"><div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-xs font-bold">!</div></div>
                                        <p className="text-gray-900 font-medium"><span className="font-bold">Smart</span>, but expensive to operate</p>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-200/50">
                                    <p className="text-gray-500 font-medium text-lg leading-relaxed">
                                        They turn GTM into an <span className="text-gray-900 font-bold">engineering project</span>, not a growth system.
                                    </p>
                                </div>
                            </div>

                            {/* Right Card: Outmate Philosophy */}
                            <div className="bg-white rounded-3xl p-10 md:p-12 border-t-4 border-t-purple-500 shadow-xl shadow-purple-100/50 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'SN Pro, sans-serif' }}>Outmate is built for the</h3>
                                    <h3 className="text-2xl font-bold text-purple-600 mb-8" style={{ fontFamily: 'SN Pro, sans-serif' }}>opposite philosophy</h3>

                                    <p className="text-gray-500 font-medium mb-8 leading-relaxed">
                                        If you checked even one of these, Outmate replaces tool chaos with:
                                    </p>

                                    <div className="space-y-5 mb-12">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 min-w-[20px] text-purple-600"><Check size={20} /></div>
                                            <p className="text-gray-700 font-medium">One unified GTM system</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 min-w-[20px] text-purple-600"><Zap size={20} /></div>
                                            <p className="text-gray-700 font-medium">Built-in signals + enrichment</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 min-w-[20px] text-purple-600"><RefreshCw size={20} /></div>
                                            <p className="text-gray-700 font-medium">AI agents that actually run workflows</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 min-w-[20px] text-purple-600"><Layers size={20} /></div>
                                            <p className="text-gray-700 font-medium">25+ pre-built GTM workflows</p>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 min-w-[20px] text-purple-600"><Wand2 size={20} /></div>
                                            <p className="text-gray-700 font-medium">A co-pilot that adapts as your market changes</p>
                                        </div>
                                    </div>

                                    <div className="pt-8 border-t border-gray-100">
                                        <p className="text-gray-900 font-medium text-lg mb-4">
                                            So instead of learning tools, you just <span className="font-bold">run growth.</span>
                                        </p>
                                        <Link to="/book-demo" className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all" target="_blank" rel="noopener noreferrer">
                                            Meet your GTM co-pilot <ArrowRight size={18} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Integration / How it works Section */}
                <section className="py-24 bg-white relative overflow-hidden">
                    <div className="container mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="w-6 h-1.5 rounded-full bg-purple-600"></span>
                            <span className="text-gray-900 font-medium">How it works</span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight max-w-2xl mx-auto" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                            If even one of these feels familiar,<br />
                            Outmate is built for you
                        </h2>

                        <p className="text-xl text-gray-500 mb-20 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Calibri, sans-serif' }}>
                            Modern GTM stacks promise automation, but most teams end up with more tools, more complexity, and more manual work.
                        </p>

                        {/* Integration Visual */}
                        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
                            <img
                                src="/links.png"
                                alt="How Outmate works"
                                className="w-full h-auto max-w-[900px] object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* Feature 1: Core GTM Engine */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-24">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-700"></span>
                                Key features
                            </span>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">1</div>
                                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">Core GTM Engine</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Find, qualify, and engage<br />leads on autopilot
                                </h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate is an agentic GTM platform that helps revenue teams go from raw data to real pipeline. It replaces hours of manual prospecting with an automated system to discover high-intent accounts, enrich them with live insights, and activate outreach across channels — all from one place.
                                </p>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Built for teams who want to save time, reduce manual work, and focus on closing deals instead of building lists.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Centralized dashboard for leads, agents, and workflows</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Tables and lists for account segmentation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Email verification for clean, accurate contact data</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Powerful database with advanced ICP filters</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Real-time data enrichment</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/platform" className="text-gray-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Explore the Outmate platform <ArrowRight size={18} />
                                </Link>
                            </div>
                            <div className="relative">
                                {/* Placeholder for Dashboard Image */}
                                <div className="aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 shadow-xl overflow-hidden relative">
                                    <div className="absolute top-0 left-0 w-full h-8 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="p-8 mt-4 grid grid-cols-3 gap-4">
                                        <div className="col-span-1 bg-white rounded-lg h-32 shadow-sm"></div>
                                        <div className="col-span-1 bg-white rounded-lg h-32 shadow-sm"></div>
                                        <div className="col-span-1 bg-white rounded-lg h-32 shadow-sm"></div>
                                        <div className="col-span-3 bg-white rounded-lg h-48 shadow-sm"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 2: Signals & Data Intelligence */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                {/* Placeholder for Signals Network Image - Dark Theme */}
                                <div className="aspect-square bg-black rounded-2xl shadow-2xl overflow-hidden relative flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black opacity-50"></div>
                                    {/* Abstract Network */}
                                    <div className="relative w-full h-full border border-white/10 rounded-xl p-4">
                                        <div className="grid grid-cols-4 gap-4 h-full">
                                            {[...Array(16)].map((_, i) => (
                                                <div key={i} className={`rounded-full w-2 h-2 bg-purple-500 animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
                                            ))}
                                        </div>
                                        <svg className="absolute inset-0 w-full h-full opacity-30">
                                            <path d="M50,50 L200,200 M100,50 L50,200 M200,50 L100,200" stroke="#a855f7" strokeWidth="1" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">2</div>
                                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">Signals & Data Intelligence</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Real-time signals to find buyers before they convert
                                </h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate continuously tracks 4,000+ active signals across the web to surface companies showing real buying intent — based on funding, hiring, growth, and technology changes.
                                </p>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Instead of guessing who might buy, your team knows who is ready, right now.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Signals hub with funding, hiring, tech, and growth signals</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Lookalike and intent-based targeting</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Smart alerts for new opportunities</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Signal rules to auto-prioritize high-intent accounts</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Real-time company activity tracking</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/features" className="text-gray-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Explore signals hub <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 3: AI Agents & Co-Pilot */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">3</div>
                                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">AI Agents & Co-Pilot</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    AI agents and co-pilot for autonomous GTM Execution
                                </h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate comes with a library of AI agents and a built-in GTM co-pilot that handles research, qualification, and personalisation — so your team doesn't waste time doing repetitive work.
                                </p>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Think of it as an AI SDR and GTM strategist in one.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Agents library with pre-built GTM agents</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">GTM Co-Pilot for targeting and strategy</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Agent logs and training for full control</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Outmate Agent for autonomous prospecting</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Agent playground to design and test agents</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/agents" className="text-gray-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Meet your GTM co-pilot <ArrowRight size={18} />
                                </Link>
                            </div>
                            <div className="relative">
                                {/* Placeholder for Chat/Agent Interface */}
                                <div className="aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden p-6 flex flex-col">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                                            <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-gray-600">Searching for SaaS companies in California with &gt;$5M revenue...</div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-purple-600"></div>
                                            <div className="bg-gray-100 rounded-2xl rounded-tl-none p-3 max-w-[80%] text-sm text-gray-600">Found 142 matches. Analyzing intent signals...</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 h-12 border border-gray-200 rounded-full flex items-center px-4 text-gray-400 text-sm">Ask your co-pilot...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 4: Outreach & Workflows */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                {/* Placeholder for Outreach Workflow - Dark Theme */}
                                <div className="aspect-[4/3] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden relative p-6">
                                    <div className="w-full h-full border border-gray-700 rounded-lg flex flex-col">
                                        <div className="h-10 border-b border-gray-700 flex items-center px-4">
                                            <div className="w-24 h-4 bg-gray-700 rounded-full"></div>
                                        </div>
                                        <div className="p-4 space-y-4">
                                            <div className="flex gap-3 items-center">
                                                <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center text-white text-xs">L</div>
                                                <div className="h-2 w-32 bg-gray-700 rounded"></div>
                                            </div>
                                            <div className="pl-4 border-l border-gray-700 ml-4 py-4">
                                                <div className="flex gap-3 items-center">
                                                    <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white text-xs">E</div>
                                                    <div className="h-2 w-48 bg-gray-700 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">4</div>
                                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">Outreach & Workflows</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    From discovery to outreach — in one workflow
                                </h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate helps you move from leads to conversations without switching tools. With 25+ pre-built workflows, your team can launch outbound in minutes instead of weeks.
                                </p>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    No more building sequences from scratch. No more stitching tools together.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Email outreach with deliverability controls</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Multichannel sequencing</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">AI-powered personalization at scale</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">LinkedIn outreach automation</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">25+ pre-built GTM workflows</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/workflows" className="text-gray-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    Launch your first workflow <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature 5: Analytics & Integrations */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">5</div>
                                    <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">Analytics, Experiments & Integrations</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Measure impact and connect your entire stack
                                </h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate gives you full visibility into what’s working — so you can double down on what drives pipeline and stop wasting time on what doesn’t.
                                </p>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Seamlessly integrates with 200+ tools across CRMs, sales, marketing, data, and automation platforms.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Analytics across leads, agents, and campaigns</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Attribution for pipeline and revenue</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Unified reporting across GTM workflows</span>
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">Experiments for ICP and messaging testing</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <div className="w-2 h-2 mt-2 rounded-full bg-purple-600"></div>
                                            <span className="text-gray-700">200+ native integrations with GTM tools</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/integrations" className="text-gray-900 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                    View Integrations <ArrowRight size={18} />
                                </Link>
                            </div>
                            <div className="relative">
                                {/* Placeholder for Analytics Dashboard - Dark Theme */}
                                <div className="aspect-[4/3] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden p-6 text-white relative">
                                    <div className="grid grid-cols-2 gap-4 h-full">
                                        <div className="bg-gray-800 rounded-lg p-4">
                                            <div className="h-2 w-16 bg-gray-600 rounded mb-4"></div>
                                            <div className="h-20 bg-gray-700/50 rounded flex items-end justify-between px-2 pb-2">
                                                {[40, 60, 30, 80, 50].map((h, i) => <div key={i} style={{ height: `${h}%` }} className="w-2 bg-purple-500 rounded-t"></div>)}
                                            </div>
                                        </div>
                                        <div className="bg-gray-800 rounded-lg p-4">
                                            <div className="h-2 w-16 bg-gray-600 rounded mb-4"></div>
                                            <div className="flex flex-wrap gap-2">
                                                <div className="w-8 h-8 rounded bg-gray-700"></div>
                                                <div className="w-8 h-8 rounded bg-gray-700"></div>
                                                <div className="w-8 h-8 rounded bg-gray-700"></div>
                                                <div className="w-8 h-8 rounded bg-gray-700"></div>
                                            </div>
                                        </div>
                                        <div className="col-span-2 bg-gray-800 rounded-lg p-4">
                                            <div className="h-2 w-24 bg-gray-600 rounded mb-4"></div>
                                            <div className="w-full h-px bg-gray-700 mb-4"></div>
                                            <div className="h-2 w-full bg-gray-700/50 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI SDR Power Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                            Power your<br />AI SDR product
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                        Your 24/7 AI SDR companion
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif', fontSize: '17px' }}>
                                        Use Outmate as the data and signals layer for your AI SDR or agent product. Power prospecting, enrichment, and personalization with real-time intelligence.
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* USP & Value Proposition Section */}
                <section className="py-24 bg-gradient-to-br from-white via-purple-50/30 to-white">
                    <div className="container mx-auto px-6">
                        {/* Header Area */}
                        <div className="text-center mb-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/50 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
                                <div className="w-2 h-1 rounded-full bg-purple-600"></div> Key USP
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                Outmate as your partner for<br />GTM intelligence
                            </h2>
                            <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                Build your GTM on top of real-time signals, enriched data, and AI-powered automation. Outmate helps revenue teams identify the right accounts, understand buying intent, and activate outreach with accuracy and scale.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-16">
                                {[
                                    { icon: <Activity size={16} />, text: "4,000+ active signals" },
                                    { icon: <GitMerge size={16} />, text: "200+ data integrations" },
                                    { icon: <Users size={16} />, text: "Built for modern GTM teams" }
                                ].map((pill, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full border border-purple-200 bg-white text-purple-700 text-sm font-medium shadow-sm hover:border-purple-400 transition-colors cursor-default">
                                        {pill.icon}
                                        {pill.text}
                                    </div>
                                ))}
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                Why teams choose Outmate
                            </h3>
                        </div>

                        {/* 2x2 Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                {
                                    icon: <Target className="text-purple-600" size={24} />,
                                    bg: "bg-purple-100",
                                    title: "Better data coverage",
                                    desc: "Never miss high-intent accounts. Outmate continuously tracks thousands of sources to surface companies showing real buying signals."
                                },
                                {
                                    icon: <ShieldCheck className="text-purple-600" size={24} />,
                                    bg: "bg-purple-100",
                                    title: "Better data accuracy",
                                    desc: "From emails to company insights, Outmate enriches and verifies data so your team always works with clean, reliable information."
                                },
                                {
                                    icon: <Maximize className="text-purple-600" size={24} />,
                                    bg: "bg-orange-100",
                                    title: "Flexible & scalable",
                                    desc: "Use Outmate across sales, marketing, RevOps, and AI workflows — from early-stage teams to enterprise."
                                },
                                {
                                    icon: <Zap className="text-purple-600" size={24} />,
                                    bg: "bg-pink-100",
                                    title: "Built for speed",
                                    desc: "Replace hours of manual research with automated discovery, enrichment, and qualification."
                                }
                            ].map((card, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-purple-200 transition-all group">
                                    <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-6 text-purple-600 group-hover:scale-110 transition-transform`}>
                                        {card.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'SN Pro, sans-serif' }}>{card.title}</h4>
                                    <p className="text-gray-500 leading-relaxed text-sm" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                        {card.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Integrations Section - One System */}
                <section className="py-24 bg-gray-50/50 overflow-hidden">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    One system.<br />Hundreds of data sources.
                                </h2>
                                <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-md" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate connects to 200+ data and service partners to give you a unified intelligence layer across the GTM stack — so you don't need to manage multiple tools or vendors.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    {['Funding & company data', 'Hiring signals', 'Tech stack', 'Web activity', 'CRM data', 'Outreach platforms', 'Enrichment tools', 'AI models'].map((tag, i) => (
                                        <span key={i} className="px-4 py-2 rounded-lg border border-purple-200 bg-white text-gray-600 text-sm font-medium hover:border-purple-400 hover:text-purple-700 transition-colors cursor-default shadow-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                {/* Data Sources Image */}
                                <div className="relative w-full flex items-center justify-center">
                                    <img
                                        src="/one.png"
                                        alt="One system, hundreds of data sources"
                                        className="w-full h-auto max-w-[500px] object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Points Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                Access thousands of real-time data points
                            </h2>
                            <p className="text-gray-500 text-xl max-w-2xl mx-auto" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                Outmate continuously enriches your leads with structured insights.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                "Company size and headcount", "Funding rounds and investors", "Hiring activity and job changes", "Technology stack",
                                "Website traffic and engagement", "ICP match score and lookalikes", "Role changes and decision-makers", "Company news and updates"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 group">
                                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full border border-purple-200 flex items-center justify-center text-purple-600 bg-purple-50 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                        <Check size={12} />
                                    </div>
                                    <span className="text-gray-900 font-medium text-sm leading-tight group-hover:text-purple-700 transition-colors" style={{ fontFamily: 'SN Pro, sans-serif' }}>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium border border-green-100">
                                <RefreshCw className="animate-spin" size={14} /> All updated automatically, in real time.
                            </span>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section - Ready to See Outmate */}
                <section className="py-24 bg-gradient-to-br from-purple-50 to-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-100/50 to-transparent -z-10"></div>
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/3">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Ready to See<br />Outmate in Action?
                                </h2>
                                <p className="text-gray-500 text-lg mb-8 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate turns all of your online and offline GTM data into real-time signals, AI-powered recommendations, and the industry's best-performing account scoring.
                                </p>
                                <button className="group bg-gray-900 text-white pl-6 pr-4 py-3 rounded-lg font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                                    Book a demo <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" size={18} />
                                </button>
                            </div>

                            <div className="lg:w-2/3 w-full">
                                <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 aspect-video group perspective-1000">
                                    {/* Dashboard Image / Mockup Construction */}
                                    <div className="absolute inset-0 bg-gray-900 flex flex-col p-4 opacity-100">
                                        {/* Header */}
                                        <div className="h-8 border-b border-gray-800 flex items-center justify-between mb-4 px-2">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                            </div>
                                            <div className="h-4 w-1/3 bg-gray-800 rounded-full mx-auto"></div>
                                        </div>
                                        {/* Dashboard Body */}
                                        <div className="flex gap-4 h-full">
                                            <div className="w-16 bg-gray-800/50 rounded-lg h-full flex flex-col gap-4 p-2 items-center pt-4">
                                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-8 h-8 rounded bg-gray-700/50"></div>)}
                                            </div>
                                            <div className="flex-1 bg-gray-800/30 rounded-lg p-4 border border-gray-700/30 relative overflow-hidden">
                                                {/* Chart Mockup */}
                                                <div className="flex items-end justify-between h-48 gap-2 mb-4 px-2">
                                                    <svg className="w-full h-full text-purple-500 overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                                                        <path d="M0 45 C 10 40, 20 45, 30 30 S 50 10, 70 25 S 90 5, 100 15" fill="none" stroke="currentColor" strokeWidth="2" />
                                                        <path d="M0 48 C 10 45, 20 40, 30 42 S 50 35, 70 38 S 90 30, 100 35" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" />
                                                    </svg>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div className="h-24 bg-gray-800 rounded-lg border border-gray-700 p-3">
                                                        <div className="w-8 h-8 rounded-full bg-purple-900/50 mb-2"></div>
                                                        <div className="h-2 w-16 bg-gray-700 rounded mb-1"></div>
                                                        <div className="h-2 w-8 bg-gray-700 rounded"></div>
                                                    </div>
                                                    <div className="h-24 bg-gray-800 rounded-lg border border-gray-700 p-3">
                                                        <div className="w-8 h-8 rounded-full bg-green-900/50 mb-2"></div>
                                                        <div className="h-2 w-16 bg-gray-700 rounded mb-1"></div>
                                                        <div className="h-2 w-8 bg-gray-700 rounded"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-64 bg-gray-800/50 rounded-lg h-full border border-gray-700/50 p-4">
                                                <div className="h-4 w-24 bg-gray-700 rounded mb-6"></div>
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="flex gap-3 mb-4 last:mb-0">
                                                        <div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
                                                        <div className="flex-1">
                                                            <div className="h-2 w-full bg-gray-700 rounded mb-2"></div>
                                                            <div className="h-2 w-2/3 bg-gray-700/50 rounded"></div>
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
                </section>










            </div>
        </div>
    );
};

export default Home;
