/**
 * @copyright Maichong Software Ltd. 2016 http://maichong.it
 * @date 2016-10-25
 * @author li <li@maichong.it>
 */

import wx from 'labrador';
import immutable from 'seamless-immutable';

const { object, func } = wx.PropTypes;

export default class OrderItem extends wx.Component {
  propTypes = {
    item: object,
    onChange: func
  };

  data = {};

  children = {};

  handleTap() {
    this.props.onChange('tap');
  }

  handleCancelTap() {
    this.props.onChange('cancel');
  }

  handlePay() {
    this.props.onChange('pay');
  }

  handleRefund() {
    this.props.onChange('refund');
  }

  handleConfirm() {
    this.props.onChange('confirm');
  }

  handleEvaluate() {
    this.props.onChange('evaluate');
  }

  handleDelete() {
    this.props.onChange('delete');
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
    let item = props.item;
    this.setData({
      id: immutable(item.id.substr(-6)),
      title: immutable(item.title),
      pic: immutable(item.pic),
      goodsCount: immutable(item.items.length),
      total: immutable(item.total),
      pay: immutable(item.pay),
      payed: immutable(item.payed),
      state: immutable(item.state)
    });
  }
}
