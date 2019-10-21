import 'antd/dist/antd.css';
import React from 'react';
import { NextFC } from 'next';

import { getStores } from '../lib/firebase/storeStorage';
import { StoreModel } from '../models/store/StoreModel';
import PageStoreForWeight from '../components/lunch/weight/page';

interface storeProps {
  stores: StoreModel[];
}

const LunchWeight: NextFC<storeProps> = ({ stores }) => {
  return (
    <div>
      <PageStoreForWeight stores={stores} />
      <button>저장</button>
    </div>
  );
};

LunchWeight.getInitialProps = async () => {
  const stores = await getStores();

  return { stores };
};

export default LunchWeight;
