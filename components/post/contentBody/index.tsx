import React from 'react';
import { NextFC } from 'next';
import { getDateString } from '../category/summary';
import draftToHtml from 'draftjs-to-html';
import { PostFirebaseModel } from '../../../models/post/PostFirebaseModel';
import styles from './styles.css';

const ContentBody: NextFC<PostFirebaseModel> = post => {
  const createdSecond: number = post.created ? post.created.seconds : 0;
  const createdString = getDateString(createdSecond);
  // 수정기능이 가능해지면 열자!
  // const updatedSecond: number = post.modified ? post.modified.seconds : 0;
  // const updatedString = getDateString(updatedSecond);

  return (
    <div className={styles.contentContainer}>
      <a href={`/contents?category=${post.category}&subCategory=${post.subCategory}`} className={styles.category}>
        {post.category.toUpperCase()} / {post.subCategory.toUpperCase()}
      </a>
      <h1> {post.title} </h1>
      <div className={styles.dateContainer}>
        <b>작성일:</b> {createdString}
      </div>
      {/*
      <div className={styles.dateContainer}>
        <b>수정일:</b> {updatedString}
      </div>
      */}
      <div dangerouslySetInnerHTML={getContentHTML(post.contentBody)} />
    </div>
  );
};

const getContentHTML = (contentBody: string) => {
  const content = JSON.parse(contentBody);
  const contentHTML: string = draftToHtml(content);
  return { __html: contentHTML };
};

export default ContentBody;
