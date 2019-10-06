import * as React from 'react';
import { usePostsQuery } from '../../generated/graphql';
import PostList from './Post';

const PostListContainer = () => {
  const { data, error, loading } = usePostsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <PostList data={data} />;
};

export default PostListContainer;