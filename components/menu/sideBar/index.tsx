import { observer } from 'mobx-react-lite';
import React from 'react';
import styles from './styles.css';
import MainMenu from '../mainMenu';
import SubMenu from '../subMenu';
import { EN_SUB_CATEGORY } from '../../../models/category/EN_SUB_CATEGORY';

// TODO 어떤 카테고리로 옮겨갔을때는 화살표가 접히지 않도록 만들자
const SideBar: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <MainMenu title="개발">
        <SubMenu subCategory={EN_SUB_CATEGORY.DATA_STRUCTURE} />
        <SubMenu subCategory={EN_SUB_CATEGORY.DESIGN_PATTERN} />
      </MainMenu>
    </div>
  );
};

export default observer(SideBar);
