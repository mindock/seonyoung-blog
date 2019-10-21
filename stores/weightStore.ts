import { createContext } from 'react';
import { observable, action } from 'mobx';

import { StoreWeightModel } from '../models/store/StoreWeightModel';
import { addWeights } from '../lib/firebase/storeWeightStorage';

export class WeightStore {
  @observable
  private weights: Map<string, StoreWeightModel> = new Map<string, StoreWeightModel>();

  @action.bound
  getWeight(id: string) {
    const storeWeight = this.weights.get(id);
    return storeWeight ? storeWeight.weight : 3;
  }

  @action.bound
  addWeight(weight: StoreWeightModel) {
    this.weights.set(weight.id, weight);
    console.log('###', this.weights);
  }

  @action.bound
  addWeights(weights: StoreWeightModel[]) {
    weights.map(weight => this.weights.set(weight.id, weight));
  }

  @action.bound
  async submit(userId: string) {
    const weightArray = Array.from(this.weights.values());
    return await addWeights(weightArray, userId);
  }
}

export const WeightStoreContext = createContext(new WeightStore());
