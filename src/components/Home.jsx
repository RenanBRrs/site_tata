import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.content}>
        <h1>Bem-vindo(a) à minha pagina.</h1>
        <p>
          Olá, eu sou a Professora Taís, e estou muito feliz em recebê-lo(a)
          aqui! Sou apaixonada pela educação e comprometida em proporcionar uma
          experiência de aprendizado enriquecedora para todos os meus alunos.
          Neste site, você encontrará informações sobre os cursos que ofereço,
          meu currículo acadêmico e formas de entrar em contato comigo. Estou
          sempre disponível para ajudá-lo(a) a alcançar seus objetivos
          educacionais e responder a quaisquer dúvidas que você possa ter.
          Espero que você aproveite sua visita!
        </p>
      </div>
    </div>
  );
};

export default Home;
