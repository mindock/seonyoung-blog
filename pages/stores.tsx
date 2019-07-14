import React from 'react';
import { NextFC } from 'next';
import { StoreModel } from '../models/store/StoreModel';
import 'antd/dist/antd.css';
import AddStoreModal from '../components/lunch/admin/modal/addStore';

export interface menuProps {
  stores: StoreModel[];
  randomNumber: number;
}

const LunchAdmin: NextFC<menuProps> = () => {
  return (
    <div>
      <AddStoreModal />
    </div>
  );
};

export default LunchAdmin;
