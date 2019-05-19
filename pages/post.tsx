import React from 'react';
import { NextFC } from 'next';
import styles from '../styles/post.css';
import InputPost from '../components/post/input';
import { EN_MAIN_CATEGORY } from '../models/category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../models/category/EN_SUB_CATEGORY';

const PostEditor: NextFC = () => {
  return (
    <div className={styles.editorContainer}>
      {<InputPost category={EN_MAIN_CATEGORY.DEVELOP} subCategory={EN_SUB_CATEGORY.DATA_STRUCTURE} />}
    </div>
  );
};

export default PostEditor;
