import './style.css';

export const OProjektu = () => {
  return (
    <>
      <div className="project">
        <h1 className="project__name">O projektu Svatební itinerář</h1>

        <h2>Co je cílem projektu?</h2>
        <div className="photo_description">
          <img
            className="project_photo_wedding"
            src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fbclid=IwAR09x0HPNffIoo-AVLNaSPv1iPd6m_TCsNM1CPJCj0dIdpB6YrgR4WaBl1c"
            alt="wedding_photo"
          />
          <p className="project__description">
            Cílem projektu je vytvořit web s časovou osou. Uživatel zadá datum
            svatby a podle tohoto údaje se body na časové ose přerendrují např.
            na konkrétní měsíce. Když uživatel klikne na konkrétní časový bod
            (např.leden), zobrazí se mu okno se seznamem věcí (koupit prstýnky,
            objednat svatební výzdobu), které je třeba zařídit v tomto časovém
            období. Když uživatel rozklikne konkrétní úkol, dozví se potřebné
            informace, aby úkol mohl splnit. Přínosem projektu by mělo být
            usnadnění plánování svatby. Náš web uživatele provede plánováním
            krok po kroku se všemi důležitými informacemi na jednom místě.{' '}
          </p>
        </div>
      </div>
    </>
  );
};
