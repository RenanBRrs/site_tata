import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src={`${process.env.PUBLIC_URL}/images/tata.jpg`} // Caminho para a imagem
        alt='Profile'
        className={styles.profile_image}
      />
      <h1 className={styles.title}>Professora Taís Muniz</h1>
      <nav>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/sobre'>Sobre</a>
          </li>
          <li>
            <a href='/contato'>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
