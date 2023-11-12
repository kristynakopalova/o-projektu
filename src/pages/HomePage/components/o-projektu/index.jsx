import wedding from './img/wedding.jpg'
import './style.css'

export const OProjektu = () => {
  return (
    <>
      <div className='project'>
        <h1 className='project__name'>O projektu Svatební itinerář</h1>
        <img className='project__img' src={wedding} alt="wedding on the beach" />
        <h2>Co je cílem projektu?</h2>
        <p className='project__description'>Cílem projektu je vytvořit web s časovou osou. Uživatel zadá datum svatby a podle tohoto údaje se body na časové ose přerendrují např. na konkrétní měsíce. Když uživatel klikne na konkrétní časový bod (např.leden), zobrazí se mu okno se seznamem věcí (koupit prstýnky, objednat svatební výzdobu), které je třeba zařídit v tomto časovém období. Když uživatel rozklikne konkrétní úkol, dozví se potřebné informace, aby úkol mohl splnit. Přínosem projektu by mělo být usnadnění plánování svatby. Náš web uživatele provede plánováním krok po kroku se všemi důležitými informacemi na jednom místě. </p>
      </div>
    </>
  )
};
