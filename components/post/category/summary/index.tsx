import React from 'react';
import styles from './styles.css';
import { PostFirebaseModel } from '../../../../models/post/PostFirebaseModel';

const PostSummary: React.FC<{ post: PostFirebaseModel }> = ({ post }) => {
  const created: number = post.created ? post.created.seconds : 0;
  const a = 1559468688;
  // const datess = post.created ? new Date(post.created.seconds) : '';

  console.log('##created:++++', created, '++++++');
  console.log('##created11:++++', new Date(a), '++++++');
  console.log('##created22:++++', new Date(created).toISOString, '++++++');
  // console.log('##created: ', created, ' ?? ', post.created, ' ?? ', datess);

  return (
    <div className={styles.postSummary}>
      <div className={styles.title}>
        <a href={`/content?id=${post.id}`}>
          <b>{post.title}</b>
        </a>
      </div>
      {/* <div className={styles.created}> {created} </div> */}
    </div>
  );
};

export default PostSummary;
