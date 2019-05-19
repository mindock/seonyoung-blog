import { observable, action } from 'mobx';
import { PostModel } from '../models/post/PostModel';
import { EN_MAIN_CATEGORY } from '../models/category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../models/category/EN_SUB_CATEGORY';
import { addPost, updatePost } from '../lib/firebase/postStorage';
import { createContext } from 'react';

export class PostStore {
  @observable
  private post: PostModel = {
    id: '',
    title: '',
    category: EN_MAIN_CATEGORY.DEVELOP,
    subCategory: EN_SUB_CATEGORY.DATA_STRUCTURE,
    contentBody: '',
  };

  @action.bound
  setId(id: string) {
    this.post.id = id;
  }

  @action.bound
  setTitle(title: string) {
    this.post.title = title;
  }

  @action.bound
  setCategories(category: EN_MAIN_CATEGORY, subCategory: EN_SUB_CATEGORY) {
    this.post.category = category;
    this.post.subCategory = subCategory;
  }

  @action.bound
  setContent(content: string) {
    this.post.contentBody = content;
  }

  @action.bound
  async submit() {
    const today = new Date();
    if (!this.post.created) {
      this.post.created = today;
    }
    this.post.modified = today;

    const setPostFn = this.post.id === '' ? addPost : updatePost;
    return await setPostFn(this.post);
  }
}

export const PostStoreContext = createContext(new PostStore());
