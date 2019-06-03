import React from 'react';
import { NextFC } from 'next';
import { getPost } from '../lib/firebase/postStorage';
import draftToHtml from 'draftjs-to-html';
import { PostFirebaseModel } from '../models/post/PostFirebaseModel';

interface ContentProps {
  post: PostFirebaseModel;
}

const Content: NextFC<ContentProps> = ({ post }) => {
  return (
    <div>
      <h1> {post.title} </h1>
      <div dangerouslySetInnerHTML={getContentHTML(post.contentBody)} />
    </div>
  );
};

const getContentHTML = (contentBody: string) => {
  const content = JSON.parse(contentBody);
  const contentHTML: string = draftToHtml(content);
  return { __html: contentHTML };
};

// 여기에서 query string으로 넘어온 id를 통해 글정보를 가져오는 구간
Content.getInitialProps = async ({ query }) => {
  const id = query.id as string;

  console.log('id: ', id);
  const post = await getPost(id);
  console.log('post: ', post);

  return { post };
};

export default Content;
