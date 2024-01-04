import Link from 'next/link';

import styles from './not-found.module.scss';
import { Gradient } from '@components/Gradient';

export default function NotFound() {
  return (
    <div className={styles['container-not-found']}>
      <Gradient />
      <div>
        <h2 className={styles.title}>Artigo não encontrado 🤔</h2>
        <p className={styles.text}>
          Parece que você está tentando acessar um artigo que não existe.
        </p>
      </div>
      <Link className={styles.link} href="/">
        Voltar para Home
      </Link>
    </div>
  );
}
