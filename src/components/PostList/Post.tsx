import * as React from 'react';
import { AllPostsQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: AllPostsQuery;
}

const className = 'PostsList';

const Post: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Posts</h3>
    <ol className={`${className}__list`}>
      {!!data.allPosts &&
        data.allPosts.map(
            (post, i) =>
              !!post && (
                <li key={i} className={`${className}__item`}>
                  {post.title}
                </li>
              ),
          )}
      </ol>
    </div>
  );
  
  export default Post;