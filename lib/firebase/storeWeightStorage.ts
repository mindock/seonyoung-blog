import { StoreWeightModel } from '../../models/store/StoreWeightModel';
import { db } from './firebase';

export async function addWeights(weights: StoreWeightModel[], userId: string) {
  const storeWeights = await db.collection('storeWeight').doc(userId);
  await storeWeights.update(weights);
  return weights;
}
