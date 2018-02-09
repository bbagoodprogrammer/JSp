require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function($){
        //ajax请求数据库购物车的数据
        $.ajax({
            url:'../api/car.php',
            success:function(data){
                var $res = JSON.parse(data);
                //写入页面
                $('.res').html($res.map(function(item){
                    return `
                    <li id="${item.id}">
                        <div class="name">
                            <input type="checkbox" class="check"/>
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
                                <span class="sanchu">
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
                //事件委托到最大的UL；
                res.onclick=function(e){
                    var $e = $(e.target);
                    //点击减按钮的时候，调整数量和小计
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
                    //点击加按钮的时候，调整数量和小计
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
                    //点击删除按钮时删除对应的LI
                    if(e.target.className=='sanchu'){
                        //获取当前的UL,li并删除当前的li;
                        var ul =e.target.parentNode.parentNode.parentNode;
                        var li =e.target.parentNode.parentNode;
                        //获取当前商品的id
                        var $lid = li.id;
                        ul.removeChild(li);
                        //发起请求删除数据库相对的数据
                        $.ajax({
                            url:'../api/removeshop.php',
                            data:{id:$lid},
                        });
                    }
                    //当点击的是INPUT选择按钮的时候，改变商品总价
                    if($e.attr('type')=='checkbox'){
                        if(e.target.checked){
                            //获取当前总价的值;
                            var $zj = $('.zj').html()*1;
                            //获取当前的小计值
                            var $xj =$e.parent().parent().find('.heji').find('p').html()*1;
                            //赋值新的总值
                            $('.zj').html($xj+$zj);
                        }else{
                            //获取当前总价的值;
                            var $zj = $('.zj').html()*1;
                            //获取当前的小计值
                            var $xj =$e.parent().parent().find('.heji').find('p').html()*1;
                            //赋值新的总值
                            $('.zj').html($zj-$xj);
                        }
                        
                    }
                }
                //创建数组，存放已勾选的id
                var arr = [];
                //点击批量删除的时候，删除勾选的input的LI
                    $('.alldel').on('click',function(){
                        //获取ul中的input
                        var inputs = document.querySelectorAll('.check');
                        for(var i=0;i<inputs.length;i++){
                            //获取已勾选的input的li的id
                            if(inputs[i].checked){
                                arr.push(inputs[i].parentNode.parentNode.id*1);
                                //获取ul,静态删除页面的li
                                var ul =inputs[i].parentNode.parentNode.parentNode;
                                var li =inputs[i].parentNode.parentNode;
                                ul.removeChild(li);
                            }
                        }
                        //转成Jq对象
                        // var ss = JSON.stringify(arr);
                        //发起数据库请求，删除对应的li数据
                        $.ajax({
                            url:'../api/removeallshop.php',
                            data:{idarr:arr}
                        })
                    })
            }
        })
        })
    })
})