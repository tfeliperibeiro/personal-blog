'use client';

import styles from './styles.module.scss';

import { ProfileImage } from '../ProfileImage';
import { SocialMedia } from '@components/SocialMedia';
import { useMotionValueEvent, useScroll, motion } from 'framer-motion';
import { useState } from 'react';

export const ProfileInformation = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);
  const pixels = 300;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest <= pixels ? setVisible(true) : setVisible(false);
  });

  return (
    <motion.section
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      animate={visible ? 'visible' : 'hidden'}
    >
      <div className={styles.container}>
        <ProfileImage />
        <div className={styles.information}>
          <h1>Thiago</h1>
          <p>Desenvolvedor Front End</p>
        </div>
      </div>
      <p className={styles.description}>
        Código • Desenvolvimento Web • Front End
      </p>
      <SocialMedia />
    </motion.section>
  );
};
