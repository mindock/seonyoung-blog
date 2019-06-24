import React from 'react';
import { NextFC } from 'next';
import { StoreModel } from '../../../models/store/StoreModel';

const RandomLunchMenu: NextFC<StoreModel[]> = stores => {
  const storeArr = Object.values(stores);
  const randomNumber = Math.floor(Math.random() * storeArr.length);
  const selected = stores[randomNumber];

  return <b>{selected.name}</b>;
};

export default RandomLunchMenu;
