import { db } from './firebase';
import { StoreModel } from '../../models/store/StoreModel';

export async function getStores(): Promise<StoreModel[]> {
  const stores = await db.collection('stores').get();
  return stores.docs.map(store => store.data() as StoreModel);
}
