import React, { useContext } from 'react';

import styles from './styles.css';
import { StoreModel } from '../../../../models/store/StoreModel';
import { WeightStoreContext } from '../../../../stores/weightStore';

const StoreDataForWeight: React.FC<{ store: StoreModel }> = ({ store }) => {
  const weightStore = useContext(WeightStoreContext);
  const strictWeight = weightStore.getWeight(store.id);

  function setWeight(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.target.parentElement!.parentElement!.id;
    weightStore.addWeight({ id, weight: Number(event.target.value) });
  }

  return (
    <div className={styles.storeData} id={store.id}>
      <div className={styles.storeName}>
        <b>{store.name}</b>
      </div>
      <div className={styles.storeInput}>
        <input type="number" onChange={setWeight} value={strictWeight} min={0} max={5} />
      </div>
    </div>
  );
};

export default StoreDataForWeight;
