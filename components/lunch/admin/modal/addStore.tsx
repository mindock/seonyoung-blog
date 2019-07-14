import React from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';
import { EN_STORE_CATEGORY } from '../../../../models/store/EN_STORE_CATEGORY';
import { addStore } from '../../../../lib/firebase/storeStorage';
import { StoreModel } from '../../../../models/store/StoreModel';

class AddStoreModal extends React.Component<any, { visible: boolean; data: StoreModel }> {
  constructor(props: any) {
    super(props);
    this.state = { visible: false, data: { id: '', name: '', category: EN_STORE_CATEGORY.KOREAN } };

    this.setCategory = this.setCategory.bind(this);
    this.setName = this.setName.bind(this);
    this.open = this.open.bind(this);
    this.ok = this.ok.bind(this);
    this.close = this.close.bind(this);
  }

  setCategory(evt: React.ChangeEvent<HTMLSelectElement>) {
    this.state.data.category = evt.target[evt.target.selectedIndex].innerText;
  }

  setName(evt: React.ChangeEvent<HTMLInputElement>) {
    this.state.data.name = evt.target.value;
  }

  open() {
    this.setState({ visible: true });
  }

  ok() {
    // name 비어있는 경우는 저장할 수 없어
    if (this.state.data.name === '') {
      alert('가게이름이 비어있습니다.');
      return;
    }
    addStore(this.state.data);
    this.setState({ visible: false });
    window.location.reload();
  }

  close() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <>
        <Modal title="가게 추가" visible={this.state.visible} onOk={this.ok} onCancel={this.close}>
          <select onChange={this.setCategory}>
            <option>{EN_STORE_CATEGORY.KOREAN}</option>
            <option>{EN_STORE_CATEGORY.CHINESE}</option>
            <option>{EN_STORE_CATEGORY.JAPANESE}</option>
            <option>{EN_STORE_CATEGORY.ASIAN}</option>
            <option>{EN_STORE_CATEGORY.SNACK}</option>
            <option>{EN_STORE_CATEGORY.FASTFOOD}</option>
            <option>{EN_STORE_CATEGORY.CAFE}</option>
          </select>
          <input placeholder="가게이름" onChange={this.setName} />
        </Modal>
        <button onClick={this.open}>가게추가</button>
      </>
    );
  }
}

export default AddStoreModal;
