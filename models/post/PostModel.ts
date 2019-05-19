import { EN_MAIN_CATEGORY } from '../category/EN_MAIN_CATEGORY';
import { EN_SUB_CATEGORY } from '../category/EN_SUB_CATEGORY';

export interface PostModel {
  id: string;
  title: string;
  category: EN_MAIN_CATEGORY;
  subCategory: EN_SUB_CATEGORY;
  contentBody: string;
  created?: Date;
  modified?: Date;
}
