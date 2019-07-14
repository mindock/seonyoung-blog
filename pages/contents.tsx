import React, { useContext } from 'react';
import { NextFC } from 'next';
import { getPostByCategory } from '../lib/firebase/postStorage';
import { EN_MAIN_CATEGORY } from '../models/category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../models/category/EN_SUB_CATEGORY';
import PostSummaryBox from '../components/blog/post/category/summaryBox';
import { PostFirebaseModel } from '../models/post/PostFirebaseModel';
import { AuthStoreContext } from '../stores/auth';
import { observer } from 'mobx-react-lite';
import styles from '../styles/contents.css';

interface ContentsProps {
  category: EN_MAIN_CATEGORY;
  subCategory: EN_SUB_CATEGORY;
  posts: PostFirebaseModel[];
}

const Contents: NextFC<ContentsProps> = ({ category, subCategory, posts }) => {
  const authStore = useContext(AuthStoreContext);

  const showWriteButton = () => {
    return authStore.isAdmin ? (
      <a id={styles.writeButton} href={`/post?category=${category}&subCategory=${subCategory}`}>
        글쓰기
      </a>
    ) : null;
  };

  return (
    <div>
      {showWriteButton()}
      <PostSummaryBox posts={posts} />
    </div>
  );
};

// 여기에서 query string으로 넘어온 id를 통해 글정보를 가져오는 구간
Contents.getInitialProps = async ({ query }) => {
  const mainCategory = query.category as EN_MAIN_CATEGORY;
  const subCategory = query.subCategory as EN_SUB_CATEGORY;

  const posts = await getPostByCategory({ mainCategory, subCategory });

  return { category: mainCategory, subCategory, posts };
};

export default observer(Contents);
