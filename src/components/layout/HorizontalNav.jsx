import { IMG_PATH } from "../../utils/uniformData";

export default function HorizontalNav() {
  return (
    <header className="header">
      <nav className="horizontal-nav">
        <div className="horizontal-nav__logo">
          <img src={`${IMG_PATH}logo.png`} alt="Logo" />
          <h1>SportSee</h1>
        </div>
        <ul className="horizontal-nav__links">
          <li>Accueil</li>
          <li>Profil</li>
          <li>Réglage</li>
          <li>Communtauté</li>
        </ul>
      </nav>
    </header>
  );
}
