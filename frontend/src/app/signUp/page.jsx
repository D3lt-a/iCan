'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
        career: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SignUp submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ backgroundColor: '#1a1d23', color: '#e8e9ed' }}
        >

            {/* Background Effects */}
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/4 w-[800px] h-[800px] pointer-events-none">
                <div
                    className="w-full h-full rounded-full animate-float-1"
                    style={{
                        background: 'radial-gradient(circle, rgba(143, 165, 153, 0.06) 0%, transparent 70%)'
                    }}
                />
            </div>

            <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] pointer-events-none">
                <div
                    className="w-full h-full rounded-full animate-float-2"
                    style={{
                        background: 'radial-gradient(circle, rgba(124, 156, 191, 0.05) 0%, transparent 70%)'
                    }}
                />
            </div>

            {/* Container */}
            <div
                className="
                    relative z-10 w-full
                    max-w-[480px]
                    md:max-w-[720px]
                    lg:max-w-[900px]
                    px-6 md:px-8
                    animate-fade-in-up
                "
            >

                {/* Logo */}
                <div className="text-center mb-10">
                    <div
                        className="text-4xl font-bold tracking-tight mb-2"
                        style={{ fontFamily: 'Literata, serif' }}
                    >
                        Ican
                    </div>
                    <div className="text-[15px]" style={{ color: '#a8adb8' }}>
                        Turn goals into structured journeys
                    </div>
                </div>

                {/* Card */}
                <div
                    className="rounded-[20px] p-8 md:p-10 lg:p-12 relative overflow-hidden"
                    style={{
                        backgroundColor: '#2a2e36',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.3)'
                    }}
                >
                    {/* Top Gradient */}
                    <div
                        className="absolute top-0 left-0 right-0 h-[3px]"
                        style={{ background: 'linear-gradient(90deg, #8fa599, #7c9cbf)' }}
                    />

                    {/* Header */}
                    <div className="mb-8">
                        <h1
                            className="text-[28px] md:text-[32px] font-bold mb-3 tracking-tight"
                            style={{ fontFamily: 'Literata, serif' }}
                        >
                            Create your account
                        </h1>
                        <p className="text-base" style={{ color: '#a8adb8' }}>
                            Start your journey toward meaningful growth.
                        </p>
                    </div>

                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
                    >

                        {/* Username */}
                        <div className="md:col-span-1">
                            <label className="block mb-2 text-[14px] font-semibold" style={{ color: '#a8adb8' }}>
                                Username
                            </label>
                            <input
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-[10px] outline-none transition-all"
                                style={{
                                    backgroundColor: '#1f2229',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#e8e9ed'
                                }}
                                placeholder="iCanUser"
                                required
                            />
                        </div>

                        {/* Email */}
                        <div className="md:col-span-1">
                            <label className="block mb-2 text-[14px] font-semibold" style={{ color: '#a8adb8' }}>
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-[10px] outline-none transition-all"
                                style={{
                                    backgroundColor: '#1f2229',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#e8e9ed'
                                }}
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="md:col-span-2">
                            <label className="block mb-2 text-[14px] font-semibold" style={{ color: '#a8adb8' }}>
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-[10px] outline-none transition-all"
                                style={{
                                    backgroundColor: '#1f2229',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#e8e9ed'
                                }}
                                placeholder="*****"
                                required
                            />
                        </div>

                        {/* Role */}
                        <div className="md:col-span-1">
                            <label className="block mb-2 text-[14px] font-semibold" style={{ color: '#a8adb8' }}>
                                Role
                            </label>
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-5 py-4 pr-12 rounded-[10px] appearance-none outline-none"
                                style={{
                                    backgroundColor: '#1f2229',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#e8e9ed'
                                }}
                                required
                            >
                                <option value="" disabled>Select role</option>
                                <option value="apprentice">Apprentice</option>
                                <option value="fellow">Fellow</option>
                                <option value="mentor">Mentor</option>
                            </select>
                        </div>

                        {/* Career */}
                        <div className="md:col-span-1">
                            <label className="block mb-2 text-[14px] font-semibold" style={{ color: '#a8adb8' }}>
                                Career
                            </label>
                            <input
                                name="career"
                                value={formData.career}
                                onChange={handleChange}
                                className="w-full px-5 py-4 rounded-[10px] outline-none transition-all"
                                style={{
                                    backgroundColor: '#1f2229',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    color: '#e8e9ed'
                                }}
                                placeholder="Software Engineer"
                                required
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="md:col-span-2 w-full mt-2 px-6 py-4 rounded-[10px] font-semibold transition-all"
                            style={{
                                backgroundColor: '#8fa599',
                                color: '#1a1d23'
                            }}
                        >
                            Sign Up
                        </button>
                    </form>

                    {/* Footer */}
                    <div
                        className="text-center mt-8 pt-6"
                        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
                    >
                        <p className="text-[15px]" style={{ color: '#a8adb8' }}>
                            Already have an account?{' '}
                            <Link href={'/signIn'} className="font-semibold" style={{ color: '#8fa599' }}>
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Animations & Fonts */}
            <style jsx>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Literata:wght@600;700&display=swap');

                * {
                    font-family: 'DM Sans', sans-serif;
                }

                @keyframes float-1 {
                    0%, 100% { transform: translate(0,0) scale(1); opacity: 0.4; }
                    50% { transform: translate(30px,-30px) scale(1.1); opacity: 0.6; }
                }

                @keyframes float-2 {
                    0%, 100% { transform: translate(0,0) scale(1); opacity: 0.4; }
                    50% { transform: translate(-30px,30px) scale(1.1); opacity: 0.6; }
                }

                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-float-1 { animation: float-1 20s infinite ease-in-out; }
                .animate-float-2 { animation: float-2 25s infinite ease-in-out; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
            `}</style>
        </div>
    );
};

export default SignUp;
