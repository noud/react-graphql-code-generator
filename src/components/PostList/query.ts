import gql from 'graphql-tag';

export const QUERY_LAUNCH_LIST = gql`
  query posts {
    posts {
      id
      title
    }
  }
`;