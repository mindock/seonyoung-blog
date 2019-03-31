import React, { Component } from 'react';

class SubMenu extends Component<any, { subTitle: string; link: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      subTitle: props.subTitle,
      link: props.link,
    };
  }

  render() {
    return (
      <div>
        <span>{this.state.subTitle}</span>
      </div>
    );
  }
}

export default SubMenu;
