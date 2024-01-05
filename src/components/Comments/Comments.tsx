import { Comments as HyvorComments } from '@hyvor/hyvor-talk-react';

import styles from './styles.module.scss';
import { customCss } from './customCss';

type CommentsProps = {
  pageId: string;
};

export const Comments = ({ pageId }: CommentsProps) => {
  const webSiteId = Number(process.env.NEXT_PUBLIC_YOUR_WEBSITE_ID);

  return (
    <div className={styles['container-comments']}>
      <HyvorComments
        website-id={webSiteId}
        page-id={pageId}
        colors="dark"
        page-language="pt-br"
        settings={{
          dark_palette: {
            accent: 'var(--white)',
            box: 'var(--hover)'
          },
          custom_css: customCss
        }}
      />
    </div>
  );
};
