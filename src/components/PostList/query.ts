import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query allPosts {
    allPosts {
      id
      title
    }
  }
`;