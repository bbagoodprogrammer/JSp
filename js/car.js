jQuery(function($){
    //ajax请求数据库购物车的数据
    $.ajax({
        url:'../api/car.php',
        success:function(data){
            var $res = JSON.parse(data);
            //写入页面
            $('.res').html($res.map(function(item){
                return `
                <li>
                    <div class="name">
                        <input type="checkbox" />
                        <img src="${item.imgs}"/>
                        <div class="kuanshi">
                            <h3>${item.name}</h3> 
                            <p>颜色：${item.color}</p>
                            <span>款式：${item.size}</span> 
                            
                        </div>
                    </div>
                    <div class="price">
                            ${item.price}
                    </div>
                    <div class="qty">
                        <div>
                            <span class="jian">-</span>
                            <input type="text" value="${item.qty}"/>
                            <span class="jia">+</span>
                        </div>
                    </div>
                    <div class="youhui">
                            <p>---</p>
                    </div>
                    <div class="heji">
                        <p>${item.xiaoji}</p>
                    </div>
                    <div class="caozuo">
                            <span>
                                删除
                            </span>
                               
                        </div>
                </li>
                `
            }));
            //生成页面后点击加减按钮，加减数量，小计加减
            var res = document.querySelector('.res');
            //小计
            var $xj;
            res.onclick=function(e){
                var $e = $(e.target);
                if($e.attr('class')=="jian"){
                    var $z = $e.next().val();
                    $z--;
                    if($z<=1){$z=1};
                    $e.next().val($z);
                    //计算总价
                    //修改小计的价格
                    //获取当前的单价
                    var $xiaoji=$e.parent().parent().parent().find('.heji').find('p');
                    var $danjia=$e.parent().parent().parent().find('.price');

                    $xj = ($danjia.html()*1)*$z;
                    $xiaoji.text($xj);
                }
                if($e.attr('class')=="jia"){
                    var $z = $e.prev().val();
                    $z++;
                    if($z<=1){$z=1};
                    $e.prev().val($z);
                    //计算总价
                    //修改小计的价格
                    //获取当前的单价
                    var $xiaoji=$e.parent().parent().parent().find('.heji').find('p');
                    var $danjia=$e.parent().parent().parent().find('.price');

                    $xj = ($danjia.html()*1)*$z;
                    $xiaoji.text($xj);
                }
            }
        }
    })
})