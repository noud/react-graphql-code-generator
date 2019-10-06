import * as React from 'react';
import { PostsQuery } from '../../generated/graphql';
import './styles.css';

interface Props {
  data: PostsQuery;
}

const className = 'LaunchList';

const Post: React.FC<Props> = ({ data }) => (
  <div className={className}>
    <h3>Launches</h3>
    <ol className={`${className}__list`}>
      {!!data.posts &&
        data.posts.map(
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