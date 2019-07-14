import React from 'react';
import { NextFC } from 'next';
import { StoreModel } from '../models/store/StoreModel';
import 'antd/dist/antd.css';
import AddStoreModal from '../components/lunch/admin/modal/addStore';
import StoreBox from '../components/lunch/admin/storeBox';
import { getStores } from '../lib/firebase/storeStorage';

export interface storeProps {
  stores: StoreModel[];
}

const LunchAdmin: NextFC<storeProps> = ({ stores }) => {
  return (
    <div>
      <AddStoreModal />
      <StoreBox stores={stores} />
    </div>
  );
};

LunchAdmin.getInitialProps = async () => {
  const stores = await getStores();

  return { stores };
};

export default LunchAdmin;
