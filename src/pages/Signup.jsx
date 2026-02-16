import React from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 bg-gray-50">
            <div className="bg-white p-10 w-full max-w-md rounded-2xl shadow-xl border border-gray-100">

                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-6" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" />
                            </svg>
                        </div>
                    </Link>
                    <h2 className="text-2xl font-serif font-bold mb-2 text-gray-900">Create account</h2>
                    <p className="text-gray-500 text-sm">Start your 14-day free trial</p>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                                placeholder="John Doe"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                                placeholder="name@company.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg py-2.5 pl-10 pr-4 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <button type="button" className="btn-primary w-full justify-center mt-2 shadow-lg shadow-purple-200">
                        Create Account <ArrowRight size={18} />
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-primary hover:text-purple-800 font-semibold transition-colors" target="_blank" rel="noopener noreferrer">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
