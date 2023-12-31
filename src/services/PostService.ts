import { formatPosts } from '@utils/index';

import { allPosts } from 'contentlayer/generated';

export const PostService = {
  getAll: () => {
    const formattedPost = formatPosts(allPosts);

    return {
      posts: formattedPost
    };
  },

  getBySlug: (slug: string) => {
    const formattedPost = formatPosts(allPosts);
    const post = formattedPost.find((post) => post.slug === slug);

    return {
      post
    };
  },

  getNewPost: () => {
    const formattedPost = formatPosts(allPosts);
    const newPost = formattedPost.find((post) => post.newPost);

    return {
      newPost
    };
  }
};
