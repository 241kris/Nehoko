'use client'
import Image from 'next/image'
import { useState } from 'react';

export default function Footer() {
    const [email, setEmail] = useState('');

    const footerLinks = {
        company: [
            { name: 'Qui sommes-nous', href: '#about' },
            { name: 'Notre équipe', href: '#team' },
            { name: 'Carrières', href: '#careers' },
            { name: 'Presse', href: '#press' }
        ],
        solutions: [
            { name: 'NehokoWeb', href: '#solutions' },
            { name: 'NehokoApp', href: '#solutions' },
            { name: 'NehokoData', href: '#solutions' },
            { name: 'NehokoSecure', href: '#solutions' }
        ],
        resources: [
            { name: 'Blog', href: '#blog' },
            { name: 'Documentation', href: '#docs' },
            { name: 'Guides', href: '#guides' },
            { name: 'API', href: '#api' }
        ],
        support: [
            { name: 'Centre d\'aide', href: '#help' },
            { name: 'Contact', href: '#contact' },
            { name: 'Statut', href: '#status' },
            { name: 'Communauté', href: '#community' }
        ]
    };

    const socialLinks = [
        {
            icon: (
                // Facebook
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.445 18.627 0 12 0S0 5.445 0 12.073c0 6.019 4.388 10.984 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.537c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.057 24 18.092 24 12.073z" />
                </svg>
            ),
            href: '#',
            name: 'Facebook'
        },
        {
            icon: (
                // YouTube
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.09-2.107C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.408.579A2.974 2.974 0 0 0 .502 6.186 31.07 31.07 0 0 0 0 12a31.07 31.07 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.09 2.107C4.495 20.5 12 20.5 12 20.5s7.505 0 9.408-.579a2.974 2.974 0 0 0 2.09-2.107A31.07 31.07 0 0 0 24 12a31.07 31.07 0 0 0-.502-5.814zM9.75 15.02v-6.04l6 3.02-6 3.02z" />
                </svg>
            ),
            href: '#',
            name: 'YouTube'
        },

        {
            icon: (
                // X (anciennement Twitter)
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2H21.5l-7.5 8.571L22 22h-6.23l-4.869-6.171L5.487 22H2.23l7.982-9.143L2 2h6.383l4.369 5.657L18.244 2zM17.1 19.668h1.725L7.043 4.18H5.184l11.916 15.488z" />
                </svg>
            ),
            href: '#',
            name: 'X (Twitter)'
        },
        {
            icon: (
                // LinkedIn
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24H22.23C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.23 0zM7.05 20.452H3.56V9h3.49v11.452zM5.3 7.433c-1.14 0-2.06-.926-2.06-2.065s.92-2.063 2.06-2.063c1.14 0 2.06.925 2.06 2.063 0 1.139-.92 2.065-2.06 2.065zM20.45 20.452h-3.55v-5.569c0-1.328-.03-3.037-1.85-3.037-1.85 0-2.14 1.445-2.14 2.939v5.667H9.35V9h3.41v1.561h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.455v6.286z" />
                </svg>
            ),
            href: '#',
            name: 'LinkedIn'
        },
        {
            icon: (
                // TikTok
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.75 2h3.5c.17 1.19.66 2.27 1.45 3.16a5.52 5.52 0 0 0 3.14 1.6v3.6a9.01 9.01 0 0 1-4.64-1.27v6.91A7.01 7.01 0 0 1 9.19 23C5.27 23 2 19.73 2 15.81a7.01 7.01 0 0 1 10.75-5.88v3.86a3.41 3.41 0 0 0-1.56-.39 3.25 3.25 0 0 0 0 6.5c1.37 0 2.5-.89 2.5-2V2z" />
                </svg>
            ),
            href: '#',
            name: 'TikTok'
        }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Newsletter Section */}
            <div className="border-b border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="max-w-4xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif">
                            Restez informé de nos dernières innovations
                        </h3>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Recevez nos actualités, guides techniques et annonces de nouveaux produits
                            directement dans votre boîte mail
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Votre adresse email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:border-indigo-500 focus:outline-none px-4 py-3 rounded-lg"
                            />
                            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-200 group">
                                S'abonner
                                <svg className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div>
                            {/* LOGO avec effet de mélange */}
                            <div className="relative   w-[100px] h-[100px]  opacity-95">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-serif mb-4">
                                Nehoko
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Startup innovante spécialisée dans l'édition de logiciels et le développement
                                de solutions numériques et modernes.
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>contact@nehoko.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+241 77001355</span>
                            </div>
                              <div className="flex items-center space-x-3 text-gray-400">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+241 60100971</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Libreville, Gabon</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 group"
                                    aria-label={social.name}
                                >
                                    <span className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Entreprise</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Solutions</h4>
                        <ul className="space-y-3">
                            {footerLinks.solutions.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Ressources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Support</h4>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © 2024 Nehoko. Tous droits réservés.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                Politique de confidentialité
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                Conditions d'utilisation
                            </a>
                            <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}