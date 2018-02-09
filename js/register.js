require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function($){
            //生成验证码
            $('.yanzms').html(function(){
                var s = Math.floor(Math.random()*10);
                var a = Math.floor(Math.random()*10);
                var b = Math.floor(Math.random()*10);
                var t =Math.floor(Math.random()*10);
                var res = String(s)+a+b+t;
                return res;
            })
            $('.btn').on('click',function(){
                if($('.username').val()==''){
                    alert('用户名不能为空！');
                    $('.username').addClass('danger');
                    return;
                };
                if($('.yanzm').val() != $('.yanzms').html()*1){
                    alert('验证码不正确！');
                    $('.yanzm').addClass('danger');
                    return;
                };
                if($('.password').val()==''){
                    alert('密码不能为空！');
                    $('.password').addClass('danger');
                    return;
                };
                
                if($('.password2').val()!=$('.password').val()){
                    alert('输入的两次 密码不一致！');
                    $('.password').addClass('danger');
                    return;
                }

                $.ajax({
                    url:'../api/register.php',
                    data:{
                        username:$('.username').val(),
                        password:$('.password').val()
                    },
                    success:function(data){
                        console.log(data);

                        if(data === 'success' && $('.password')!=""){
                            location.href = '../html/login.html';    
                            }else{
                                $('.username').addClass('danger');
                                alert('账号已注册！');
                            }
                    }
                })
            })
        });
    });
});