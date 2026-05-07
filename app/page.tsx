export default function HomePage() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand-link" href="#">
            <img className="brand-logo" src="/logo.png" alt="AmbuLink" />
          </a>

          <nav className="site-nav">
            <a href="#solution">Solution</a>
            <a href="#ecosysteme">Écosystème</a>
            <a href="#fonctionnement">Fonctionnement</a>
            <a href="#atouts">Atouts</a>
          </nav>

          <a className="header-cta" href="#contact">
            Contactez-nous
          </a>
        </div>
      </header>

      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow-pill">
              <span className="accent-dot" />
              <span>Logistique d&apos;Urgence</span>
            </div>

            <h1>
              La plateforme de coordination logistique pour les{' '}
              <span>secours d&apos;urgence</span>
            </h1>

            <p>
              Optimisez chaque intervention avec une synchronisation parfaite entre
              patients, équipes de terrain et administrateurs. Réduisez les délais et
              sauvez plus de vies.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="/downloads/patient_app.apk" download>
                <span>↓</span>
                Télécharger App Patient
              </a>
              <a className="secondary-button" href="/downloads/mobile_app.apk" download>
                <span>✚</span>
                Télécharger App Mobile Pro
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-logo-card">
              <img className="hero-logo" src="/logo.png" alt="Logo AmbuLink" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="solution">
        <div className="container">
          <div className="section-heading centered">
            <h2>La coordination au cœur de l&apos;urgence</h2>
            <div className="heading-line" />
          </div>

          <div className="three-grid">
            <article className="info-card">
              <div className="icon-box">⟳</div>
              <h3>Réactivité Maximale</h3>
              <p>
                Algorithmes d&apos;assignation intelligents pour une prise en charge en
                moins de 3 minutes.
              </p>
            </article>

            <article className="info-card">
              <div className="icon-box">⇄</div>
              <h3>Flux Synchronisé</h3>
              <p>
                Mise à jour en temps réel des états de mission entre le terrain et la
                supervision centrale.
              </p>
            </article>

            <article className="info-card">
              <div className="icon-box">▣</div>
              <h3>Efficacité Opérationnelle</h3>
              <p>
                Analyse prédictive des besoins pour positionner vos flottes
                stratégiquement.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="ecosysteme">
        <div className="container">
          <div className="section-heading centered">
            <h2>Un écosystème, trois solutions</h2>
            <p>
              Une synergie parfaite pour un flux d&apos;information ininterrompu du
              signalement à l&apos;admission hospitalière.
            </p>
          </div>

          <div className="three-grid ecosystem-grid">
            <article className="ecosystem-card">
              <div className="corner-glow" />
              <div className="ecosystem-icon">⌖</div>
              <h3>Najda</h3>
              <p>
                L&apos;application pour les patients. Elle permet de demander rapidement une
                ambulance, partager sa position et suivre la prise en charge.
              </p>
              <ul>
                <li>Demande simple et rapide</li>
                <li>Suivi de la mission</li>
              </ul>
            </article>

            <article className="ecosystem-card ecosystem-card-featured">
              <div className="corner-glow" />
              <div className="ecosystem-icon">✚</div>
              <h3>AmbuLink Mobile</h3>
              <p>
                L&apos;application des équipes de terrain. Elle aide les chauffeurs et les
                managers à recevoir les missions et gérer les interventions.
              </p>
              <ul>
                <li>Réception des missions</li>
                <li>Gestion des ambulances</li>
              </ul>
            </article>

            <article className="ecosystem-card">
              <div className="corner-glow" />
              <div className="ecosystem-icon">⌁</div>
              <h3>Clinic App</h3>
              <p>
                L&apos;application des cliniques et des structures de santé. Elle permet
                de suivre les demandes, organiser les missions et coordonner le service.
              </p>
              <ul>
                <li>Suivi des demandes</li>
                <li>Coordination opérationnelle</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-white" id="fonctionnement">
        <div className="container">
          <div className="section-heading centered">
            <h2>Comment ça fonctionne</h2>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <div className="step-number">1</div>
              <div className="step-line" />
              <h3>Demande d&apos;aide</h3>
              <p>Le patient signale une urgence via Najda avec sa position GPS précise.</p>
            </article>

            <article className="step-card">
              <div className="step-number">2</div>
              <div className="step-line" />
              <h3>Intervention terrain</h3>
              <p>
                L&apos;équipe reçoit la mission sur AmbuLink Mobile et se prépare à intervenir.
              </p>
            </article>

            <article className="step-card">
              <div className="step-number">3</div>
              <h3>Supervision administrative</h3>
              <p>
                La clinique suit la demande dans Clinic App et coordonne la prise en charge.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="atouts">
        <div className="container">
          <div className="four-grid">
            <article className="asset-card">
              <div className="asset-icon">◉</div>
              <h3>Visibilité en temps réel</h3>
              <p>Cartographie dynamique de chaque unité mobile.</p>
            </article>

            <article className="asset-card">
              <div className="asset-icon">⋯</div>
              <h3>Coordination multi-acteurs</h3>
              <p>Interopérabilité totale avec les services publics.</p>
            </article>

            <article className="asset-card">
              <div className="asset-icon">⌘</div>
              <h3>Gestion centralisée</h3>
              <p>Une source unique de vérité pour vos données.</p>
            </article>

            <article className="asset-card">
              <div className="asset-icon">△</div>
              <h3>Architecture évolutive</h3>
              <p>Cloud natif conçu pour la haute disponibilité.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-cta" id="contact">
        <div className="container">
          <div className="cta-card">
            <h2>Prêt à transformer votre logistique médicale ?</h2>
            <p>
              Rejoignez les services de secours qui ont déjà réduit leur temps
              d&apos;intervention grâce à notre technologie de pointe.
            </p>

            <div className="hero-actions centered-actions">
              <a className="primary-button" href="/downloads/patient_app.apk" download>
                Télécharger App Patient
              </a>
              <a className="secondary-button" href="/downloads/mobile_app.apk" download>
                Télécharger App Mobile Pro
              </a>
            </div>

            <div className="partner-row">
              <span>HOSPITAL_PLUS</span>
              <span>RESCUE_CORE</span>
              <span>MEDI_SAFE</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img className="footer-logo" src="/logo.png" alt="AmbuLink" />
            <p>
              L&apos;excellence logistique au service de la vie. Plateforme de
              coordination santé pensée pour des interventions plus rapides et plus sûres.
            </p>
          </div>

          <div>
            <h4>Produit</h4>
            <ul>
              <li>Najda Patient</li>
              <li>App Mobile Pro</li>
              <li>Clinic App</li>
              <li>Téléchargements</li>
            </ul>
          </div>

          <div>
            <h4>Entreprise</h4>
            <ul>
              <li>À propos</li>
              <li>Contact</li>
              <li>Support</li>
              <li>Déploiement</li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© 2024 AmbuLink Systems. Tous droits réservés.</span>
          <div>
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
