import React from 'react';
import styles from './styles.css';
import { StoreModel } from '../../../../models/store/StoreModel';

const StoreData: React.FC<{ store: StoreModel }> = ({ store }) => {
  return (
    <div className={styles.storeData}>
      <div className={styles.storeName}>
        <b>{store.name}</b>
      </div>
      <div className={styles.storeCategory}> {store.category} </div>
    </div>
  );
};

export default StoreData;
