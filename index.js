/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-26
 * @author li <li@maichong.it>
 */

import wx from 'labrador';
import immutable from 'seamless-immutable';
import OrderItem from 'al-order-item';

const { array, func, number } = wx.PropTypes;

export default class Order extends wx.Component {
  propTypes = {
    items: array,
    index: number,
    onItemTap: func,
    onItemPay: func,
    onItemEvaluate: func,
    onItemCancel: func,
    onItemRefund: func,
    onItemConfirm: func,
    onItemDelete: func
  };

  data = {
    items: immutable([]),
    list: immutable([]),
    modalText: '',
    modalHidden: true,
    key: '',
    id: '',
    index: '1'
  };

  children = {
    itemList: new wx.List(OrderItem, 'list', {
      item: '>>',
      onChange: '#handleChange'
    })
  };

  handleNavTap(e) {
    let index = e.currentTarget.dataset.index + '';
    this.setData({ index });
    this.navSplitItem(index);
  }

  /**
   *跟据导航区分不同状态的订单
   * @param index 导航index
   */
  navSplitItem(index, items) {
    items = items || this.data.items;
    let list = [];
    if (index === '1') {
      list = immutable(items);
    } else {
      items.forEach((item) => {
        if (index === '2' && item.state === 200) {
          list.push(immutable(item));
        } else if (index === '3' && item.state === 400) {
          list.push(immutable(item));
        } else if (index === '4' && item.state === 500) {
          list.push(immutable(item));
        } else if (index === '5' && item.state === 600) {
          list.push(immutable(item));
        }
      });
    }
    this.setData({ list });
  }

  handleChange(component, key) {
    let id = this.data.list[component.key].id;
    switch (key) {
      case 'tap':
        this.props.onItemTap(id);
        break;
      case 'cancel':
        this.setData({ modalText: '要取消订单？', modalHidden: false, key, id });
        break;
      case 'pay':
        this.props.onItemPay(id);
        break;
      case 'refund':
        this.setData({ modalText: '要申请退款？', modalHidden: false, key, id });
        break;
      case 'confirm':
        this.setData({ modalText: '要确认收货？', modalHidden: false, key, id });
        break;
      case 'evaluate':
        this.props.onItemEvaluate(id);
        break;
      case 'delete':
        this.setData({ modalText: '要删除订单？', modalHidden: false, key, id });
        break;
      default:
        break;
    }
  }

  handleConfirm() {
    let key = this.data.key;
    let id = this.data.id;
    if (key === 'cancel') {
      this.props.onItemCancel(id, parseInt(this.data.index));
    } else if (key === 'refund') {
      this.props.onItemRefund(id, parseInt(this.data.index));
    } else if (key === 'confirm') {
      this.props.onItemConfirm(id, parseInt(this.data.index));
    } else if (key === 'delete') {
      this.props.onItemDelete(id, parseInt(this.data.index));
    }
    this.setData({ modalText: '', modalHidden: true, key: '', id: '' });
  }

  handleCancel() {
    this.setData({ modalText: '', modalHidden: true, key: '', id: '' });
  }

  onLoad() {

  }

  onReady() {

  }

  onShow() {

  }

  onHide() {

  }

  onUnload() {

  }

  onUpdate(props) {
    let index = '1';
    if (props.index && props.index >= 1 && props.index <= 5) {
      index = props.index + '';
    }
    this.setData({ items: immutable(props.items), index });
    this.navSplitItem(index, props.items);
  }
}
