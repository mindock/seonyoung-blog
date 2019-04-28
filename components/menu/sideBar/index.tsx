import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styles from './styles.css';
import MainMenu from '../mainMenu';
import SubMenu from '../subMenu';
import { AuthStoreContext } from '../../../stores/auth';

const SideBar: React.FunctionComponent = () => {
  const authStore = useContext(AuthStoreContext);

  const showWriteButton = () => {
    return authStore.isAdmin ? <a href="/post"> 글쓰기 </a> : null;
  };

  return (
    <div className={styles.container}>
      {showWriteButton()}
      <MainMenu title="개발">
        <SubMenu subTitle="자료구조" link="dataStructure" />
        <SubMenu subTitle="디자인 패턴" link="dataStructure" />
      </MainMenu>
    </div>
  );
};

export default observer(SideBar);
