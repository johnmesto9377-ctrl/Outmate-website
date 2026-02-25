import React from 'react';
import Navbar from '../components/Navbar';

import { LayoutGrid, Database, MailCheck, Layers, Clock, BarChart, Activity, Satellite, Filter, Wand2, Zap, RefreshCw, Share2, Target, UserX, TrendingUp, Check, GitBranch, Mail, ShieldCheck, Plus, ArrowUpRight } from 'lucide-react';
import signalsDataImg from '../assets/signals-data.png';
import automationGraphImg from '../assets/automation-graph.png';
import finalCtaImg from '../assets/final-cta-dashboard.png';

const Feature = () => {
    React.useEffect(() => {
        document.title = 'Features - Outmate';
    }, []);

    return (
        <div className="pt-0 pb-24 px-6 md:px-12 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200/40 via-white to-white min-h-screen">
            <div className="max-w-[1200px] mx-auto bg-white/50 border border-white/50 relative z-10 backdrop-blur-3xl">
                <Navbar isContained={true} />

                <main className="pt-32">
                    {/* Core GTM Engine Section (Hero) - Split Layout */}
                    <section className="relative px-6 md:px-12 pb-24">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Find, qualify, and engage<br />leads on <span className="text-purple-600 italic">autopilot</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-500 mb-12 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate is an agentic GTM platform that turns raw data into real pipeline. Replaces hours of manual prospecting with an automated system.
                                </p>

                                {/* Feature List */}
                                <div className="space-y-4 text-lg font-medium text-gray-600 mb-12">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center"><Check size={14} /></div>
                                        Centralized Dashboard
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center"><Check size={14} /></div>
                                        Real-time Enrichment
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center"><Check size={14} /></div>
                                        Email Verification
                                    </div>
                                </div>

                                <button className="bg-gray-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
                                    Start Free Trial <ArrowUpRight size={18} />
                                </button>
                            </div>

                            {/* Right Visual - Live Pipeline Feed Mockup */}
                            <div className="relative z-10">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-purple-200/30 blur-[100px] -z-10 rounded-full"></div>
                                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700">
                                    <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                        </div>
                                        <div className="text-xs font-mono text-gray-400">pipeline_feed.live</div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Live Feed
                                            </h3>
                                            <span className="text-xs text-gray-400">Updating...</span>
                                        </div>
                                        <div className="space-y-4">
                                            {[
                                                { name: 'Gautam Singh', role: 'Founder', company: 'Outmate', status: 'Qualified', color: 'green', time: '2m' },
                                                { name: 'Abhay', role: 'CEO', company: 'Outmate', status: 'New Lead', color: 'blue', time: '5m' }
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer border border-transparent hover:border-gray-100 group">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-${item.color}-100 to-${item.color}-200 flex items-center justify-center text-${item.color}-600 font-bold`}>
                                                            {item.name.charAt(0)}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-gray-900 text-sm">{item.name}</div>
                                                            <div className="text-xs text-gray-500">{item.role} @ {item.company}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className={`block px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider bg-${item.color}-50 text-${item.color}-600 mb-1`}>{item.status}</span>
                                                        <span className="text-[10px] text-gray-400">{item.time} ago</span>
                                                    </div>
                                                </div>
                                            ))}
                                            {/* Simulate more items blurred */}
                                            <div className="space-y-3 opacity-40 blur-[1px]">
                                                <div className="h-14 bg-gray-50 rounded-xl w-full"></div>
                                                <div className="h-14 bg-gray-50 rounded-xl w-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Problem with Modern GTM Section */}
                    <section className="py-24 px-6 md:px-12 bg-gray-50/50">
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs tracking-wider uppercase mb-8">
                                The Problem with Modern GTM
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                Your data is everywhere.<br />Your pipeline isn't.
                            </h2>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                Revenue teams are drowning in tools but starving for insights. You're spending more time managing data than closing deals.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                            {[
                                { icon: <Layers size={24} />, title: 'Fragmented Intelligence', desc: 'Intent data lives in one tool, contact info in another, and CRM is always outdated.' },
                                { icon: <Clock size={24} />, title: 'Manual Grunt Work', desc: 'Reps spend 70% of their week researching and entering data instead of selling.' },
                                { icon: <BarChart size={24} />, title: 'Static Lists', desc: 'By the time you build a list, the buying window has already potential closed.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl active:scale-95 transition-all duration-200 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-gray-900 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors" style={{ fontFamily: 'SN Pro, sans-serif' }}>{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Always On - Process Flow Section */}
                    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
                        <div className="text-center mb-20">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-600 font-bold text-xs tracking-wider uppercase mb-8">
                                <Activity size={14} className="inline mr-1" /> Always On
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                Turn Raw Signals into<br />Revenue Automatically
                            </h2>
                            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                Outmate runs continuously in the background, transforming scattered data points into sales-ready pipeline without you lifting a finger.
                            </p>
                        </div>

                        <div className="relative max-w-6xl mx-auto">
                            {/* Connecting Line */}
                            <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[1px] bg-purple-400 z-0"></div>

                            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                                {[
                                    { icon: <Satellite size={24} />, step: 'STEP 01', title: 'Ingest Signals', desc: 'Aggregates data from your CRM, intent tools, and social channels in real-time.' },
                                    { icon: <Filter size={24} />, step: 'STEP 02', title: 'Qualify Intent', desc: 'Scores behavior instantly to separate window shoppers from ready buyers.' },
                                    { icon: <Wand2 size={24} />, step: 'STEP 03', title: 'Enrich Leads', desc: 'Fills in missing contact details and context automatically.' },
                                    { icon: <Zap size={24} />, step: 'STEP 04', title: 'Trigger Action', desc: 'Launches personalized sequences or notifies reps the moment intent spikes.' },
                                    { icon: <RefreshCw size={24} />, step: 'STEP 05', title: 'Optimize Loop', desc: 'Learns from every win and loss to improve future targeting.' }
                                ].map((step, i) => (
                                    <div key={i} className="flex flex-col items-center text-center relative bg-transparent px-2">
                                        <div className="w-20 h-20 rounded-2xl border border-gray-100 bg-white flex items-center justify-center text-purple-600 mb-6 shadow-lg z-20 transition-transform hover:scale-110 duration-300 relative">
                                            {step.icon}
                                        </div>
                                        <div className="text-[10px] font-bold text-purple-600 uppercase tracking-widest mb-2">{step.step}</div>
                                        <h3 className="font-bold text-gray-900 mb-3 text-lg" style={{ fontFamily: 'SN Pro, sans-serif' }}>{step.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed font-medium">{step.desc}</p>

                                        {/* Mobile Connector */}
                                        {i < 4 && <div className="lg:hidden absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[1px] h-6 bg-purple-400"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Platform Overview Section */}
                    <section id="platform-overview" className="py-32 px-6 md:px-12 bg-gray-50/50">
                        {/* Header */}
                        <div className="text-center mb-16 max-w-4xl mx-auto">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs tracking-wider uppercase mb-8">
                                <Layers size={14} className="inline mr-1" /> Platform Overview
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                The complete engine for<br />modern revenue teams
                            </h2>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                Outmate replaces fragmented tools with a single, intelligent system that turns raw signals into closed-won revenue.
                            </p>
                        </div>

                        {/* Tabs Navigation (Visual Only) */}
                        {/* Tabs Navigation (Visual Only) */}
                        <div className="flex justify-center flex-wrap gap-4 mb-20">
                            {[
                                { label: 'Overview', id: 'platform-overview' },
                                { label: 'Signals & Data', id: 'signals' },
                                { label: 'Scoring', id: 'scoring' },
                                { label: 'Automation', id: 'automation' },
                                { label: 'Intelligence', id: 'intelligence' }
                            ].map((tab, i) => (
                                <button
                                    key={i}
                                    onClick={() => document.getElementById(tab.id)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="px-6 py-2 rounded-full text-sm font-medium transition-all text-gray-500 hover:bg-purple-50 hover:text-purple-700 cursor-pointer"
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Signals & Data Content */}
                        <div id="signals" className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 font-bold text-xs tracking-wider uppercase mb-6">
                                    Signals & Data
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Unified Data Ingestion
                                </h3>
                                <p className="text-lg text-gray-500 mb-10 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Stop jumping between tabs. Outmate aggregates every relevant buying signal into a single, real-time feed.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { icon: <Database size={20} />, title: 'Universal Sync', desc: 'Connects with CRM, CSVs, and intent providers instantly.' },
                                        { icon: <Share2 size={20} />, title: 'Social Listening', desc: 'Tracks executive changes, funding news, and hiring sprees.' },
                                        { icon: <Activity size={20} />, title: 'Intent Monitoring', desc: 'Identifies companies actively researching your solution.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'SN Pro, sans-serif' }}>{item.title}</h4>
                                                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Image - Updated to User Provided Image */}
                            <div className="relative">
                                <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                                    <img src={signalsDataImg} alt="Signals & Data Dashboard" className="w-full h-auto" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Qualification Section */}
                    <section id="scoring" className="py-16 md:py-32 px-6 md:px-12 bg-white border-t border-gray-100">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Left Visual - Lead Score */}
                            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 flex items-center justify-center">
                                <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-md">
                                    <div className="flex justify-between items-center mb-8">
                                        <h3 className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'SN Pro, sans-serif' }}>Lead Score</h3>
                                    </div>
                                    <div className="flex justify-center mb-8 relative">
                                        <div className="relative w-32 h-32 md:w-40 md:h-40">
                                            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                                                {/* Background Circle */}
                                                <circle cx="50" cy="50" r="45" stroke="#f3f4f6" strokeWidth="8" fill="transparent" />
                                                {/* Progress Path (94%) */}
                                                <path d="M 50,5 A 45,45 0 1,1 9.5,74" fill="none" stroke="#3b82f6" strokeWidth="8" strokeLinecap="round" />
                                            </svg>
                                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                                <div className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: 'SN Pro, sans-serif' }}>94</div>
                                                <div className="text-[10px] md:text-xs text-gray-400 font-medium">/100</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        {['Qualification', 'Qualification criticas', 'Role relevance', 'Behavioral intent'].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded flex items-center justify-center ${i === 0 ? 'bg-blue-500 text-white' : 'border border-gray-300 text-transparent'}`}>
                                                    <Check size={14} />
                                                </div>
                                                <span className={`text-sm ${i === 0 ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Content */}
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs tracking-wider uppercase mb-6">
                                    Qualification
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    AI-Powered Scoring
                                </h2>
                                <p className="text-lg text-gray-500 mb-10 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Don't waste time on bad leads. Outmate's engine predicts conversion probability before a rep ever touches the lead.
                                </p>

                                <div className="space-y-8">
                                    {[
                                        { icon: <Target size={24} />, title: 'Fit Prediction', desc: 'Matches leads against your best historical customers.' },
                                        { icon: <UserX size={24} />, title: 'Auto-Disqualification', desc: 'Filters out competitors, students, and bad-fit industries.' },
                                        { icon: <TrendingUp size={24} />, title: 'Behavioral Weighting', desc: 'Scores higher for high-intent actions like pricing page visits.' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-blue-600 shadow-sm">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'SN Pro, sans-serif' }}>{item.title}</h3>
                                                <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Automation Section */}
                    <section id="automation" className="py-16 md:py-32 px-6 md:px-12 bg-gray-50/50">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Left Content */}
                            <div>
                                <div className="inline-block px-3 py-1 rounded-full bg-green-50 text-green-600 font-bold text-xs tracking-wider uppercase mb-6">
                                    Automation
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Intelligent Workflows
                                </h2>
                                <p className="text-lg text-gray-500 mb-10 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Trigger complex, multi-channel sequences the moment intent is verified. No manual entry required.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { icon: <Zap size={24} />, title: 'Instant Triggers', desc: 'Launch campaigns within seconds of signal detection.' },
                                        { icon: <GitBranch size={24} />, title: 'Branching Logic', desc: 'Route leads differently based on size, role, or intent source.' },
                                        { icon: <Mail size={24} />, title: 'Smart Personalization', desc: 'Injects relevant context into every email automatically.' }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600 mt-1">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-gray-900 mb-1" style={{ fontFamily: 'SN Pro, sans-serif' }}>{item.title}</h3>
                                                    <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>{item.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Visual - Workflow Graph */}
                            <div className="relative">
                                <div className="rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white p-2">
                                    <img src={automationGraphImg} alt="Workflow Automation Graph" className="w-full h-auto rounded-xl" />
                                </div>
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex gap-3 items-center border border-green-100 animate-bounce-slow">
                                    <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <Zap size={18} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400 font-medium uppercase">Active Flows</div>
                                        <div className="text-xl font-bold text-gray-900 font-mono">248</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* System Intelligence Section */}
                    <section id="intelligence" className="py-16 md:py-32 px-6 md:px-12 bg-white border-t border-gray-100">
                        <div className="text-center mb-20 max-w-4xl mx-auto">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-bold text-xs tracking-wider uppercase mb-8">
                                System Intelligence
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                It gets smarter every day
                            </h2>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                Outmate isn't a static tool. It observes outcomes, learns from closed deals, and refines its own scoring algorithms automatically.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { icon: <RefreshCw size={24} />, title: 'Feedback Loops', desc: 'Every "closed lost" reason feeds back into the qualification engine.' },
                                { icon: <TrendingUp size={24} />, title: 'Conversion Optimization', desc: 'Automatically adjusts outreach timing based on highest engagement windows.' },
                                { icon: <ShieldCheck size={24} />, title: 'Data Hygiene', desc: 'Continuously verifies emails and contact info to keep bounce rates near zero.' }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: 'SN Pro, sans-serif' }}>{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="py-32 px-6 md:px-12 bg-gray-50/50">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            {/* Left Content */}
                            <div className="lg:col-span-5">
                                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs tracking-wider uppercase mb-8">
                                    Support
                                </div>
                                <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Frequently asked questions
                                </h2>
                                <p className="text-lg text-gray-500 mb-10 leading-relaxed" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Everything you need to know about the platform, billing, and how we handle your data.
                                </p>

                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 text-lg mb-2">Still have questions?</h3>
                                    <p className="text-gray-500 mb-6 text-sm">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                                    <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-black transition-colors">
                                        Get in touch
                                    </button>
                                </div>
                            </div>

                            {/* Right Accordion */}
                            <div className="lg:col-span-7 space-y-4">
                                {[
                                    { q: 'How does Outmate source its contact data?', a: 'We use a proprietary real-time waterfall enrichment engine. Outmate aggregates data from 15+ premium providers and verifies it live before you ever see it.' },
                                    { q: 'Can I export data to Salesforce and HubSpot?', a: 'Yes, we have native 2-way integrations with both Salesforce and HubSpot, as well as Pipedrive and Outreach.' },
                                    { q: 'Is it GDPR and CCPA compliant?', a: 'Absolutely. We take data privacy seriously and are fully compliant with all major data protection regulations.' },
                                    { q: 'Do you offer custom enterprise plans?', a: 'Yes, for teams larger than 20 seats we offer custom pricing, dedicated support, and SLA guarantees.' }
                                ].map((item, i) => (
                                    <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                                        <button className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors group">
                                            <span className="font-bold text-gray-900" style={{ fontFamily: 'SN Pro, sans-serif' }}>{item.q}</span>
                                            <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 group-hover:bg-gray-200 transition-colors">
                                                <Plus size={14} />
                                            </span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Final CTA Section */}
                    <section className="py-32 px-6 md:px-12 bg-white overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            {/* Left Content */}
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>
                                    Ready to See<br />Outmate in Action?
                                </h2>
                                <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-lg" style={{ fontFamily: 'Calibri, sans-serif' }}>
                                    Outmate turns all of your online and offline GTM data into real-time signals, AI-powered recommendations, and the industry's best-performing account scoring.
                                </p>
                                <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-black transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
                                    Book a demo
                                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </div>

                            {/* Right Visual */}
                            <div className="relative">
                                {/* Decorator Blob */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-blue-200 rounded-2xl blur-2xl opacity-50"></div>
                                <div className="relative rounded-2xl border border-gray-200 shadow-2xl overflow-hidden bg-white">
                                    {/* using user provided image */}
                                    <img src={finalCtaImg} alt="Outmate Dashboard Dark Mode" className="w-full h-auto shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </section>
                </main>


            </div>
        </div>
    );
};

export default Feature;
