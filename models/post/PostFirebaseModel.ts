import { EN_MAIN_CATEGORY } from '../category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../category/EN_SUB_CATEGORY';

export interface PostFirebaseModel {
  id: string;
  title: string;
  category: EN_MAIN_CATEGORY;
  subCategory: EN_SUB_CATEGORY;
  contentBody: string;
  created?: firebase.firestore.Timestamp;
  modified?: firebase.firestore.Timestamp;
}
