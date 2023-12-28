'use client';

import { useState } from 'react';
import { useScroll, motion, useMotionValueEvent } from 'framer-motion';

import { ProfileImage } from '../Profile/ProfileImage';
import { SocialMedia } from '../SocialMedia';
import styles from './styles.module.scss';

export const MenuFloat = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const pixels = 300;

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest > pixels ? setVisible(true) : setVisible(false);
  });

  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: '-100vh' } }}
      animate={visible ? 'visible' : 'hidden'}
      initial="hidden"
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={styles['container-menu-float']}
    >
      <ProfileImage size="small" isMenuFloat />
      <SocialMedia />
    </motion.div>
  );
};
