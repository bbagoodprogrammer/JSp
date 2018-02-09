require(['config'],function(){
    require(['jquery','zoom'],function($){
    jQuery(function($){
        $('.header').load("../html/header2.html");
        $('.footer').load("../html/footer2.html");
        var $pagno =1;
        var $qty=20;
        //封装请求成功生成页面函数
        function show(){
            $.ajax({
                    url:'../api/list.php',
                    data:{pagno:$pagno,qty:$qty},
                    success:function(data){
                        var $ul = $('.bc');
                        var $goods2 = JSON.parse(data);
                        $ul.html($goods2.goods.map(function(item){
                            return `
                            
                            <li id="${item.id}">
                                        <img src=${item.imgs}>
                                        <div class="tittle">
                                            ${item.name}
                                        </div>
                                        <div class="prices">
                                            ${item.price}
                                        </div>
                                        <div class="volum"><span style="float:left;">销量数<i>0</i></span><span style="float:right;">评论数<i>0</i></span>
                                        </div>
                                        <div class="shop-name">新建数码(正品特惠)
                                        </div>
                                    </li>`
                            
                        }));
                    }
                    });
        }
        $.ajax({
            url:'../api/list.php',
            data:{pagno:$pagno,qty:$qty},
            success:function(data){
                //获取UL
                var $ul = $('.bc');
                var $goods = JSON.parse(data);
                $ul.html($goods.goods.map(function(item){
                    return `
                        
                            <li id="${item.id}">
                                <img src=${item.imgs}>
                                <div class="tittle">
                                    ${item.name}
                                </div>
                                <div class="prices">
                                    ${item.price}
                                </div>
                                <div class="volum"><span style="float:left;">销量数<i>0</i></span><span style="float:right;">评论数<i>0</i></span>
                                </div>
                                <div class="shop-name">新建数码(正品特惠)
                                </div>
                            </li>`
                       
                }));
            //生成页码
            var $pag = $('.pag');
            var pag = document.querySelector('.pag');
            //获取商品总数
            var $total = $goods.total;
            var $yeshu = Math.ceil($total/$qty);
            //上一页
            var $shang = $('.shang');
            var $xia = $('.xia');
            for(var i=1;i<=$yeshu;i++){
                //创建span
                var $span = $('<span/>');
                $span.html(i);
                var $ss = $('.xia');
                $ss.before($span);
            }
            //设置点击页码转换
            $pag.on('click','span',function(){
                var $res =$(this).html();
                $(this).addClass('active').siblings().removeClass('active');
                $pagno=$res;
                show();
                window.parent.scrollTo(0,0);
            });
            //设置原始的页数为1
            //初始化
            var attr=0;
            $pag.find('span').eq(attr).addClass('active');
            //上一下一页点击跳转
            pag.onclick=function(e){
                if(e.target.className=='shang'){
                    $pagno=$pagno-1;
                    attr--;
                    if($pagno<=1){
                        $pagno=1;
                        attr=0;
                    }
                    $pag.find('span').eq(attr).addClass('active').siblings().removeClass('active');
                    show();
                    window.parent.scrollTo(0,0);
                }
                if(e.target.className=="xia"){
                    $pagno=$pagno+1;
                    attr++;
                    if($pagno>=$yeshu){
                        $pagno=$yeshu;
                        attr=$yeshu-1;
                    }
                    $pag.find('span').eq(attr).addClass('active').siblings().removeClass('active');
                    show();
                    window.parent.scrollTo(0,0)
                }
            }
            }
        });
        //li鼠标移动上去的时候就添加边框
        var $bc = $('.bc');
        $bc.on('mouseenter','li',function(){
            $(this).addClass('bd').siblings().removeClass('bd');
        });
        //事件委托，点击的时候传ID
        $bc.on('click','li',function(){
            //获取当前的id
            var id = this.id;
            location.href = '../html/details.html?id='+id;
        });
    });
});
});