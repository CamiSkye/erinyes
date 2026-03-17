export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-sm leading-relaxed">
      <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>

      {/* Éditrice */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Éditrice du site</h2>
        <p>
          Camille Lacroix, développeuse web, responsable du projet <em>Erinyes</em>
        </p>
        <p>Contact : erinyes.contact@gmail.com</p>
      </section>

      {/* Hébergement */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Hébergement</h2>
        <p>Netlify, Inc.</p>
        <p>44 Montgomery Street, Suite 300</p>
        <p>San Francisco, CA 94104</p>
        <p>États-Unis</p>
        <p>
          Site :{" "}
          <a
            href="https://www.netlify.com"
            target="_blank"
            className="underline"
          >
            https://www.netlify.com
          </a>
        </p>
      </section>

      {/* Propriété intellectuelle */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Propriété intellectuelle</h2>
        <p>
          Les contenus présents sur le site <strong>Erinyes</strong> (textes,
          formations, vidéos, ressources, structure) sont protégés par le droit
          de la propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, distribution ou utilisation sans autorisation
          préalable est interdite.
        </p>
      </section>

      {/* Données */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Données personnelles</h2>
        <p>
          Le site ne collecte pas directement de données personnelles.
        </p>
        <p>
          Cependant, certains contenus intégrés (notamment des vidéos YouTube)
          peuvent collecter des données via des cookies ou des traceurs.
        </p>
        <p>
          Ces traitements relèvent de la responsabilité des services tiers
          concernés.
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Cookies</h2>
        <p>
          Le site peut utiliser des cookies via des services tiers afin d’assurer
          le bon fonctionnement des contenus intégrés.
        </p>
        <p>
          Vous pouvez configurer votre navigateur pour refuser les cookies.
        </p>
      </section>

      {/* Responsabilité */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-2">Responsabilité</h2>
        <p>
          Le site <strong>Erinyes</strong> propose des contenus à vocation
          informative et de sensibilisation.
        </p>
        <p>
          Les informations diffusées ne remplacent pas l’avis d’un professionnel.
        </p>
        <p>
          Le site peut contenir des liens vers des ressources externes
          (associations, numéros d’aide, etc.). L’éditrice du site ne peut être
          tenue responsable du contenu de ces ressources.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-bold mb-2">Contact</h2>
        <p>erinyes.contact@gmail.com</p>
      </section>
    </div>
  );
}