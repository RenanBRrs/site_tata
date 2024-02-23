import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.sobre_container}>
      <div className={styles.content}>
        <h1>Sobre Mim</h1>
        <p>
          Olá! Sou Taís, formada em Pedagogia pela Faccat e pós-graduada em
          Psicopedagogia pela Faculdade FaSouza. Minha jornada acadêmica foi
          marcada pela busca contínua por conhecimento e pelo compromisso com a
          excelência educacional. Com experiência prática como educadora, estou
          animada para compartilhar minha paixão pela educação e ajudar meus
          alunos a alcançarem seu pleno potencial.
        </p>
      </div>
    </div>
  );
};

export default About;
