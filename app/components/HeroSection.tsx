'use client'
import Image from 'next/image'
import { motion } from 'framer-motion';
import PixelBlast from './PixelBlast ';
export default function HeroSection() {
    return (
        <section className="relative  flex items-center  h-[500px]  ">

            {/*animation bg */}
            <div className="absolute inset-0 w-full [1000px]  ">
                <PixelBlast
                    variant="circle"
                    pixelSize={8}
                    color="#B19EEF"
                    patternScale={3}
                    patternDensity={1.2}
                    pixelSizeJitter={0.5}
                    enableRipples
                    rippleSpeed={0.4}
                    rippleThickness={0.12}
                    rippleIntensityScale={1.5}
                    liquid
                    liquidStrength={0.12}
                    liquidRadius={1.2}
                    liquidWobbleSpeed={5}
                    speed={0.6}
                    edgeFade={0.25}
                    transparent
                />
            </div>


            <div className="relative z-10 text-center  sm:px-6 lg:px-8 max-w-4xl mx-auto">

                {/* LOGO avec effet de mélange */}
                <div className="relative mx-auto w-[150px] h-[150px] mix-blend-overlay opacity-95">
                    <Image src="/logo.png" alt="Logo" fill className="object-contain" />
                </div>

                {/* Titre principal */}
                <h1 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
                    <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                        Pas juste des devs,
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                        On build, on vibe, on innove.
                    </span>
                </h1>

                <p className="text-lg md:text-xl font-semibold text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Bâtisseurs de l'avenir numérique à travers des solutions intelligentes et modernes qui répondent à de vrais besoins.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button

                        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 group overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center justify-center">
                            Découvrir nos solutions
                            <svg
                                className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </span>

                        {/* léger effet de brillance en diagonale */}
                        <motion.span
                            className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-30"
                            animate={{
                                x: ['-100%', '100%'],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    </button>
                    <button className="border-2 border-indigo-200 hover:border-indigo-300 text-indigo-700 px-8 py-4 text-lg font-medium bg-white/50 backdrop-blur-sm rounded-lg transition-all duration-200">
                        En savoir plus
                    </button>
                </div>
            </div>
        </section>
    )
}
