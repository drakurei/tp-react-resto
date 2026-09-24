import { handleImageError } from '../../utils/imageFallback'

// Hero section, styled with Tailwind
const heroImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'

function Hero() {
  return (
    <section id="accueil" className="bg-poke-yellow/25 overflow-hidden">
      <div className="container-xl grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-24">
        {/* Text */}
        <div className="text-center lg:text-left">
          <p className="mb-4 inline-block rounded-full bg-white px-4 py-1 text-sm font-bold text-poke-blue shadow-sm">
            Restaurant inspiré de l'univers Pokémon
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-poke-navy md:text-5xl lg:text-6xl">
            Attrapez-les tous…
            <br />
            <span className="text-poke-red">dans votre assiette !</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-slate-700 lg:mx-0">
            Bentos, burgers, bowls et desserts inspirés de vos Pokémon préférés. Des recettes fraîches, colorées
            et préparées comme au Bourg Palette.
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-poke-red px-6 py-3 font-bold text-white no-underline shadow-md transition hover:-translate-y-0.5 hover:bg-red-700 hover:text-white"
            >
              Voir le menu
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="#a-propos"
              className="inline-flex items-center rounded-full border-2 border-poke-navy px-6 py-3 font-bold text-poke-navy no-underline transition hover:bg-poke-navy hover:text-white"
            >
              Notre histoire
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-600 lg:justify-start">
            <li>28 plats</li>
            <li>6 catégories</li>
            <li>Ouvert 7j/7</li>
          </ul>
        </div>

        {/* Visual */}
        <div className="relative mx-auto flex aspect-square w-72 items-center justify-center sm:w-80 lg:w-[26rem]">
          <div className="absolute inset-0 rounded-full bg-poke-yellow shadow-xl" aria-hidden="true"></div>
          <div className="absolute inset-6 rounded-full border-4 border-white/70" aria-hidden="true"></div>
          <img
            src={heroImage}
            alt="Pikachu, la mascotte du PokéBistro"
            className="relative w-4/5 drop-shadow-2xl transition hover:scale-105"
            width="475"
            height="475"
            onError={handleImageError}
          />
          <span className="absolute -right-2 top-8 rounded-2xl bg-white px-4 py-2 text-sm font-bold text-poke-navy shadow-lg">
            Nouveau : Mewtwo Deluxe Menu
          </span>
          <span className="absolute -left-2 bottom-10 rounded-2xl bg-poke-navy px-4 py-2 text-sm font-bold text-white shadow-lg">
            À partir de 3,20 €
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero
