import React from 'react';
import { Check, Mail, Database, LayoutGrid, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoreEngine = () => {
    return (
        <div className="pt-24 bg-gradient-to-b from-white to-purple-50 min-h-screen">
            <div className="container mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span> Core GTM Engine
                        </div>

                        <h1 className="text-5xl md:text-6xl font-serif font-medium text-gray-900 leading-[1.1]">
                            Find, qualify, and engage leads on <span className="text-primary italic">autopilot</span>
                        </h1>

                        <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                            Outmate is an agentic GTM platform that helps revenue teams go from raw data to real pipeline. It replaces hours of manual prospecting with an automated system to discover high-intent accounts.
                        </p>

                        <div className="space-y-6 pt-4">
                            {[
                                { title: "Centralized Dashboard", desc: "Unified view for leads, agents, and workflows in one place.", icon: LayoutGrid },
                                { title: "Real-time Data Enrichment", desc: "Automatically enhance every lead with 50+ data points.", icon: Database },
                                { title: "Email Verification", desc: "Ensure 99.9% deliverability with built-in validation.", icon: Mail }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="mt-1 w-10 h-10 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/book-demo" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-all flex items-center gap-2 mt-8 w-fit" target="_blank" rel="noopener noreferrer">
                            Book a demo <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Right Visual - Live Pipeline Feed */}
                    <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                        {/* Background Decoration */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/30 blur-[80px] rounded-full -z-10" />

                        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 relative">
                            {/* Floating Badge */}
                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-50 flex items-center gap-3 animate-bounce duration-[3000ms]">
                                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Database size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-gray-400 font-medium uppercase">Leads Enriched</div>
                                    <div className="text-xl font-bold text-gray-900">12,408</div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 text-lg">Live Pipeline Feed</h3>
                            </div>

                            <div className="space-y-4">
                                {/* Lead Item 1 */}
                                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="w-10 h-10 rounded-full bg-white border border-gray-100" alt="Sarah" />
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm">Sarah Jenkins</div>
                                            <div className="text-xs text-gray-500">VP of Sales @ TechFlow</div>
                                        </div>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">Qualified</span>
                                </div>

                                {/* Lead Item 2 */}
                                <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=David" className="w-10 h-10 rounded-full bg-white border border-gray-100" alt="David" />
                                        <div>
                                            <div className="font-bold text-gray-900 text-sm">David Chen</div>
                                            <div className="text-xs text-gray-500">Founder @ ScaleAI</div>
                                        </div>
                                    </div>
                                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-bold">New Lead</span>
                                </div>

                                {/* Signal Strength Bar */}
                                <div className="pt-4 mt-2">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className="text-gray-400">Signal Strength</span>
                                        <span className="text-purple-600 font-bold">High Intent</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Section 2: Signals & Data Intelligence */}
                <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 bg-black rounded-2xl p-8 shadow-2xl overflow-hidden min-h-[500px] flex items-center justify-center relative group">
                        {/* Network Graph Visual */}
                        <div className="absolute inset-0 bg-gray-900/50"></div>
                        <div className="relative z-10 w-full h-full flex items-center justify-center">
                            {/* Animated SVG Graph */}
                            <svg viewBox="0 0 400 400" className="w-full h-full text-purple-500">
                                {/* Lines */}
                                <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="1">
                                    <line x1="200" y1="200" x2="100" y2="100" />
                                    <line x1="200" y1="200" x2="300" y2="100" />
                                    <line x1="200" y1="200" x2="150" y2="300" />
                                    <line x1="200" y1="200" x2="250" y2="300" />
                                    <line x1="100" y1="100" x2="150" y2="50" />
                                    <line x1="300" y1="100" x2="350" y2="150" />
                                    <line x1="150" y1="300" x2="50" y2="250" />
                                    {/* Interconnections */}
                                    <line x1="100" y1="100" x2="300" y2="100" className="animate-pulse" />
                                    <line x1="150" y1="300" x2="250" y2="300" />
                                </g>
                                {/* Nodes */}
                                <circle cx="200" cy="200" r="8" fill="#a855f7" className="animate-ping" style={{ animationDuration: '3s' }} />
                                <circle cx="200" cy="200" r="8" fill="#a855f7" />

                                <circle cx="100" cy="100" r="5" fill="#ec4899" />
                                <circle cx="300" cy="100" r="5" fill="#3b82f6" />
                                <circle cx="150" cy="300" r="5" fill="#f97316" />
                                <circle cx="250" cy="300" r="5" fill="#10b981" />

                                <circle cx="150" cy="50" r="3" fill="white" fillOpacity="0.5" />
                                <circle cx="350" cy="150" r="3" fill="white" fillOpacity="0.5" />
                                <circle cx="50" cy="250" r="3" fill="white" fillOpacity="0.5" />
                            </svg>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px]">2</span> Signals & Data Intelligence
                        </div>
                        <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">
                            Real-time signals to find<br />buyers before they convert
                        </h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Outmate continuously tracks 4,000+ active signals across the web to surface companies showing real buying intent — based on funding, hiring, growth, and technology changes.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>
                                    <p className="text-gray-600 text-sm">Signals hub with funding, hiring, tech, and growth signals</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>
                                    <p className="text-gray-600 text-sm">Lookalike and intent-based targeting</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>
                                    <p className="text-gray-600 text-sm">Smart alerts for new opportunities</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>
                                    <p className="text-gray-600 text-sm">Signal rules to auto-prioritize high-intent accounts</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2"></div>
                                    <p className="text-gray-600 text-sm">Real-time company activity tracking</p>
                                </div>
                            </div>
                        </div>
                        <Link to="/" className="flex items-center gap-2 mt-8 font-medium text-gray-900 hover:gap-3 transition-all w-fit" target="_blank" rel="noopener noreferrer">
                            Explore signals hub <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Section 3: AI Agents & Co-Pilot */}
                <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px]">3</span> AI Agents & Co-Pilot
                        </div>
                        <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">
                            AI agents and co-pilot for<br />autonomous GTM Execution
                        </h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Outmate comes with a library of AI agents and a built-in GTM co-pilot that handles research, qualification, and personalisation — so your team doesn't waste time doing repetitive work.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Agents library with pre-built GTM agents</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> GTM Co-Pilot for targeting and strategy</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Agent logs and training for full control</li>
                            </ul>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Outmate Agent for autonomous prospecting</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Agent playground to design and test agents</li>
                            </ul>
                        </div>
                        <Link to="/" className="flex items-center gap-2 mt-8 font-medium text-gray-900 hover:gap-3 transition-all w-fit" target="_blank" rel="noopener noreferrer">
                            Meet your GTM co-pilot <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm min-h-[400px]">
                        {/* Placeholder Grid */}
                        <div className="grid grid-cols-2 gap-4 h-full">
                            <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                                <div className="w-10 h-10 bg-blue-100 rounded-lg mb-4"></div>
                                <div className="h-2 bg-gray-100 w-1/2 rounded"></div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between mt-8">
                                <div className="w-10 h-10 bg-purple-100 rounded-lg mb-4"></div>
                                <div className="h-2 bg-gray-100 w-1/2 rounded"></div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between">
                                <div className="w-10 h-10 bg-green-100 rounded-lg mb-4"></div>
                                <div className="h-2 bg-gray-100 w-1/2 rounded"></div>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between mt-8">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg mb-4"></div>
                                <div className="h-2 bg-gray-100 w-1/2 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section 4: Outreach & Workflows */}
                <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 bg-[#1a1d21] rounded-2xl p-8 shadow-2xl overflow-hidden min-h-[500px] border border-gray-800">
                        {/* Workflow Mockup */}
                        <div className="space-y-4">
                            <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between border border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white"><Mail size={16} /></div>
                                    <div className="text-gray-200 text-sm font-medium">Initial Outreach</div>
                                </div>
                                <div className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400">Email</div>
                            </div>
                            <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-700"></div></div>
                            <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between border border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white font-bold">in</div>
                                    <div className="text-gray-200 text-sm font-medium">Connection Request</div>
                                </div>
                                <div className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400">LinkedIn</div>
                            </div>
                            <div className="flex justify-center"><div className="w-0.5 h-6 bg-gray-700"></div></div>
                            <div className="bg-gray-800/50 p-4 rounded-lg flex items-center justify-between border border-gray-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center text-white"><Check size={16} /></div>
                                    <div className="text-gray-200 text-sm font-medium">Wait for Acceptance</div>
                                </div>
                                <div className="text-xs bg-gray-700 px-2 py-1 rounded text-gray-400">Delay</div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px]">4</span> Outreach & Workflows
                        </div>
                        <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">
                            From discovery to outreach —<br />in one workflow
                        </h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Outmate helps you move from leads to conversations without switching tools. With 25+ pre-built workflows, your team can launch outbound in minutes instead of weeks.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Email outreach with deliverability controls</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Multichannel sequencing</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> AI-powered personalization at scale</li>
                            </ul>
                            <ul className="space-y-4 text-sm text-gray-600">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> LinkedIn outreach automation</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> 25+ pre-built GTM workflows</li>
                            </ul>
                        </div>
                        <Link to="/" className="flex items-center gap-2 mt-8 font-medium text-gray-900 hover:gap-3 transition-all w-fit" target="_blank" rel="noopener noreferrer">
                            Launch your first workflow <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>

                {/* Section 5: Analytics & Integrations */}
                <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-6">
                            <span className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px]">5</span> Analytics, Experiments & Integrations
                        </div>
                        <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">
                            Measure impact and<br />connect your entire stack
                        </h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Outmate gives you full visibility into what's working — so you can double down on what drives pipeline and stop wasting time on what doesn't.
                        </p>
                        <ul className="space-y-4 text-sm text-gray-600 mb-8">
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Analytics across leads, agents, and campaigns</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Attribution for pipeline and revenue</li>
                            <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-600"></div> Unified reporting across GTM workflows</li>
                        </ul>
                        <Link to="#" className="flex items-center gap-2 font-medium text-gray-900 hover:gap-3 transition-all w-fit" target="_blank" rel="noopener noreferrer">
                            View Integrations <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="bg-[#111] rounded-2xl p-8 border border-gray-800 shadow-2xl min-h-[400px]">
                        {/* Integrations Grid Hover Effect */}
                        <div className="grid grid-cols-3 gap-4">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="bg-gray-800/50 rounded-xl p-4 flex items-center justify-center aspect-square border border-gray-700 hover:bg-gray-700 transition-colors">
                                    <div className={`w-10 h-10 rounded-full ${i % 2 === 0 ? 'bg-indigo-500' : 'bg-pink-500'} opacity-80`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Ready to See Outmate Section */}
                <div className="mt-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                        {/* Left Content */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">
                                Ready to See<br />Outmate in Action?
                            </h2>
                            <p className="text-xl text-gray-500 mb-8 leading-relaxed max-w-lg">
                                Outmate turns all of your online and offline GTM data into real-time signals, AI-powered recommendations, and the industry's best-performing account scoring.
                            </p>

                            <Link to="/book-demo" className="bg-gray-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition-all flex items-center gap-2 text-lg shadow-xl shadow-gray-200 w-fit" target="_blank" rel="noopener noreferrer">
                                Book a demo <ArrowRight size={20} />
                            </Link>
                        </div>

                        {/* Right Visual - Dark Dashboard Mockup */}
                        <div className="order-1 lg:order-2">
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

                {/* Bottom Section - Problem Statement */}
                <div className="mt-32 text-center max-w-4xl mx-auto">
                    <span className="text-purple-600 font-bold text-xs tracking-wider uppercase bg-purple-50 px-3 py-1 rounded-full mb-6 inline-block">The Problem With Modern GTM</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">
                        Your data is everywhere.<br />Your pipeline isn't.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default CoreEngine;
