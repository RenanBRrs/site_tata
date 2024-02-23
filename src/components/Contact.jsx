import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contato_container}>
      <div className={styles.content}>
        <h1>Contato</h1>
        <ul className={styles.contato_list}>
          <li>
            <FaEnvelope /> taismuniz1@hotmail.com
          </li>
          <li>
            <FaPhone /> (51) 9 9764-6946
          </li>
          <li>
            <FaLinkedin />{' '}
            <a
              href='https://www.linkedin.com/in/taís-muniz-4262a4208'
              target='_blank'
              rel='noopener noreferrer'>
              Seu LinkedIn
            </a>
          </li>
          <li>
            <FaInstagram />{' '}
            <a
              href='https://www.instagram.com/taís_muniz'
              target='_blank'
              rel='noopener noreferrer'>
              Seu Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
