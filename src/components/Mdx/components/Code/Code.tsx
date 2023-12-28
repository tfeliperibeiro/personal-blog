import { HTMLAttributes } from 'react';

import style from './styles.module.scss';

type CodeProps = HTMLAttributes<HTMLPreElement> & {
  children: React.ReactNode;
};

export const Code = ({ children, ...props }: CodeProps) => {
  return (
    <div className={style.container}>
      <pre className={style.code} {...props}>
        {children}
      </pre>
    </div>
  );
};
