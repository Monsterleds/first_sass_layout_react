import React, { useState } from 'react';

import facebook_icon from '../../assets/icons/facebook_icon.png';
import instagram_icon from '../../assets/icons/instagram_icon.png';
import twitter_icon from '../../assets/icons/twitter_icon.png';

import './styles.sass';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <section>
        <header>
          <h1>Logo</h1>
          <div onClick={() => setIsOpen(!isOpen)}>
            <div className={isOpen ? "closeMenu" : "openMenu"} />
          </div>
        </header>
        <div className="content">
          <h1>Ajude a natureza e colabore com o meio ambiente</h1>
          <button>Saiba mais</button>
          <div className="content_contacts">
            <img src={facebook_icon} alt="facebook_icon" />
            <img src={instagram_icon} alt="instagram_icon" />
            <img src={twitter_icon} alt="twitter_icon" />
          </div>
        </div>
      </section>
      <aside className={isOpen ? "isOpen" : ""}>
        <p>Menu</p>
      </aside>
    </main>
  );
}

export default Home;