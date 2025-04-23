function LandingPage() {
  return (
    <div className="px-4 py-10 md:px-12 max-w-7xl mx-auto font-sans">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="flex items-center gap-3">
          <img src="/logo-bmt.png" alt="BMT Solutions logo" className="h-10" />
          <h1 className="text-2xl font-semibold">BMT Solutions</h1>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Demander un devis personnalisé
        </button>
      </header>

      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Automatisez vos calculs CVC/P dans Revit.
      </h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
        L’extension Revit qui booste votre productivité sans compromis sur la précision.
      </p>

      <div className="relative w-full aspect-video max-w-4xl mx-auto mb-10">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo BMT Solutions"
          className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
          allowFullScreen
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Calculs automatisés",
            desc: "Pour chauffage, ventilation, climatisation, et plomberie.",
          },
          {
            title: "Gain de temps",
            desc: "Gagnez des heures précieuses sur chaque projet.",
          },
          {
            title: "Conformité",
            desc: "Conforme aux normes et réglementations en vigueur.",
          },
        ].map((item, i) => (
          <div key={i} className="border border-gray-200 p-6 rounded-xl text-left shadow-sm">
            <div className="text-blue-600 text-2xl mb-2">✓</div>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mb-16">
        <button className="bg-blue-600 text-white px-8 py-4 text-lg rounded-lg hover:bg-blue-700">
          Optimisez la performance de vos équipes BIM avec BMT Solutions
        </button>
      </div>

      <footer className="text-gray-500 text-sm text-center opacity-80">
        <p className="mb-2">Utilisé par des clients de confiance :</p>
        <div className="flex justify-center gap-6">
          <span>VINCI</span>
          <span>Acme</span>
          <span>SETEC</span>
          <span>SPIE</span>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
