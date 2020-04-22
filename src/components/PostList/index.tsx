import * as React from 'react';
import { useAllPostsQuery } from '../../generated/graphql';
import PostList from './Post';

const PostListContainer = () => {
  const { data, error, loading } = useAllPostsQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <PostList data={data} />;
};

export default PostListContainer;