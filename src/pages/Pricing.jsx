import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { ArrowRight, Mail, Phone, Database, Sparkles, Globe, Coins, Quote, ChevronLeft, ChevronRight, ChevronDown, Plus, Minus, ArrowUpRight, Check } from 'lucide-react';

const Pricing = () => {
    const [openFaqIndex, setOpenFaqIndex] = useState(0);

    useEffect(() => {
        document.title = 'Pricing - Outmate';
    }, []);

    return (
        <div className="pt-0 pb-24 px-6 md:px-12 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200/40 via-white to-white min-h-screen">
            <div className="max-w-[1200px] mx-auto bg-white/50 border border-white/50 relative z-10 backdrop-blur-3xl">
                <Navbar isContained={true} />

                <main className="pt-24 md:pt-32 px-6 md:px-12 pb-20">
                    {/* Section 1: Hero & Trusted Companies */}
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-12 md:mb-20">
                            {/* Adjusted width to full to prevent wrapping */}
                            <div className="text-left w-full">
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-6 h-1 bg-purple-600 rounded-full"></div>
                                    <span className="text-gray-900 font-medium">Core GTM Engine</span>
                                </div>

                                {/* Removed italic from pricing and ensured nowrap */}
                                <h1 className="text-4xl md:text-7xl font-serif font-medium mb-6 text-gray-900 leading-tight">
                                    Flexible, risk-free <span className="text-purple-600">pricing</span>
                                </h1>

                                <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
                                    Access 100+ data providers, web scraping, and AI message drafting in one place with Clay credits - no subscriptions needed.
                                </p>

                                <div className="flex flex-col sm:flex-row items-start gap-4">
                                    <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-black transition-all flex items-center gap-2 shadow-lg hover:shadow-xl">
                                        Try for free <span className="text-lg">→</span>
                                    </button>
                                    <button className="bg-white text-gray-900 border border-gray-200 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
                                        Request an Enterprise quote <span className="text-lg">→</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Trusted Companies */}
                        <div className="border-t border-gray-100 bg-purple-50/50 -mx-6 md:-mx-12 px-6 md:px-12 py-12">
                            <p className="text-center text-sm text-gray-600 font-medium mb-8 uppercase tracking-widest">trusted by 300,000 leading gtm teams:</p>
                            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16 opacity-80 grayscale-0">
                                {/* Zapier Logo */}
                                <div className="flex items-center gap-1 font-bold text-2xl text-[#FF4F00]"><span className="text-3xl leading-none">*</span> zapier</div>
                                {/* Razorpay Logo */}
                                <div className="flex items-center gap-1 font-bold text-2xl text-[#0A2351] italic">Razorpay</div>
                                {/* Loom Logo */}
                                <div className="flex items-center gap-1 font-bold text-2xl text-[#625DF5]"><span className="text-2xl">✲</span> loom</div>
                                {/* Pendo Logo */}
                                <div className="flex items-center gap-1 font-bold text-2xl text-[#FF3F6C]">pendo</div>
                                {/* Intercom Logo */}
                                <div className="flex items-center gap-1 font-bold text-2xl text-black tracking-tight"><div className="w-6 h-6 bg-black rounded-md flex items-center justify-center text-white text-xs">|||</div> INTERCOM</div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Pricing Tiers & Toggle */}
                    <div className="max-w-[1400px] mx-auto mb-24 mt-24">
                        {/* Toggle Header */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 flex flex-col md:flex-row items-center justify-between mb-16 max-w-5xl mx-auto">
                            <div className="px-6 py-2">
                                <span className="font-bold text-gray-900 block">Explore features by solutions:</span>
                                <span className="text-gray-500 text-sm">All tiers include every solution</span>
                            </div>
                            <div className="flex items-center gap-1 overflow-x-auto w-full md:w-auto p-1">
                                {['Outbound', 'Inbound', 'Data Enrichment', 'Deal Execution'].map((tab, i) => {
                                    const targetId = tab === 'Outbound' ? 'outbound-features' :
                                        tab === 'Inbound' ? 'inbound-addon' :
                                            tab === 'Data Enrichment' ? 'data-enrichment-features' :
                                                'deal-execution-features';

                                    return (
                                        <button
                                            key={i}
                                            onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' })}
                                            className={`px-6 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${tab === 'Outbound' ? 'bg-purple-100 text-purple-700' : 'text-gray-500 hover:bg-purple-50 hover:text-purple-700'}`}
                                        >
                                            {tab}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Pricing Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                            {/* Free Plan */}
                            <div className="flex flex-col relative p-8 xl:p-10 bg-white border border-gray-200 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group hover:-translate-y-2 h-full">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-3 font-serif">Free</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed min-h-[48px]">Explore the Outmate platform to find leads, manage pipeline & close deals.</p>
                                </div>
                                <div className="mb-8 border-b border-gray-100 pb-8">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-bold text-gray-900 tracking-tight">$0</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700 mb-6">
                                        <div className="mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg></div>
                                        <div>
                                            <span className="font-bold">900 credits</span><br />
                                            <span className="text-gray-500 text-xs">per user per year, granted monthly</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#625DF5] text-white py-3.5 rounded-xl font-bold hover:bg-[#504bc4] transition-all shadow-md hover:shadow-lg transform active:scale-95">Get Started</button>
                                </div>
                                <div className="space-y-4">
                                    {['AI Assistant', 'AI Research'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <span className="text-purple-500 font-bold">✧</span> {item}
                                        </div>
                                    ))}
                                    {['2 Sequences', 'Prospecting Extension', 'Email Warmup', 'Basic Filters'].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <Check size={16} className="text-gray-900 mt-0.5 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Basic Plan */}
                            <div className="flex flex-col relative p-8 xl:p-10 bg-white border border-gray-200 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group hover:-translate-y-2 h-full">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-3 font-serif">Basic</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed min-h-[48px]">Take prospecting, outreach & deal management to the next level.</p>
                                </div>
                                <div className="mb-8 border-b border-gray-100 pb-8">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-bold text-gray-900 tracking-tight">$49</span>
                                        <span className="text-gray-500 font-medium">/mo</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700 mb-6">
                                        <div className="mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg></div>
                                        <div>
                                            <span className="font-bold">30,000 credits</span><br />
                                            <span className="text-gray-500 text-xs">per user per year, granted monthly</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#625DF5] text-white py-3.5 rounded-xl font-bold hover:bg-[#504bc4] transition-all shadow-md hover:shadow-lg transform active:scale-95">Buy now</button>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Everything in Free, plus:</div>
                                    {['CRM Integrations', 'Waterfall Enrichment', '3 Meetings Events', '6 Intent Topics', 'CSV & API Enrichment', 'Domain Purchasing', 'US Dialer'].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <Check size={16} className="text-purple-600 mt-0.5 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Professional Plan */}
                            <div className="flex flex-col relative p-8 xl:p-10 bg-white border-2 border-purple-500 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 h-full scale-105 z-10">
                                <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-[1.8rem]">MOST POPULAR</div>
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-3 font-serif">Professional</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed min-h-[48px]">Optimize your sales process with multi-touch outreach & automation.</p>
                                </div>
                                <div className="mb-8 border-b border-gray-100 pb-8">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-bold text-gray-900 tracking-tight">$79</span>
                                        <span className="text-gray-500 font-medium">/mo</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700 mb-6">
                                        <div className="mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg></div>
                                        <div>
                                            <span className="font-bold">48,000 credits</span><br />
                                            <span className="text-gray-500 text-xs">per user per year, granted monthly</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-bold hover:bg-black transition-all shadow-md hover:shadow-lg transform active:scale-95">Buy now</button>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Everything in Basic, plus:</div>
                                    {['Unlimited Mailboxes', 'Automated Workflows', 'Call Recordings', 'AI Insights', 'A/B Testing'].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <Check size={16} className="text-purple-600 mt-0.5 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Organization Plan */}
                            <div className="flex flex-col relative p-8 xl:p-10 bg-white border border-gray-200 rounded-[2rem] shadow-sm hover:shadow-2xl hover:border-purple-300 transition-all duration-300 group hover:-translate-y-2 h-full">
                                <div className="mb-8">
                                    <h3 className="text-3xl font-bold text-gray-900 mb-3 font-serif">Organization</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed min-h-[48px]">Transform go-to-market with advanced tools & custom solutions.</p>
                                </div>
                                <div className="mb-8 border-b border-gray-100 pb-8">
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-5xl font-bold text-gray-900 tracking-tight">$119</span>
                                        <span className="text-gray-500 font-medium">/mo</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm text-gray-700 mb-6">
                                        <div className="mt-1"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg></div>
                                        <div>
                                            <span className="font-bold">72,000 credits</span><br />
                                            <span className="text-gray-500 text-xs">per user per year, granted monthly</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#625DF5] text-white py-3.5 rounded-xl font-bold hover:bg-[#504bc4] transition-all shadow-md hover:shadow-lg transform active:scale-95">Buy now</button>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Everything in Professional, plus:</div>
                                    {['Advanced Security', 'SSO', 'Custom Reports', 'API Access', 'Dedicated Success Manager'].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                            <Check size={16} className="text-purple-600 mt-0.5 shrink-0" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: Add-ons */}
                    <div className="max-w-[1400px] mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-12" style={{ fontFamily: '"SN Pro", sans-serif' }}>Add more power to your workflow</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {/* Inbound Add-on */}
                            <div id="inbound-addon" className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                                    <div>
                                        <div className="uppercase text-purple-600 text-xs font-bold tracking-widest mb-2">ADD-ON</div>
                                        <h3 className="text-4xl font-serif font-medium text-gray-900">Inbound</h3>
                                    </div>
                                    <div className="text-right mt-4 md:mt-0">
                                        <div className="text-4xl font-medium text-gray-900">$119</div>
                                        <div className="text-xs text-gray-500 leading-tight">Per team, per month<br />billed annually</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">Website Visitors (Company)</div>
                                            <div className="text-sm text-gray-500">Identify up to 50,000 companies per month.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">Form Enrichment</div>
                                            <div className="text-sm text-gray-500">5,000 form contacts enriched per month (credit usage applies).</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">Form Builder</div>
                                            <div className="text-sm text-gray-500">Capture leads with custom forms.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">Website Visitor (Contacts)</div>
                                            <div className="text-sm text-gray-500">Identify individual people visiting your website.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Advanced Dialer Add-on */}
                            <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 md:p-12 hover:shadow-xl transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                                    <div>
                                        <div className="uppercase text-purple-600 text-xs font-bold tracking-widest mb-2">ADD-ON</div>
                                        <h3 className="text-4xl font-serif font-medium text-gray-900">Advanced Dialer</h3>
                                    </div>
                                    <div className="text-right mt-4 md:mt-0">
                                        <div className="text-4xl font-medium text-gray-900">$119</div>
                                        <div className="text-xs text-gray-500 leading-tight">Per team, per month<br />billed annually</div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">International Dialer</div>
                                            <div className="text-sm text-gray-500">Connect with global buyers using built-in international calling.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">Parallel Dialer</div>
                                            <div className="text-sm text-gray-500">Multiply outbound volume by dialing multiple numbers at once.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">Power Dialer</div>
                                            <div className="text-sm text-gray-500">Single-line dialing with auto-advance, voicemail drop, and instant call logging.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <svg className="w-5 h-5 text-gray-900 mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                                        <div>
                                            <div className="font-bold text-gray-900">Local Presence</div>
                                            <div className="text-sm text-gray-500">Use local area codes to increase pickup rates.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500">Select your paid plan first, then add any add-on in-app. Introductory pricing — features and pricing may change.</p>
                    </div>


                    {/* Section 4: Compare Plans Header */}
                    <div className="max-w-[1400px] mx-auto mb-8 hidden md:block">
                        {/* Sticky Header for Comparison Table */}
                        <div className="sticky top-0 bg-white/90 backdrop-blur-xl z-20 py-10 px-10 border-b border-gray-100 rounded-[2.5rem]">
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-end">
                                <div className="hidden md:block pb-40 -ml-6">
                                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 tracking-tight whitespace-nowrap">Compare plans</h2>
                                </div>
                                {/* Free */}
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-serif font-medium mb-2">Free</h3>
                                    <div className="text-4xl font-medium mb-3">$0</div>
                                    <div className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                                        <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                        <div>
                                            <span className="font-bold">900 credits</span><br />
                                            <span className="text-xs text-gray-500">per user per year, granted monthly</span>
                                            <a href="#" className="text-xs text-purple-600 underline block mt-0.5">Learn more</a>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#625DF5] text-white py-2 rounded-lg font-bold text-xs hover:bg-[#504bc4] transition-all shadow-sm hover:shadow-md">Get Started</button>
                                </div>

                                {/* Basic */}
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-serif font-medium mb-2">Basic</h3>
                                    <div className="text-4xl font-medium mb-3">$49</div>
                                    <div className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                                        <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                        <div>
                                            <span className="font-bold">30,000 credits</span><br />
                                            <span className="text-xs text-gray-500">per user per year, granted monthly</span>
                                            <a href="#" className="text-xs text-purple-600 underline block mt-0.5">Learn more</a>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#625DF5] text-white py-2 rounded-lg font-bold text-xs hover:bg-[#504bc4] transition-all shadow-sm hover:shadow-md">Buy now</button>
                                </div>

                                {/* Professional */}
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-serif font-medium mb-2">Professional</h3>
                                    <div className="text-4xl font-medium mb-3">$79</div>
                                    <div className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                                        <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                        <div>
                                            <span className="font-bold">48,000 credits</span><br />
                                            <span className="text-xs text-gray-500">per user per year, granted monthly</span>
                                            <a href="#" className="text-xs text-purple-600 underline block mt-0.5">Learn more</a>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#625DF5] text-white py-2 rounded-lg font-bold text-xs hover:bg-[#504bc4] transition-all shadow-sm hover:shadow-md">Buy now</button>
                                </div>

                                {/* Organization */}
                                <div className="flex flex-col">
                                    <h3 className="text-3xl font-serif font-medium mb-2">Organization</h3>
                                    <div className="text-4xl font-medium mb-3">$119</div>
                                    <div className="text-sm text-gray-600 mb-4 flex items-start gap-2">
                                        <svg className="w-4 h-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                                        <div>
                                            <span className="font-bold">72,000 credits</span><br />
                                            <span className="text-xs text-gray-500">per user per year, granted monthly</span>
                                            <a href="#" className="text-xs text-purple-600 underline block mt-0.5">Learn more</a>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#625DF5] text-white py-2 rounded-lg font-bold text-xs hover:bg-[#504bc4] transition-all shadow-sm hover:shadow-md">Buy now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Detailed Comparison Table */}
                    <div className="max-w-[1400px] mx-auto mb-24">
                        {/* Outbound Section (Expanded) */}
                        <div className="mb-4">
                            {/* Section Header */}
                            <div id="outbound-features" className="bg-purple-100 rounded-t-2xl p-6 flex items-center gap-4">
                                <div className="w-10 h-10 bg-[#625DF5] rounded-lg flex items-center justify-center text-white">
                                    <svg className="w-6 h-6 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">Outbound</h3>
                                    <p className="text-xs text-gray-500">Select your paid plan first, then add any add-on in-app. Introductory pricing — features and pricing may change.</p>
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="overflow-x-auto pb-4">
                                <div className="bg-white border-x border-b border-gray-200 rounded-b-2xl divide-y divide-gray-100 min-w-[800px]">
                                    {[
                                        { name: "AI Assistant", checks: [true, true, true, true] },
                                        { name: "AI Research", checks: [true, true, true, true] },
                                        { name: "2 Sequences", checks: [true, true, true, true] },
                                        { name: "Prospecting, Gmail & Salesforce Extensions", checks: [true, true, true, true] },
                                        { name: "Deliverability Suite & Email Warmup", checks: [true, true, true, true] },
                                        { name: "Basic Filters", checks: [true, true, true, true] },
                                        { name: "CRM Integrations", checks: [true, true, true, true] },
                                        { name: "Waterfall Enrichment", checks: [true, true, true, true] },
                                        { name: "3 Meetings Events", checks: [true, true, true, true] },
                                        { name: "6 Intent Topics & Intent Filters", checks: [true, true, true, true] },
                                        { name: "CSV, CRM & API Data Enrichment", checks: [false, true, true, true] },
                                        { name: "Domain & Mailbox Purchasing", checks: [false, true, true, true] },
                                        { name: "US Dialer (credits apply)", checks: [false, true, true, true] },
                                        { name: "Unlimited Gmail & Microsoft Mailboxes", checks: [false, true, true, true] },
                                        { name: "Automated Workflows", checks: [false, true, true, true] },
                                        { name: "Call Recordings & AI Insights (4,000 mins)", checks: [false, false, true, true] },
                                        { name: "Analytics & Pre-built Reports", checks: [false, false, true, true] },
                                        { name: "Customizable Reports & Dashboards", checks: [false, false, true, true] },
                                        { name: "Advanced Security Configurations", checks: [false, false, false, true] },
                                        { name: "Single Sign-on (SSO)", checks: [false, false, false, true] },
                                        { name: "Use your own LLM API key", checks: [false, false, false, true] },
                                    ].map((feature, idx) => (
                                        <div key={idx} className={`grid grid-cols-5 gap-8 items-center py-4 px-6 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'} hover:bg-gray-50 transition-colors`}>
                                            <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                                            {feature.checks.map((isChecked, i) => (
                                                <div key={i} className="flex justify-center md:block md:pl-8">
                                                    {isChecked ? (
                                                        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white">
                                                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" /></svg>
                                                        </div>
                                                    ) : <div className="w-6 h-6" />}
                                                    <span className="md:hidden ml-2 text-sm text-gray-500">{['Free', 'Basic', 'Professional', 'Organization'][i]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Inbound Section (Collapsed) */}
                        <div id="inbound-features" className="bg-purple-100/50 rounded-2xl p-6 flex items-center gap-4 mb-4 opacity-70 hover:opacity-100 hover:bg-purple-100 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                            <div className="w-10 h-10 bg-[#625DF5] rounded-lg flex items-center justify-center text-white">
                                <svg className="w-6 h-6 transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Inbound</h3>
                                <p className="text-xs text-gray-500">Select your paid plan first, then add any add-on in-app.</p>
                            </div>
                        </div>

                        {/* Data Enrichment Section (Collapsed) */}
                        <div id="data-enrichment-features" className="bg-gray-100 rounded-2xl p-6 flex items-center gap-4 mb-4 opacity-70 hover:opacity-100 hover:bg-purple-50 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                            <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Data Enrichment</h3>
                                <p className="text-xs text-gray-500">Select your paid plan first, then add any add-on in-app.</p>
                            </div>
                        </div>

                        {/* Deal Execution Section (Collapsed) */}
                        <div id="deal-execution-features" className="bg-gray-100 rounded-2xl p-6 flex items-center gap-4 mb-4 opacity-70 hover:opacity-100 hover:bg-purple-50 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 cursor-pointer">
                            <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center text-white">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Deal Execution</h3>
                                <p className="text-xs text-gray-500">Select your paid plan first, then add any add-on in-app.</p>
                            </div>
                        </div>

                    </div>

                    {/* Section 6: Credits Explanation */}
                    <div className="max-w-[1400px] mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-0">
                        {/* Left Column: Text */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6">What are Outmate<br />credits?</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Credits give you access to emails, phone numbers, and enriched data, helping you connect with prospects and enhance your CRM.
                            </p>
                            <button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm text-sm hover:shadow-md">
                                Need more credits <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Right Column: Visualization */}
                        <div className="flex items-center justify-center lg:justify-end relative">
                            {/* Coin */}
                            <div className="relative z-10 shrink-0 mr-8 hidden md:block">
                                <div className="w-24 h-24 rounded-full border-4 border-black flex items-center justify-center bg-white transform -rotate-12 shadow-2xl relative">
                                    <div className="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300">
                                            <Coins className="w-8 h-8 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                                {/* Connection Line from Coin to Vertical Line */}
                                <div className="absolute top-1/2 -right-8 w-8 h-0 border-t-2 border-dashed border-black translate-y-[-50%] hidden md:block"></div>
                            </div>

                            {/* Tree Structure */}
                            <div className="relative pl-8 border-l-2 border-dashed border-black/20 py-4 hidden md:block">
                                <div className="flex flex-col gap-4">
                                    {[
                                        { icon: Mail, title: "Email", desc: "Access verified emails to connect with the right prospects." },
                                        { icon: Phone, title: "Phone", desc: "Access verified phone numbers to connect directly." },
                                        { icon: Database, title: "Enrichment", desc: "Enrich your CRM with verified data points." },
                                        { icon: Sparkles, title: "AI Content", desc: "Generate personalized outreach at scale." },
                                        { icon: Globe, title: "Website Visitors", desc: "Identify companies visiting your site." },
                                    ].map((item, idx) => (
                                        <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow relative w-full md:w-[400px]">
                                            {/* Horizontal Connector */}
                                            <div className="absolute top-1/2 -left-8 w-8 h-0 border-t-2 border-dashed border-black/20 translate-y-[-50%] hidden md:block"></div>
                                            <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                                                <item.icon className="w-5 h-5 text-gray-900" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                                                    <span className="bg-[#625DF5] text-white text-[10px] px-2 py-0.5 rounded-full font-medium">1 credit</span>
                                                </div>
                                                <p className="text-xs text-gray-500 line-clamp-1">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile View (No fancy lines) */}
                            <div className="flex flex-col gap-4 w-full md:hidden">
                                {[
                                    { icon: Mail, title: "Email", desc: "Access verified emails to connect with the right prospects." },
                                    { icon: Phone, title: "Phone", desc: "Access verified phone numbers to connect directly." },
                                    { icon: Database, title: "Enrichment", desc: "Enrich your CRM with verified data points." },
                                    { icon: Sparkles, title: "AI Content", desc: "Generate personalized outreach at scale." },
                                    { icon: Globe, title: "Website Visitors", desc: "Identify companies visiting your site." },
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow relative w-full">
                                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-gray-900" />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="font-bold text-gray-900 text-sm">{item.title}</span>
                                                <span className="bg-[#625DF5] text-white text-[10px] px-2 py-0.5 rounded-full font-medium">1 credit</span>
                                            </div>
                                            <p className="text-xs text-gray-500 line-clamp-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 7: Testimonials */}
                    <div className="max-w-[1400px] mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 md:px-0">
                        {/* Left Column: Text */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">The fastest growing<br />businesses use Outmate</h2>
                            <p className="text-lg text-gray-600 mb-8 max-w-md">
                                500,000+ companies use Apollo to stay ahead of the competition.
                            </p>
                            <button className="bg-white text-gray-900 border border-gray-200 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm text-sm hover:shadow-md">
                                Get started for free <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Right Column: Testimonial Card */}
                        <div className="relative">
                            <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                                {/* Background Gradient Blob */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>

                                <Quote className="w-12 h-12 text-gray-900 mb-6 relative z-10" fill="currentColor" />

                                <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-12 relative z-10 leading-relaxed">
                                    "We reduced the complexity of three tools into one. We're getting higher reply rates, open rates are doubled, meetings are up, and speed to booking a meeting is cut in half. This is the sales platform for people who want to do more with their outreach."
                                </blockquote>

                                <div className="flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-16 h-16 rounded-2xl bg-gray-200 overflow-hidden shrink-0">
                                            {/* Placeholder for User Image */}
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Abhay Suman" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900">Abhay Suman</div>
                                            <div className="text-sm text-gray-500">CEO at Outmate</div>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <div className="text-5xl md:text-6xl font-medium text-gray-900 mb-1">50%</div>
                                        <div className="text-sm text-gray-600">Meeting rate increased</div>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex justify-end gap-4 mt-6">
                                <button className="w-12 h-12 rounded-xl border border-gray-900/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                    <ChevronLeft className="w-6 h-6 text-gray-900" />
                                </button>
                                <button className="w-12 h-12 rounded-xl border border-gray-900/10 flex items-center justify-center hover:bg-gray-50 transition-colors">
                                    <ChevronRight className="w-6 h-6 text-gray-900" />
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Section 8: FAQ */}
                    <div className="max-w-[1400px] mx-auto mb-24 grid grid-cols-1 lg:grid-cols-12 gap-16 px-4 md:px-0">
                        {/* Left Column: Header & Contact */}
                        <div className="lg:col-span-5">
                            <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 inline-block">Support</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">Frequently asked<br />questions</h2>
                            <p className="text-lg text-gray-600 mb-12">
                                Everything you need to know about the platform, billing, and how we handle your data.
                            </p>

                            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Still have questions?</h3>
                                <p className="text-sm text-gray-600 mb-6">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                                <button className="w-full bg-black text-white py-3 rounded-lg font-medium text-sm hover:bg-gray-800 transition-colors">Get in touch</button>
                            </div>
                        </div>

                        {/* Right Column: Accordion */}
                        <div className="lg:col-span-7">
                            <div className="space-y-4">
                                {[
                                    { q: "How does Outmate source its contact data?", a: "We use a proprietary real-time waterfall enrichment engine. Outmate aggregates data from 15+ premium providers and verifies it live before you ever see it. This ensures 99% email deliverability and phone number accuracy." },
                                    { q: "Can I cancel my subscription at any time?", a: "Yes, you can cancel your subscription at any time. Your access will remain active until the end of the current billing cycle." },
                                    { q: "Do you offer a free trial for paid plans?", a: "We offer a 14-day free trial on our Professional and Organization plans so you can test the full capabilities of the platform." },
                                    { q: "What happens to my unused credits?", a: "Unused credits rollover to the next month for up to 3 months on our annual plans. Monthly plans do not support rollover." },
                                    { q: "Is there a discount for non-profits?", a: "Yes! We offer a 20% discount for registered non-profit organizations. Please contact our sales team for more information." },
                                ].map((faq, idx) => (
                                    <div key={idx} className="border-b border-gray-200 last:border-0 pb-4">
                                        <button
                                            className="w-full flex justify-between items-center py-4 text-left group"
                                            onClick={() => setOpenFaqIndex(openFaqIndex === idx ? -1 : idx)}
                                        >
                                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#625DF5] transition-colors">{faq.q}</span>
                                            {openFaqIndex === idx ? (
                                                <ChevronDown className="w-5 h-5 text-gray-400 rotate-180 transition-transform duration-300" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300" />
                                            )}
                                        </button>
                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className="text-gray-600 leading-relaxed text-sm md:text-base pr-8">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Section 9: Final CTA */}
                    <div className="max-w-[1400px] mx-auto mb-24 px-4 md:px-0">
                        <div className="bg-[#0B0F19] rounded-[2.5rem] overflow-hidden relative">
                            {/* Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 md:p-16 relative z-10 items-center">
                                <div>
                                    <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6 leading-tight">
                                        Ready to See<br />Outmate in Action?
                                    </h2>
                                    <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                                        Outmate turns all of your online and offline GTM data into real-time signals, AI-powered recommendations, and the industry's best-performing account scoring.
                                    </p>
                                    <button className="bg-[#1F2937] text-white border border-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all flex items-center gap-2 shadow-lg text-sm group">
                                        Book a demo
                                        <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </button>
                                </div>

                                {/* Dashboard Preview */}
                                <div className="relative">
                                    <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-800 bg-[#111827]">
                                        <img
                                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                                            alt="Outmate Dashboard Preview"
                                            className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-50"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Effects */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    );
};

export default Pricing;
