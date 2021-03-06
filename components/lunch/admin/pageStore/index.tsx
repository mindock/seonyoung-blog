import React, { Component } from 'react';
import { StoreModel } from '../../../../models/store/StoreModel';
import StoreBox from '../storeBox';
import { Pagination } from 'antd';

interface PageStoreProps {
  stores: StoreModel[];
}

interface PageStoreState {
  activePage: number;
  pageSize: number;
  stores: StoreModel[];
}

class PageStore extends Component<PageStoreProps, PageStoreState> {
  constructor(props: PageStoreProps) {
    super(props);

    this.state = {
      activePage: 1,
      pageSize: 15,
      stores: props.stores,
    };

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page: number) {
    this.setState({ activePage: page });
  }

  render() {
    const endIndex = this.state.activePage * this.state.pageSize;
    const startIndex = endIndex - this.state.pageSize;
    const storesByPage = this.state.stores.slice(startIndex, endIndex);

    return (
      <div>
        <StoreBox stores={storesByPage} />
        <Pagination pageSize={this.state.pageSize} total={this.state.stores.length} onChange={this.handlePageChange} />
      </div>
    );
  }
}

export default PageStore;
