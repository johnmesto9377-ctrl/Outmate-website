import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Github, Chrome, Command } from 'lucide-react';

const Login = () => {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-24 md:pt-32">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
            </div>

            <div className="w-full max-w-md p-8 relative z-10">
                {/* Logo Section */}
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center justify-center mb-8 group transition-transform hover:scale-105 duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#625DF5] to-[#4A45E3] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-purple-200 rotate-3 group-hover:rotate-6 transition-all">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-8 h-8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M3 10L12 3L21 10" />
                                <circle cx="12" cy="16" r="5" />
                            </svg>
                        </div>
                    </Link>
                    <h2 className="text-4xl font-bold mb-3 text-gray-900 tracking-tight" style={{ fontFamily: 'SN Pro, sans-serif' }}>Welcome back</h2>
                    <p className="text-gray-500 text-lg">Enter your details to access your workspace.</p>
                </div>

                {/* Login Card */}
                <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2 ml-1">Email</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" size={20} />
                                <input
                                    type="email"
                                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 group-hover:border-purple-200"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2 ml-1">
                                <label className="block text-sm font-semibold text-gray-700">Password</label>
                                <Link to="#" className="text-xs text-purple-600 font-bold hover:text-purple-700 hover:underline transition-all">Forgot password?</Link>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-600 transition-colors" size={20} />
                                <input
                                    type="password"
                                    className="w-full bg-gray-50/50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 group-hover:border-purple-200"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button type="button" className="w-full bg-[#625DF5] hover:bg-[#504bc4] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group">
                            Sign In <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                                <span className="px-4 bg-white/50 backdrop-blur text-gray-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group">
                                <Chrome size={20} className="text-gray-700 group-hover:text-purple-600 transition-colors" />
                                <span className="font-semibold text-sm text-gray-700">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 rounded-xl p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group">
                                <Command size={20} className="text-gray-700 group-hover:text-purple-600 transition-colors" />
                                <span className="font-semibold text-sm text-gray-700">SSO</span>
                            </button>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-8 text-sm text-gray-500 font-medium">
                    Don't have an account? <Link to="/signup" className="text-[#625DF5] hover:text-[#4A45E3] font-bold hover:underline transition-all">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
