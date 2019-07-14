import React from 'react';
import PostSummary from '../summary';
import styles from './styles.css';
import { PostFirebaseModel } from '../../../../../models/post/PostFirebaseModel';

const PostSummaryBox: React.FC<{ posts: PostFirebaseModel[] }> = ({ posts }) => {
  const getPostSummaryBox = () => {
    return posts.map(post => <PostSummary post={post} />);
  };

  return <div className={styles.postSummaryBox}>{getPostSummaryBox()}</div>;
};

export default PostSummaryBox;
