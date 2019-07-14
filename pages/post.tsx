import React from 'react';
import { NextFC } from 'next';
import styles from '../styles/post.css';
import InputPost from '../components/blog/post/input';
import { EN_MAIN_CATEGORY } from '../models/category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../models/category/EN_SUB_CATEGORY';

interface EditorProps {
  category: EN_MAIN_CATEGORY;
  subCategory: EN_SUB_CATEGORY;
}

const PostEditor: NextFC<EditorProps> = ({ category, subCategory }) => {
  return <div className={styles.editorContainer}>{<InputPost category={category} subCategory={subCategory} />}</div>;
};

PostEditor.getInitialProps = async ({ query }) => {
  const category = query.category as EN_MAIN_CATEGORY;
  const subCategory = query.subCategory as EN_SUB_CATEGORY;

  return { category, subCategory };
};

export default PostEditor;
