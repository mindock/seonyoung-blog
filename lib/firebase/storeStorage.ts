import { db } from './firebase';
import { StoreModel } from '../../models/store/StoreModel';

export async function getStores(): Promise<StoreModel[]> {
  const stores = await db.collection('stores').get();
  return stores.docs.map(store => store.data() as StoreModel);
}

export async function addStore(data: StoreModel): Promise<StoreModel> {
  // 새로운 문서를 만든다 -> id가 생긴다.
  const store = await db.collection('stores').doc();
  data.id = store.id;
  await store.set(data);
  return data;
}
