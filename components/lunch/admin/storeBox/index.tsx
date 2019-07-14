import React from 'react';
import { StoreModel } from '../../../../models/store/StoreModel';
import StoreData from '../storeData';
import styles from './styles.css';

const StoreBox: React.FC<{ stores: StoreModel[] }> = ({ stores }) => {
  const getStoreBox = () => {
    return stores.map(store => <StoreData store={store} />);
  };

  return <div className={styles.storeBox}>{getStoreBox()}</div>;
};

export default StoreBox;
