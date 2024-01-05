'use client';

import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa6';

import { PostService } from '@services/index';

import { Mdx } from '@components/Mdx';

import styles from './styles.module.scss';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Comments } from '@components/Comments';

type Props = {
  params: {
    slug: string;
  };
};

export default function Posts({ params }: Props) {
  const { post } = PostService.getBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <Link className={styles['back-link']} href={'/'}>
        <FaArrowLeft /> <span>Voltar</span>
      </Link>
      <div className={styles['container-image']}>
        <Image
          src={post?.frontmatter.image as string}
          alt={post?.frontmatter.title as string}
          fill
          loading="lazy"
          style={{ borderRadius: '1rem', objectFit: 'cover' }}
        />
      </div>

      <div className={styles['container-image-link']}>
        <span className={styles.links}>
          Photo by{' '}
          <Link href={post.frontmatter.imageAuthorLink}>
            {post.frontmatter.imageAuthorName}
          </Link>{' '}
          on{' '}
          <Link href={post.frontmatter.imageProviderLink}>
            {post.frontmatter.imageProviderName}
          </Link>
        </span>
      </div>

      <h1 className={styles['post-title']}>{post?.frontmatter.title}</h1>
      <span className={styles['text-date']}>{post?.frontmatter.date} • </span>
      <span
        className={styles.readingTime}
      >{`${post?.readingTime} min de leitura`}</span>
      <Mdx code={post?.body.code} />
      <Comments pageId={post.slug} />
    </div>
  );
}
