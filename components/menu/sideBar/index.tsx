import React from 'react';
import styles from './styles.css';
import MainMenu from '../mainMenu';
import SubMenu from '../subMenu';

const SideBar: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <a href="/post"> 글쓰기 </a>
      <MainMenu title="개발">
        <SubMenu subTitle="자료구조" link="dataStructure" />
        <SubMenu subTitle="디자인 패턴" link="dataStructure" />
      </MainMenu>
    </div>
  );
};

export default SideBar;
