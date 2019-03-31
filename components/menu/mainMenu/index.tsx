import React, { Component } from 'react';
import styles from './styles.css';

class MainMenu extends Component<any, { title: string; isOpen: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: props.title,
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  changeArrow() {
    return this.state.isOpen ? <img src="/static/media/down-arrow.svg" /> : <img src="/static/media/right-arrow.svg" />;
  }

  showSubMenu() {
    return this.state.isOpen ? <div className={styles.subMenu}> {this.props.children} </div> : null;
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.mainMenu} onClick={this.toggle}>
          {this.changeArrow()}
          <span>{this.state.title}</span>
        </div>
        {this.showSubMenu()}
      </div>
    );
  }
}

export default MainMenu;
