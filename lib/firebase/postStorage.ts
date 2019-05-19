import { db } from './firebase';
import { PostModel } from '../../models/post/PostModel';

export async function addPost(data: PostModel) {
  const post = await db.collection('posts').doc();
  data.id = post.id;
  await post.set(data);
  return data;
}

export async function updatePost(data: PostModel) {
  const post = await db.collection('posts').doc(data.id);
  await post.update(data);
  return data;
}

export async function delPost(id: string) {
  await db
    .collection('posts')
    .doc(id)
    .delete();
}

export async function getPost(id: string) {
  return await db
    .collection('posts')
    .doc(id)
    .get();
}
