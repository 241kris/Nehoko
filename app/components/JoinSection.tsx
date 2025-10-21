'use client'

import { useState, ChangeEvent, JSX } from 'react'

interface Benefit {
  icon: JSX.Element
  title: string
  description: string
}

export default function JoinSection() {
  const [email, setEmail] = useState<string>('')

  const benefits: Benefit[] = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Accès à nos services',
      description: 'Un seul compte pour accéder à toute la suite Nehoko',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-5 5v-5zM4.828 7l2.828 2.828M9 11a3 3 0 106 0M13 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: 'Actualités exclusives',
      description: 'Recevez en avant-première nos dernières innovations',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      title: 'Blog et ressources',
      description: 'Consultez nos articles techniques et guides pratiques',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: 'Communauté active',
      description: "Échangez avec d'autres utilisateurs et notre équipe",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Partagez vos idées',
      description: 'Proposez des améliorations et nouvelles fonctionnalités',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: 'Support prioritaire',
      description: "Bénéficiez d'un support technique dédié et réactif",
    },
  ]

  return (
    <section id="join" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full mb-4">
              Nous Rejoindre
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
              Connectez-vous à
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {' '}
                l'écosystème Nehoko
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Rejoignez notre communauté et bénéficiez d'un accès privilégié à nos services,
              actualités et ressources exclusives
            </p>
          </div>

          {/* Avis + étoiles */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <div className="hidden sm:block -space-x-2 overflow-hidden">
              {[
                '1491528323818-fdd1faba62cc',
                '1550525811-e5869dd03032',
                '1500648767791-00dcc994a43e',
                '1472099645785-5658abf4ff4e',
              ].map((id, i) => (
                <img
                  key={i}
                  className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src={`https://images.unsplash.com/photo-${id}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                  alt={`user-${i}`}
                />
              ))}
            </div>

            <div className="border-none sm:border-l-2 border-black sm:pl-8">
              <div className="flex justify-center sm:justify-start">
                <h3 className="text-2xl font-semibold mr-2">1.6K</h3>
                <img className="w-5" src="https://www.svgrepo.com/show/513354/star.svg" alt="stars-icon" />
              </div>
              <h3 className="text-sm">déjà 1k connécté</h3>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            {/* Formulaire */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg">
                <div className="text-center pb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Créez votre compte Nehoko</h3>
                  <p className="text-gray-600">
                    Accédez instantanément à tous nos services avec un seul compte
                  </p>
                </div>

                <div className="space-y-6">
                  <input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 text-lg border border-indigo-200 focus:border-indigo-400 focus:outline-none rounded-lg bg-white"
                  />
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white h-12 text-lg font-medium rounded-lg transition-all duration-200 group">
                    Rejoindre Nehoko
                    <svg
                      className="ml-2 w-5 h-5 inline-block group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    En vous inscrivant, vous acceptez nos{' '}
                    <a href="#" className="text-indigo-600 hover:underline">
                      conditions d'utilisation
                    </a>{' '}
                    et notre{' '}
                    <a href="#" className="text-indigo-600 hover:underline">
                      politique de confidentialité
                    </a>
                  </p>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Ou continuez avec</span>
                    </div>
                  </div>

                  <button className="h-12 border w-full border-gray-300 hover:border-gray-400 rounded-lg flex items-center justify-center transition-all duration-200">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </button>
                </div>
              </div>
            </div>

            {/* Avantages */}
            <div className="space-y-6">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                  Pourquoi rejoindre Nehoko ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  En rejoignant notre communauté, vous bénéficiez d'un accès privilégié à notre écosystème complet de solutions numériques et d'un support dédié pour accompagner votre croissance.
                </p>
              </div>

              <div className="grid gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 hover:bg-indigo-50 transition-colors duration-300 group rounded-lg p-4"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-indigo-600 transition-colors">
                          {benefit.title}
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
