import React from 'react';
import { NextFC } from 'next';
import RandomLunchMenu from '../components/lunch/RandomLunchMenu';
import { getStores } from '../lib/firebase/storeStorage';
import { StoreModel } from '../models/store/StoreModel';
import StoreAdminButton from '../components/lunch/admin/adminButton';

interface menuProps {
  stores: StoreModel[];
}

const RandomLunch: NextFC<menuProps> = ({ stores }) => {
  return (
    <div>
      <StoreAdminButton />
      <h1> 오늘 점심은? </h1>
      <RandomLunchMenu {...stores} />
    </div>
  );
};

RandomLunch.getInitialProps = async () => {
  const stores = await getStores();

  return { stores };
};

export default RandomLunch;
