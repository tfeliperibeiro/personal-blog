import { Divider } from '@components/Divider';
import styles from './styles.module.scss';

import Link from 'next/link';
import { BlogPost } from '@models/BlogPost';

type AllPostListProps = {
  posts: BlogPost[];
};

export const AllPostsList = ({ posts }: AllPostListProps) => {
  return (
    <div className={styles['container-all-post-list']}>
      {posts.map((post) => (
        <>
          <Link
            href={`artigo/${post.slug}`}
            key={post.id}
            className={styles['post-link']}
          >
            <div className={styles['post-text']}>
              <h2 className={styles['post-title']}>{post.frontmatter.title}</h2>
              <span className={styles.date}>
                <time>{post.frontmatter.date}</time>
              </span>
            </div>
          </Link>
          <Divider />
        </>
      ))}
    </div>
  );
};
