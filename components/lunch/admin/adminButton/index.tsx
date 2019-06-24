import React, { useContext } from 'react';
import { NextFC } from 'next';
import { AuthStoreContext } from '../../../../stores/auth';
import { observer } from 'mobx-react-lite';

const StoreAdminButton: NextFC = () => {
  const authStore = useContext(AuthStoreContext);

  return authStore.isAdmin ? <a href="/stores">가게 관리</a> : null;
};

export default observer(StoreAdminButton);
