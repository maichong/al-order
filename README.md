# al-order
***
订单列表组件。
### 使用方式
---
安装npm包
```
npm install al-order-item --save
```
导入page中的js页面
```js
import Order from 'al-order';

children = {
    orderList: new List({
    ...
    })
```
导入page中的xml页面
```xml
<list key="orderList" name="al-order" />
```
导入page中的less文件
```css
@import "al-order";
```
### 接口说明
---
|props    |type |default| Description|
|---------|:----|:------|:-----------|
|items|Array|[]|所有订单数据列表，符合`alaska-order` service数据格式,具体请查看[alaska-order](https://github.com/maichong/alaska-order/blob/master/src/models/OrderItem.js)|
|index|Number|1|页签索引，具体值为 `全部页 = 1 或不传`,`待付款页 = 2`,`待发货页 = 3`,`待收货页 = 4`,`待评价页 = 5`|
|onItemTap|Function| |点击事件，点击子组件本身时触发，返回`订单id`|
|onItemPay|Function | |支付事件，点击子组件支付按钮时触发，返回`订单id`|
|onItemEvaluate|Function | |评价事件，点击子组件评价按钮时触发，返回`订单id`|
|onItemCancel|Function | |取消订单事件，点击取消订单按钮后，在出现的modal提示框内点击“是”按钮后触发，返回`订单id`和`当前页签的索引`，见[注]|
|onItemRefund|Function ||退款事件，点击退款按钮后，在出现的modal提示框内点击“是”按钮后触发，返回`订单id`和`当前页签的索引`，见[注]|
|onItemConfirm|Function| |确认收货事件，点击确认收货按钮后，在出现的modal提示框内点击“是”按钮后触发，返回`订单的id`和`当前页签的索引`，见[注]|
|onItemDelete|Function||删除事件，点击删除订单按钮后，在出现的modal提示框内点击“是”按钮后触发，返回`订单的id`和当前页签的索引`，见[注]|
### 注：
返回`当前页签索引`的原因：
因页面和组件之间的`数据是绑定的`，页面中的`数据更新`之后会`自动刷新`组件内容，所以当`列表内容有改变`时会`自动连同索引`一起传到组件中，若页面中不记录页签索引的话会引发每次操作数据之后都跳回“全部”页签的BUG，因此，要在`每次操作数`据的时候告知页面`当前的页签索引`。
---
#### 关于页面和组件间相互传值以及该组件所依赖的基础框架详见[labrador](https://github.com/maichong/labrador);
