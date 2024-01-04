import { PropsWithChildren } from 'react';

import style from './styles.module.scss';

export const Code = ({ children, ...props }: PropsWithChildren) => {
  return (
    <div className={style.container}>
      <pre className={style.code} {...props}>
        {children}
      </pre>
    </div>
  );
};
