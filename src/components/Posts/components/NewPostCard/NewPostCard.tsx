import { PostService } from '@/services';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const NewPostCard = () => {
  const { newPost } = PostService.getNewPost();

  return (
    <Link
      href={`artigo/${newPost?.slug}`}
      className={styles['container-new-post-card']}
    >
      <div className={styles['container-pulse']}>
        <div className={styles.pulse} />
        <p>Novo</p>
      </div>
      <div className={styles['container-image']}>
        <Image
          src={newPost?.frontmatter.image as string}
          alt={newPost?.frontmatter.title as string}
          fill
          loading="lazy"
          style={{ borderRadius: '1rem', objectFit: 'cover' }}
        />
      </div>

      <div>
        <h2 className={styles['post-title']}>{newPost?.frontmatter.title}</h2>
        <span className={styles.date}>
          <time>{newPost?.frontmatter.date}</time> •{' '}
        </span>
        <span
          className={styles.date}
        >{`${newPost?.readingTime} min de leitura`}</span>
      </div>
      <p className={styles.description}>{newPost?.frontmatter.description}</p>
    </Link>
  );
};
