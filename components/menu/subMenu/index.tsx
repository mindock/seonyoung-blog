import React, { Component } from 'react';
import styles from './styles.css';
import { EN_SUB_CATEGORY } from '../../../models/category/EN_SUB_CATEGORY';
import { EN_SUB_CATEGORY_KR } from '../../../models/category/EN_SUB_CATEGORY_KR';
import { MAP_SUB_CATEGORY_TO_MAIN_CATEGORY } from '../../../models/category/MAP_SUB_CATEGORY_TO_MAIN_CATEGORY';

interface SubMenuProps {
  subCategory: EN_SUB_CATEGORY;
}

class SubMenu extends Component<SubMenuProps, { subTitle: string; link: string }> {
  constructor(props: SubMenuProps) {
    super(props);
    this.state = {
      subTitle: EN_SUB_CATEGORY_KR[props.subCategory],
      link: this.setLink(props.subCategory),
    };
  }

  setLink(subCategory: EN_SUB_CATEGORY) {
    const category = MAP_SUB_CATEGORY_TO_MAIN_CATEGORY[subCategory];

    return `/contents?category=${category}&subCategory=${subCategory}`;
  }

  render() {
    return (
      <div className={styles.subMenu}>
        <a href={this.state.link}>{this.state.subTitle}</a>
      </div>
    );
  }
}

export default SubMenu;
