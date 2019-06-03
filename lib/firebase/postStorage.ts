import { db } from './firebase';
import { PostModel } from '../../models/post/PostModel';
import { EN_MAIN_CATEGORY } from '../../models/category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../../models/category/EN_SUB_CATEGORY';
import { PostFirebaseModel } from '../../models/post/PostFirebaseModel';

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
  const post = await db
    .collection('posts')
    .doc(id)
    .get();

  return post.data() as PostFirebaseModel;
}

export async function getPostByCategory({
  mainCategory,
  subCategory,
}: {
  mainCategory: EN_MAIN_CATEGORY;
  subCategory: EN_SUB_CATEGORY;
}) {
  const posts = await db
    .collection('posts')
    .where('category', '==', mainCategory)
    .where('subCategory', '==', subCategory)
    .orderBy('created', 'desc')
    .get();

  return posts.docs.map(post => post.data() as PostFirebaseModel);
}
