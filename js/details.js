require(['config'],function(){
    require(['jquery','zoom'],function($){
        jQuery(function($){
            $('.header').load("../html/header2.html");
            $('.footer').load("../html/footer2.html");
            //放大镜
            $('.dqimg').gdsZoom({
                    position:'right'
            });

            $('.mintu').on('click','img',function(){
                 $('.dqimg img').attr({
                            src:this.src,
                            'data-big':this.dataset.big || this.src
                    });
                });
            //获取列表页传过来的ID,然后请求数据库
            var id =location.search;
            var $id = id.slice(4);
            function show(){
                //请求数据库
                $.ajax({
                    url:'../api/details.php',
                    data:{id:$id},
                    success:function(data){
                        var $data = JSON.parse(data);
                        $data.map(function(item){
                            if(item.id == $id){
                                //获取到当前数据，显示对应位置
                                $('.dqimg img').attr({
                                    src:item.imgs
                                })
                                $('.name').html(item.name);
                                $('.nowprice').html(item.price);
                            }
                        
                        })
                        $('.mintu').html($data.map(function(item){
                            if(item.description=='mitu'){
                                return `
                                    <li>
                                        <img src="${item.imgs}"/>
                                    </li>
                                `
                            }
                        }))
                    }
                })
            }
            show();
            //颜色选择
            $('.yans').on('click','li',function(){
                $(this).find('img').show().parent().siblings().find('img').hide();
            });
            $('.taoz').on('click','li',function(){
                $(this).find('img').show().parent().siblings().find('img').hide();
            });
            //数量加减
            $('.gmai').on('click','li',function(e){
                if(e.target.className=='jian'){
                    var num = $('.qtyn').html();
                    num--;
                    console.log(num)
                    if(num<=1){num=1};
                    $('.qtyn').html(num);
                }
                if(e.target.className=='jia'){
                    var num = $('.qtyn').html();
                    num++;
                    $('.qtyn').html(num);
                }
            })
            //加入购物
            $('.che').on('click',function(){
                //获取当前的商品的ID
                //获取当前图片路径
                var $imgs = $('.dqimg img').attr('src');
                //设置颜色
                var $color;
                var $size;
                //商品名字
                var $name =$('.name').html();
                //数量
                var $qty =$('.qtyn').html();
                var $price = $('.nowprice').text();
                //获取选择颜色
                $('.yans li img').each(function(){
                    if($(this).css('display')=='block'){
                        $color =$(this).parent().text();
                    }
                })
                //颜色不能为空
                if(typeof($color)=="undefined"){
                    alert('请选择商品的颜色！');
                    return;
                }

                //获取选择尺寸
                $('.taoz li img').each(function(){
                    if($(this).css('display')=='block'){
                        $size =$(this).parent().text();
                    }
                });
                //款式还不能为空
                if(typeof($size)=="undefined"){
                    alert('请选择商品的款式！');
                    return;
                }
                //小计
                var $xiaoji= $price*$qty;
                //发起AJAX请求
                $.ajax({
                    url:'../api/baycar.php',
                    data:{id:$id,imgs:$imgs,name:$name,price:$price,qty:$qty,color:$color,size:$size,xiaoji:$xiaoji},
                    success:function(data){
                        $('.tanchuang').show();
                        console.log($('.jie'))
                        $('.jie').on('click',function(){
                            location.href=('../html/car.html');
                        });
                        $('.mai').on('click',function(){
                            $('.tanchuang').hide();
                        })
                    }
                });
            })
        });
    });
});