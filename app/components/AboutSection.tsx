export default function AboutSection() {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Excellence Technique",
      description: "Code de qualité et technologies de pointe"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "Solutions créatives et avant-gardistes"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "Partenariat étroit avec nos clients"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Performance",
      description: "Résultats rapides et efficaces"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu texte */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full mb-4">
                Qui sommes-nous
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                Une équipe passionnée par 
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> l'innovation</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nehoko est une startup dynamique spécialisée dans l'édition de logiciels et le développement 
                de solutions numériques modernes. Notre mission est de transformer les défis technologiques 
                en opportunités de croissance pour nos clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Avec une approche centrée sur l'innovation et l'excellence, nous créons des solutions 
                sur-mesure qui répondent aux besoins spécifiques de chaque entreprise, en utilisant 
                les technologies les plus avancées du marché.
              </p>
            </div>

            {/* Valeurs */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="p-4 bg-gradient-to-br from-gray-50 to-indigo-50/50 rounded-lg hover:shadow-md transition-all duration-300">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image illustrative */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Développement sur-mesure</h3>
                    <p className="text-indigo-100">Solutions adaptées à vos besoins</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Technologies modernes</h3>
                    <p className="text-indigo-100">Stack technique de pointe</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Équipe experte</h3>
                    <p className="text-indigo-100">Développeurs passionnés</p>
                  </div>
                </div>

                {/* Éléments décoratifs */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-300/20 rounded-full blur-xl"></div>
              </div>
            </div>
            
            {/* Motifs de fond */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-tr from-blue-200 to-cyan-200 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}