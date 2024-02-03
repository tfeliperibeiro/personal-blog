import { useMDXComponent } from 'next-contentlayer/hooks';

import { MDXComponents } from 'mdx/types';

import styles from './styles.module.scss';

import { Code } from './components';

const components: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 className={styles.headings} {...props}>
      {children}
    </h1>
  ),

  h2: ({ children, ...props }) => (
    <h2 className={styles.headings} {...props}>
      {children}
    </h2>
  ),

  h3: ({ children, ...props }) => (
    <h3 className={styles.headings} {...props}>
      {children}
    </h3>
  ),

  a: ({ children, ...props }) => <a {...props}>{children}</a>,

  p: ({ children, ...props }) => (
    <p className={styles.paragraphs} {...props}>
      {children}
    </p>
  ),

  pre: ({ children, ...props }) => <Code {...props}>{children}</Code>,

  blockquote: ({ children, ...props }) => (
    <blockquote className={styles.blockquote} {...props}>
      {children}
    </blockquote>
  ),

  em: ({ children, ...props }) => (
    <em className={styles.emphasis} {...props}>
      {children}
    </em>
  )
};

type MdxProps = {
  code?: string;
};

export const Mdx = ({ code = '' }: MdxProps) => {
  const Component = useMDXComponent(code);

  return (
    <div className={styles['mdx-components']}>
      <Component components={components} />
    </div>
  );
};
