# al-order
订单列表组件，展示订单列表数据，依赖al-order-item组件。
### 使用方式
```
//安装npm包
npm install al-order-item --save

//导入page中的js页面
import Order from 'al-order';

children = {
    orderList: new List({
    ...
    })

//导入page中的xml页面
<list key="orderList" name="al-order" />

//导入page中的less文件
@import "al-order";
```
### 接口说明
- items: array
所有订单数据列表，符合alaska-order service数据格式：
```
[
    {
        "id":"581308b831023d0007aa11ae",
        "title":"限时·国庆假期特惠零嘴套装",
        "user":"57ea4ae7e6e7c10006615744",
        "type":"goods",
        "pic":"http://img.maichong.it/shop/201609/57edf10c6715c0216bfb834f.png",
        "items":
        [
            {
                "id":"581308b831023d0007aa11ad",
                "pic":"http://img.maichong.it/shop/201609/57edf10c6715c0216bfb834f.png",
                "title":"限时·国庆假期特惠零嘴套装",
                "order":"581308b831023d0007aa11ae",
                "goods":"57edf10c6715c0216bfb834d",
                "currency":"balance",
                "price":65,
                "discount":0,
                "quantity":1,
                "shipping":0,
                "total":65,
                "createdAt":"2016-10-28T08:13:44.856Z"
            }
        ],
        "address":
        {
            "often":false,
            "createdAt":"2016-10-21T08:17:18.389Z",
            "detail":"那个怎么样",
            "street":"北林路街道",
            "district":"中原",
            "city":"郑州",
            "province":"河南",
            "country":"中国",
            "zip":"410000",
            "tel":"15002342233",
            "name":"李四",
            "id":"5809cf0e3eb5cd0008b56672"
        },
        "currency":"balance",
        "shipping":0,
        "total":65,
        "pay":65,
        "payed":0,
        "state":200,
        "createdAt":"2016-10-28T08:13:44.862Z"
    }
]
```
- index: number,
页签索引，具体值为：
>    全部页 = 1 或不传;
>    待付款页 = 2;
>    待发货页 = 3;
>    待收货页 = 4;
>    待评价页 = 5;

- onItemTap: id
点击事件，点击子组件本身时触发，返回订单id;
- onItemPay: id
支付事件，点击子组件支付按钮时触发，返回订单id;
- onItemEvaluate: id
评价事件，点击子组件评价按钮时触发，返回订单id;
- onItemCancel: id,index
取消订单事件，点击取消订单按钮后，在出现的modal提示框内点击“是”按钮后触发，返回订单id和当前页签的索引，见[注];
- onItemRefund: id,index
退款事件，点击退款按钮后，在出现的modal提示框内点击“是”按钮后触发，返回订单id和当前页签的索引，见[注];
- onItemConfirm: id,index
确认收货事件，点击确认收货按钮后，在出现的modal提示框内点击“是”按钮后触发，返回订单的id和当前页签的索引，见[注];
- onItemDelete: func
删除事件，点击删除订单按钮后，在出现的modal提示框内点击“是”按钮后触发，返回订单的id和当前页签的索引，见[注];
- 注：
返回当前页签索引的原因：
因页面和组件之间的数据是绑定的，页面中的数据更新之后会自动刷新组件内容，所以当列表内容有改变时会自动连同索引一起传到组件中，若页面中不记录页签索引的话会引发每次操作数据之后都跳回“全部”页签的BUG，因此，要在每次操作数据的时候告知页面当前的页签索引。

#### 关于页面和组件间相互传值以及该组件所依赖的基础框架详见[labrador](https://github.com/maichong/labrador);
