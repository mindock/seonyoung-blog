import React from 'react';

import styles from './styles.css';
import StoreDataForWeight from '../item';
import { StoreModel } from '../../../../models/store/StoreModel';

const StoreBoxForWeight: React.FC<{ stores: StoreModel[] }> = ({ stores }) => {
  const getStoreBox = () => {
    return stores.map(store => <StoreDataForWeight store={store} />);
  };

  return <div className={styles.storeBox}> {getStoreBox()} </div>;
};

export default StoreBoxForWeight;
