import React from 'react';
import { StoreModel } from '../../../models/store/StoreModel';

const RandomLunchMenu: React.FC<StoreModel> = store => {
  return <b>{store.name}</b>;
};

export default RandomLunchMenu;
