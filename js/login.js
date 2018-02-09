require(['config'],function(){
    require(['jquery'],function($){
        jQuery(function($){
            var $btn = $('.login');
            $btn.on('click',function(){
                $.ajax({
                    url:'../api/login.php',
                    data:{
                        username:$('.username').val(),
                        password:$('.password').val()
                    },
                    success:function(data){

                        if(data === 'success'){
                            location.href = '../index.html';
                        }else{
                            $('.username').addClass('active');
                        }
                          
                    }
                        
                });
            });
        });
    });
});