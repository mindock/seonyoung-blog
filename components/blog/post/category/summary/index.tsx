import React from 'react';
import styles from './styles.css';
import { PostFirebaseModel } from '../../../../../models/post/PostFirebaseModel';

export function getDateString(second: number): string {
  const formatter = new Intl.DateTimeFormat('ko');
  const secondToDate: Date = new Date(second * 1000);
  const dateString = formatter.format(secondToDate);

  return dateString;
}

const PostSummary: React.FC<{ post: PostFirebaseModel }> = ({ post }) => {
  const createdSecond: number = post.created ? post.created.seconds : 0;
  const createdString = getDateString(createdSecond);

  return (
    <div className={styles.postSummary}>
      <div className={styles.title}>
        <a href={`/content?id=${post.id}`}>
          <b>{post.title}</b>
        </a>
      </div>
      <div className={styles.created}> {createdString} </div>
    </div>
  );
};

export default PostSummary;
