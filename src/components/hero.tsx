import React from 'react';
import { Star, ArrowUpRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-neutral text-neutral-content flex flex-col md:flex-row items-center px-6 md:px-20 py-12 gap-10 select-none ">
      {/* Colonne gauche */}
      <div className="flex-1 max-w-xl space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center bg-white/10 text-white text-sm px-3 py-1 rounded-full w-fit gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible pour des projets
        </div>

        {/* Titre */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Votre artisan de confiance pour une maison de qualité
        </h1>

        {/* Description */}
        <p className="text-white/70 text-lg">
          Artisan plaquiste expert avec 10 ans d’expérience, spécialiste en rénovation & finitions modernes. Donnez du style et du confort à votre intérieur avec notre savoir-faire.
        </p>

        {/* Bouton */}
        <button className="btn btn-neutral rounded-full gap-2">
          Travaillons ensemble
          <ArrowUpRight size={18} />
        </button>
      </div>

      {/* Colonne droite : image + encart */}
      <div className="flex-1 relative h-[750px] w-full">
        <img
          src="public\image\istockphoto-1176510478-612x612.jpg"
          alt="Artisan moderne"
          className="h-full w-full object-cover rounded-[40px]"
          draggable={false}
        />

        {/* Encart d'avis */}
        <div className="absolute bottom-6 right-6 bg-white/50 backdrop-blur-md p-4 rounded-xl shadow-xl text-neutral max-w-sm select-none pointer-events-none">
          <div className="flex gap-1 text-yellow-500 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <p className="text-sm text-gray-800">
            "Grâce au placo, les possibilités sont infinies : rénovation ou construction, avec effets LED pour transformer votre intérieur et vous apaiser."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
