import React from 'react';
import { NextFC } from 'next';
import dynamic from 'next/dynamic';
import styles from '../styles/post.css';

// dynamic import
const MarkdownEditor = dynamic(() => import('../components/editor'), {
  ssr: false,
});

const PostEditor: NextFC = () => {
  return <div className={styles.editorContainer}>{<MarkdownEditor />}</div>;
};

export default PostEditor;
