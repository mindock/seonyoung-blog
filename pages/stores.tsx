import React from 'react';
import { NextFC } from 'next';
import { StoreModel } from '../models/store/StoreModel';
import 'antd/dist/antd.css';
import AddStoreModal from '../components/lunch/admin/modal/addStore';
import { getStores } from '../lib/firebase/storeStorage';
import PageStore from '../components/lunch/admin/pageStore';

export interface storeProps {
  stores: StoreModel[];
}

const LunchAdmin: NextFC<storeProps> = ({ stores }) => {
  return (
    <div>
      <AddStoreModal />
      <PageStore stores={stores} />
    </div>
  );
};

LunchAdmin.getInitialProps = async () => {
  const stores = await getStores();

  return { stores };
};

export default LunchAdmin;
