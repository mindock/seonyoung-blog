import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import * as styles from './style.css';
import { AuthStoreContext } from '../../stores/auth';

const Header = () => {
  const authStore = useContext(AuthStoreContext);

  const renderLoginButton = () => {
    return authStore.user ? (
      <>
        <span id={styles.loginUser}>{authStore.user.displayName}</span>
        <button onClick={authStore.logout}>Logout</button>
      </>
    ) : (
      <button onClick={authStore.login}>Login</button>
    );
  };

  return <div className={styles.loginContainer}>{renderLoginButton()}</div>;
};

// observer를 붙여야만 observable한 데이터가 변경될 때마다 재 랜더링함
export default observer(Header);
