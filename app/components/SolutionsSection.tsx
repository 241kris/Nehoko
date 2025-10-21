export default function SolutionsSection() {
  const solutions = [
    {
      name: "eGeStock",
      description: "Solution digitale complète de gestion de stock, facturation et inventaire automatique avec suivi et performance des ventes",
      icon: (
        <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      features: ["Gestion de stock automatique", "Facturation intégrée", "Suivi des performances"],
      category: "Gestion d'entreprise",
      link: "https://e-gestock.com/"
    },
    {
      name: "Kovoko",
      description: "Application innovante de laverie connectée pour gérer et optimiser vos services de blanchisserie en ligne",
      icon: (
        <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      features: ["Service connecté", "Gestion en temps réel", "Réservation en ligne"],
      category: "Service connecté",
      link: "https://kovoko.web.app/"
    },
    {
      name: "Belinkama",
      description: "Plateforme de recherche de logements en location : maisons, appartements, studios et plus encore",
      icon: (
        <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      features: ["Recherche multicritères", "Catalogue varié", "Interface intuitive"],
      category: "Immobilier",
      link: "https://belinkama.vercel.app/"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-full mb-4">
            Nos Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Des logiciels qui
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> transforment</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de solutions numériques conçues pour répondre
            aux défis technologiques de votre entreprise
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm hover:-translate-y-2 rounded-lg border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                    {solution.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {solution.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full border border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50 text-indigo-700 py-2 px-4 rounded-lg transition-all duration-200 group/btn">
                  En savoir plus
                  <svg className="ml-2 w-4 h-4 inline-block group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}