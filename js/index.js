require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function($){
            $('.header').load("html/header.html");
            $('.footer').load("html/footer.html");
            //获取元素
            var $img = $('.bba').find('li');
            var $ul = $('.bba');
            //图片初试化，显示第一张其他隐藏
            $img.not(':first').hide();
            //当前图片的张数
            var idx = 0;
            //获取图片的长度
            var len =$img.length;
            //设置定时器
            timer = setInterval(function(){
                //每隔一秒idx++
                show();
            },3000)
            //图片显示函数
            function show(){
                idx++;
                if(idx>=len){
                    idx=0;
                };
                //显示当前图片
                $img.eq(idx).addClass('act').siblings('li').removeClass("act");
                $img.eq(idx).fadeIn(500).siblings('li').fadeOut(500);
                // $ulmin.attr('display','');
                // //对三个SPAN做循环
                //获取当前点击的索引
                var $minlis = $('.minli');
                $minlis.eq(idx).addClass('active').siblings().removeClass('active');
            }

            function crea(){
                //按图片长度创建span
                var $ulmin = $('<ul/>');
                $ulmin.addClass('minul');
                for(var i=0;i<len;i++){
                    var $limin = $('<li/>');
                    $limin.addClass('minli')
                    $ulmin.append($limin);
                }
                $ul.append($ulmin);
                //对三个SPAN做循环
                var $minlis = $('.minli');
                $minlis.eq(0).addClass('active');
                $ulmin.on('click','li',function(){
                    $this = $(this);
                    console.log($this)
                    //获取当前点击的索引
                    idx=$(this).index();
                    idx--;
                    $this.addClass('active').siblings().removeClass('active');
                    show();
                });
                //左右切图
                var $arrow = $('.arrow');
                var $right = $('.right');
                $arrow.on('click',function(){
                    //清楚定时器
                    clearInterval(timer);
                    idx-=2;
                    if(idx==-4){idx=2;}
                    console.log(idx);
                    show();
                });
                $right.on('click',function(){
                    clearInterval(timer);
                    // if(idx>3){idx=0}else{idx=idx};
                    show();
                });
                    //鼠标移入时停止滚动，移出是继续。
                $ul.on('mouseenter',function(){
                    clearInterval(timer);
                }).on('mouseleave',function(){
                    timer = setInterval(function(){
                    //每隔一秒idx++
                    show();
                    },3000)
                })
            }
            crea();
            //轮播图下的tab切换
            var $tab = $('.tab');
            var $ul = $tab.find('ul');
            // bannerListFn($(".tab"), $(""), $(""), $(""), 2000, true);
            // var num = 0;
            // var width = $tab.width();
            // //每次隔三秒即移动
            // timer2 = setInterval(function(){
            //     num++;
            //     $ul.animate({left:-num*width});
            //     if(num>=2){
            //         $ul.css({left:0});
            //         num=-1;
            //     }
            // },3000)
            //智能选TAB切换
            //获取所有的元素
            function zx(){
                var $ul01 = $('.ul01');
                var $ul02 = $('.ul02');
                var $li01 = $ul01.find('li');
                var $li02 = $ul02.find('li')
                //初始化，显示第一张图片其他隐藏
                $li02.eq(0).show().siblings().hide();
                //事件委托
                $ul01.on('mouseenter','li',function(){
                    //获取当前移入鼠标的索引值
                    var idx  = $(this).index();
                    $(this).addClass('active').siblings().removeClass('active');
                    $li02.eq(idx).show().siblings().hide();
                });
                //上下拉伸动画
                var $ulb = $('.ulb');
                var $ulbli = $ulb.find('li');
                var $ulbdiv = $ulb.find('div');
                //事件委托
                $ulb.on('mouseenter','li',function(){
                    $(this).find('div').animate({top:0});
                }).on('mouseleave','li',function(){
                    $(this).find('div').animate({top:180});
                });
            }
            zx();
            //热门轮播
            function rem(){
                var $ul = $('.rem2').find('ul');
                var ul = document.querySelector('.rem2').children[0];
                var $rem2 = $('.rem2');
                var width = $rem2.width();
                //每隔三秒移动
                var idx = 0;
                setInterval(function(){
                    idx++;
                    $ul.animate({left:-width*idx});
                    if($ul.offset().left<0){
                        $ul.css({left:0});
                        idx=-1;
                    }
                },3000)
            }
            rem();
            //请求数据
            function shuju(){
                //获取品牌精选ul
                var $ul = $('.pinpai').find('ul');
                //电竞
                var $dul = $('.jingjir').find('ul');
                //热门
                var $rul = $('.san')
                //摄影
                var $sul = $('.cllt').find('ul');
                //平板
                var $pul = $('.clrt').find('ul');
                //本周热销
                var $bul = $('.rexiao').find('ul');
                $.ajax({
                    url:'api/index.php',
                    success:function(data){
                        var $res = JSON.parse(data);
                        $ul.html($res.map(function(item){
                            if(item.description=='pinpai'){
                                return `
                                    <a href="html/list.html">
                                        <li>
                                            <img src="${item.imgs}">
                                            <h4>${item.name}</h4>
                                            <p>RMB   ${item.price}</p>
                                        </li>
                                    </a>
                                `   
                            }
                        
                        }));
                        $dul.html($res.map(function(item){
                            if(item.description=='dianjing'){
                               
                                return `
                                    <a href="html/list.html">
                                        <li>
                                            <img src="${item.imgs}">
                                            <h4>${item.name}</h4>
                                            <p>RMB   ${item.price}</p>
                                        </li>
                                    </a>
                                `   
                            }
                        
                        }));
                        $rul.html($res.map(function(item){
                            if(item.description=='remen'){
                                return `
                                    <a href="html/list.html">
                                        <li>
                                            <img src="${item.imgs}">
                                            <h4>${item.name}</h4>
                                            <p>RMB   ${item.price}</p>
                                        </li>
                                    </a>
                                `   
                            }
                        
                        }));
                        $sul.html($res.map(function(item){
                            if(item.description=='sheying'){
                                return `
                                    <a href="html/list.html">
                                        <li>
                                            <img src="${item.imgs}">
                                            <h4>${item.name}</h4>
                                            <p>RMB   ${item.price}</p>
                                        </li>
                                    </a>
                                `   
                            }
                    
                        }));
                        $pul.html($res.map(function(item){
                            if(item.description=='sheying'){
                                return `
                                    <a href="html/list.html">
                                        <li>
                                            <img src="${item.imgs}">
                                            <h4>${item.name}</h4>
                                            <p>RMB   ${item.price}</p>
                                        </li>
                                    </a>
                                `   
                            }
                    
                        }));
                        $bul.html($res.map(function(item){
                            if(item.description=='rexiao'){
                                return `
                                    <a href="html/list.html">
                                        <li>
                                            <img src="${item.imgs}">
                                            <h4>${item.name}</h4>
                                            <p>RMB   ${item.price}</p>
                                        </li>
                                    </a>
                                `   
                            }
                    
                        }));


                    }
                })
            }
            shuju();
        });
        
    })
})