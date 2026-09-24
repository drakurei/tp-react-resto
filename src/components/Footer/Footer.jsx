import pokeball from '../../assets/pokeball.svg'

// Footer (Bootstrap grid). The copyright year is computed at render time.
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-poke-navy text-white pt-5 pb-4 mt-auto">
      <div className="container-xl">
        <div className="row g-4">
          <div className="col-md-4">
            <p className="d-flex align-items-center gap-2 fs-4 fw-bold mb-2 font-display">
              <img src={pokeball} alt="" width="28" height="28" />
              PokéBistro
            </p>
            <p className="text-white-50 small mb-0">
              Le restaurant des dresseurs gourmands. Des plats inspirés de l'univers Pokémon, préparés avec des
              produits frais.
            </p>
          </div>

          <div className="col-md-4">
            <h3 className="h6 text-uppercase fw-bold text-warning mb-3">Navigation</h3>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2"><a href="#accueil" className="link-light link-underline-opacity-0 link-underline-opacity-100-hover">Accueil</a></li>
              <li className="mb-2"><a href="#menu" className="link-light link-underline-opacity-0 link-underline-opacity-100-hover">Menu</a></li>
              <li className="mb-2"><a href="#a-propos" className="link-light link-underline-opacity-0 link-underline-opacity-100-hover">À propos</a></li>
              <li><a href="#contact" className="link-light link-underline-opacity-0 link-underline-opacity-100-hover">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h3 className="h6 text-uppercase fw-bold text-warning mb-3">Informations</h3>
            <ul className="list-unstyled small text-white-50 mb-0">
              <li className="mb-2">12 route Victoire, Bourg Palette, 91000 Évry</li>
              <li className="mb-2">01 23 45 67 89</li>
              <li>Ouvert 7j/7 · 11h30 – 22h30</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <p className="small text-white-50 text-center mb-0">
          © {currentYear} PokéBistro — Projet fictif réalisé dans le cadre d'un TP React. Pokémon est une marque de
          Nintendo / Creatures Inc. / GAME FREAK inc.
        </p>
      </div>
    </footer>
  )
}

export default Footer
