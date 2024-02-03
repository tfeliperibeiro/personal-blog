export type BlogPost = {
  slug: string;
  readingTime: number;
  newPost: boolean;
  body: {
    raw: string;
    code: string;
  };
  frontmatter: {
    title: string;
    description: string;
    date: string;
    image: string;
    imageAuthorName: string;
    imageProviderName: string;
    imageAuthorLink: string;
    imageProviderLink: string;
  };
};
