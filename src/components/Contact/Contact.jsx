import { useState } from 'react'

// Contact section (Tailwind). The form is a demo: nothing is sent anywhere.
const inputClasses =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-800 outline-none transition focus:border-poke-blue focus:ring-2 focus:ring-poke-blue/40'

function Contact() {
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSent(true)
    event.target.reset()
  }

  return (
    <section id="contact" className="bg-poke-yellow/25 py-16">
      <div className="container-xl grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-poke-blue">Contact</p>
          <h2 className="mb-6 font-display text-3xl font-bold text-poke-navy md:text-4xl">Venez nous voir</h2>
          <address className="mb-8 not-italic text-slate-700">
            <p className="mb-2">
              <strong className="text-poke-navy">Adresse :</strong> 12 route Victoire, Bourg Palette, 91000 Évry
            </p>
            <p className="mb-2">
              <strong className="text-poke-navy">Téléphone :</strong> 01 23 45 67 89
            </p>
            <p className="mb-0">
              <strong className="text-poke-navy">Horaires :</strong> tous les jours, 11h30 – 14h30 et 18h30 – 22h30
            </p>
          </address>
          <ul className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
            <li className="rounded-full bg-white px-4 py-2 shadow-sm">Sur place</li>
            <li className="rounded-full bg-white px-4 py-2 shadow-sm">À emporter</li>
            <li className="rounded-full bg-white px-4 py-2 shadow-sm">Livraison par Roucool</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-6 shadow-lg md:p-8">
          <div className="mb-4">
            <label htmlFor="contact-name" className="mb-1 block text-sm font-semibold text-poke-navy">
              Nom
            </label>
            <input id="contact-name" name="name" type="text" className={inputClasses} required />
          </div>
          <div className="mb-4">
            <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold text-poke-navy">
              Email
            </label>
            <input id="contact-email" name="email" type="email" className={inputClasses} required />
          </div>
          <div className="mb-6">
            <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold text-poke-navy">
              Message
            </label>
            <textarea id="contact-message" name="message" rows="4" className={inputClasses} required></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-poke-blue px-6 py-3 font-bold text-white transition hover:bg-poke-navy"
          >
            Envoyer le message
          </button>
          {isSent && (
            <p className="mt-4 mb-0 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700" role="status">
              Merci ! Votre message a bien été envoyé (formulaire de démonstration).
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
