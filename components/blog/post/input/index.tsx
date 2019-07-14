import React, { useContext } from 'react';
import { PostStoreContext } from '../../../../stores/post';
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EN_MAIN_CATEGORY } from '../../../../models/category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../../../../models/category/EN_SUB_CATEGORY';
import styles from './styles.css';

// dynamic import
const MarkdownEditor = dynamic(() => import('../../editor'), {
  ssr: false,
});

const InputPost: React.FC<{ category: EN_MAIN_CATEGORY; subCategory: EN_SUB_CATEGORY }> = ({
  category,
  subCategory,
}) => {
  const postStore = useContext(PostStoreContext);

  function setTitle(event: React.ChangeEvent<HTMLInputElement>) {
    postStore.setTitle(event.target.value);
  }

  const submitForm = async () => {
    postStore.setCategories(category, subCategory);
    postStore;
    const submitedPost = await postStore.submit();
    location.href = `/posts/${submitedPost.id}`;
  };

  return (
    <div className={styles.inputPostForm}>
      <div className={styles.titleContainer}>
        <input placeholder="제목" onChange={setTitle} />
      </div>
      <div className={styles.editorContainer}>{<MarkdownEditor postStore={postStore} />}</div>
      <div className={styles.buttonContainer}>
        <button onClick={submitForm}>등록</button>
      </div>
    </div>
  );
};

export default InputPost;
