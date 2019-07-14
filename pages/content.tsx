import { NextFC } from 'next';
import { getPost } from '../lib/firebase/postStorage';
import { PostFirebaseModel } from '../models/post/PostFirebaseModel';
import ContentBody from '../components/blog/post/contentBody';

interface ContentProps {
  post: PostFirebaseModel;
}

const Content: NextFC<ContentProps> = ({ post }) => {
  return ContentBody(post);
};

// 여기에서 query string으로 넘어온 id를 통해 글정보를 가져오는 구간
Content.getInitialProps = async ({ query }) => {
  const id = query.id as string;
  const post = await getPost(id);

  return { post };
};

export default Content;
