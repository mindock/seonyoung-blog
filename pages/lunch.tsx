import React from 'react';
import { NextFC } from 'next';
import RandomLunchMenu from '../components/lunch/RandomLunchMenu';
import { getStores } from '../lib/firebase/storeStorage';
import { StoreModel } from '../models/store/StoreModel';
import StoreAdminButton from '../components/lunch/admin/adminButton';

export interface menuProps {
  stores: StoreModel[];
  randomNumber: number;
}

const RandomLunch: NextFC<menuProps> = ({ stores, randomNumber }) => {
  const selected = stores[randomNumber];

  return (
    <div>
      <StoreAdminButton />
      <h1> 오늘 점심은? </h1>
      {/* 풀어서 써야한다. 이것은 object로 받는 것이 아니라 sotreModel을 받고 있기 때문에 */}
      <RandomLunchMenu {...selected} />
    </div>
  );
};

RandomLunch.getInitialProps = async () => {
  const stores = await getStores();
  const storeArr = Object.values(stores);
  const randomNumber = Math.floor(Math.random() * storeArr.length);

  return { stores, randomNumber };
};

export default RandomLunch;
