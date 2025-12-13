'use client';

import React, { useState } from 'react';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#1a1d23', color: '#e8e9ed' }}>

            {/* Background Effects */}
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] pointer-events-none">
                <div
                    className="w-full h-full rounded-full animate-float-1"
                    style={{
                        background: 'radial-gradient(circle, rgba(143, 165, 153, 0.06) 0%, transparent 70%)'
                    }}
                ></div>
            </div>
            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] pointer-events-none">
                <div
                    className="w-full h-full rounded-full animate-float-2"
                    style={{
                        background: 'radial-gradient(circle, rgba(124, 156, 191, 0.05) 0%, transparent 70%)'
                    }}
                ></div>
            </div>

            {/* Container */}
            <div className="relative z-10 w-full max-w-[480px] px-8 animate-fade-in-up">

                {/* Logo */}
                <div className="text-center mb-12">
                    <div className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Literata, serif', color: '#e8e9ed' }}>
                        Ican
                    </div>
                    <div className="text-[15px]" style={{ color: '#a8adb8' }}>
                        Turn goals into structured journeys
                    </div>
                </div>

                {/* Login Card */}
                <div
                    className="rounded-[20px] p-12 relative overflow-hidden"
                    style={{
                        backgroundColor: '#2a2e36',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
                    }}
                >

                    {/* Top Gradient Border */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[3px]"
                        style={{
                            background: 'linear-gradient(90deg, #8fa599, #7c9cbf)'
                        }}
                    ></div>

                    {/* Header */}
                    <div className="mb-10">
                        <h1 className="text-[32px] font-bold mb-3 tracking-tight" style={{ fontFamily: 'Literata, serif' }}>
                            Welcome back
                        </h1>
                        <p className="text-base leading-relaxed" style={{ color: '#a8adb8' }}>
                            Continue your journey toward meaningful growth.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit}>
                        {/* Email */}
                        <div className="mb-7">
                            <label htmlFor="email" className="block mb-3 font-semibold text-[14px]" style={{ color: '#a8adb8' }}>
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-[10px] text-base outline-none transition-all duration-300"
                                style={{
                                    backgroundColor: '#1f2229',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#e8e9ed'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'rgba(143, 165, 153, 0.4)';
                                    e.target.style.backgroundColor = '#2a2e36';
                                    e.target.style.boxShadow = '0 0 0 4px rgba(143, 165, 153, 0.1)';
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                    e.target.style.backgroundColor = '#1f2229';
                                    e.target.style.boxShadow = 'none';
                                }}
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-7">
                            <label htmlFor="password" className="block mb-3 font-semibold text-[14px]" style={{ color: '#a8adb8' }}>
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-[10px] text-base outline-none transition-all duration-300"
                                    style={{
                                        backgroundColor: '#1f2229',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        color: '#e8e9ed'
                                    }}
                                    onFocus={(e) => {
                                        e.target.style.borderColor = 'rgba(143, 165, 153, 0.4)';
                                        e.target.style.backgroundColor = '#2a2e36';
                                        e.target.style.boxShadow = '0 0 0 4px rgba(143, 165, 153, 0.1)';
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                                        e.target.style.backgroundColor = '#1f2229';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                    placeholder="Enter your password"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-xl transition-colors"
                                    style={{ color: '#6b7280' }}
                                    onMouseEnter={(e) => e.target.style.color = '#a8adb8'}
                                    onMouseLeave={(e) => e.target.style.color = '#6b7280'}
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                        </div>

                        {/* Options */}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full px-6 py-4 rounded-[10px] font-semibold text-base mb-4 transition-all duration-300"
                            style={{
                                backgroundColor: '#8fa599',
                                color: '#1a1d23'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#9fb5a7';
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(143, 165, 153, 0.25)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#8fa599';
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = 'none';
                            }}
                        >
                            Sign in
                        </button>
                    </form>
                    <div className="text-center mt-10 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                        <p className="text-[15px]" style={{ color: '#a8adb8' }}>
                            Don't have an account?{' '}
                            <a
                                href="#"
                                className="font-semibold transition-colors"
                                style={{ color: '#8fa599' }}
                                onMouseEnter={(e) => e.target.style.color = '#9fb5a7'}
                                onMouseLeave={(e) => e.target.style.color = '#8fa599'}
                            >
                                Create one
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Back to Home */}

            <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Literata:wght@600;700&display=swap');

        * {
          font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes float-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes float-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translate(-30px, 30px) scale(1.1);
            opacity: 0.6;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-1 {
          animation: float-1 20s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 25s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        input::placeholder {
          color: #6b7280;
        }

        input[type="checkbox"]:checked::after {
          content: '✓';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #1a1d23;
          font-size: 13px;
          font-weight: 700;
        }
      `}</style>
        </div>
    );
};

export default Login;