import { AllPostsList } from './components/AllPostList';

import { NewPostCard } from './components/NewPostCard';

import styles from './styles.module.scss';
import { PostService } from '@services/index';

export const Posts = () => {
  const { posts } = PostService.getAll();

  return (
    <section className={styles['container-posts']}>
      <NewPostCard />
      <p className={styles['all-articles-text']}>Todos os artigos:</p>
      <AllPostsList posts={posts} />
    </section>
  );
};
