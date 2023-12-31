import { slugify, formatDate } from '@utils/index';

import { v4 as uuidv4 } from 'uuid';

import { Post } from 'contentlayer/generated';

export const formatPosts = (posts: Post[]) => {
  const sortedPosts = posts.sort((a, b) => (a.date < b.date ? 1 : -1));

  const formattedPost = sortedPosts.map((post, index) => {
    return {
      id: uuidv4(),
      slug: slugify(post.slug),
      body: post.body,
      newPost: index === 0,
      readingTime: post.readingTime,
      frontmatter: {
        title: post.title,
        description: post.description,
        date: formatDate(post.date),
        image: post.image,
        imageAuthorName: post.imageAuthorName,
        imageProviderName: post.imageProviderName,
        imageAuthorLink: post.imageAuthorLink,
        imageProviderLink: post.imageProviderLink
      }
    };
  });

  return formattedPost;
};
