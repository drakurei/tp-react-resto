// "À propos" section, styled with Tailwind
const aboutImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png'

const stats = [
  { value: '28', label: 'plats à la carte' },
  { value: '6', label: 'catégories' },
  { value: '100 %', label: 'fictif, 0 % de Pokémon cuisiné' },
]

function About() {
  return (
    <section id="a-propos" className="py-16">
      <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-poke-blue">À propos</p>
          <h2 className="mb-6 font-display text-3xl font-bold text-poke-navy md:text-4xl">
            Le restaurant des dresseurs gourmands
          </h2>
          <p className="mb-4 text-slate-700">
            PokéBistro est né d'une idée simple : et si chaque Pokémon avait son plat ? Un bento électrique pour
            Pikachu, un burger flamboyant pour Salamèche, un bowl frais et bleu pour Carapuce…
          </p>
          <p className="mb-8 text-slate-700">
            Nos recettes s'inspirent de la couleur, du type et du caractère de chaque Pokémon. Tout est préparé
            sur place, avec des produits frais et beaucoup de bonne humeur.
          </p>
          <dl className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                <dt className="font-display text-3xl font-bold text-poke-red">{stat.value}</dt>
                <dd className="mb-0 text-sm text-slate-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="rounded-[2rem] bg-linear-to-br from-poke-blue to-poke-navy p-8 shadow-xl">
            <img
              src={aboutImage}
              alt="Évoli, l'ambassadeur des desserts du PokéBistro"
              className="mx-auto w-3/4 drop-shadow-2xl"
              width="475"
              height="475"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null
                event.currentTarget.src = '/pokeball.svg'
              }}
            />
          </div>
          <p className="absolute -bottom-4 left-1/2 w-max -translate-x-1/2 rounded-full bg-poke-yellow px-5 py-2 text-sm font-bold text-poke-navy shadow-lg">
            Ouvert 7j/7 · 11h30 – 22h30
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
