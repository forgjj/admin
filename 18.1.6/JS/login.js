/*
*  操作按钮 登录
*  清除，默认行为  点击 return false
*  获取 表格
*  用ajax登录
*
*
*
* */
$(function () {
    let submit = $('input[type=submit]');
    let flagu = false, flagp = false;
    submit.on('click', function (e) {
        // e.preventDefault();

        let username = $('input[type=text]'),
            password = $(':password');
        console.log();
        if (username.val()) {
            flagu = true;
        } else {
            username.prev().css('display','block');
            let t = setTimeout(function(){
                username.prev().css('display','none');
                clearTimeout(t);
            },1500);
            return false;
        }
        if (password.val()) {
            flagp = true;
        } else {
            password.prev().css('display','block');
            let t = setTimeout(function(){
                password.prev().css('display','none');
                clearTimeout(t);
            },1500);
            return false;
        }
        if (flagu && flagp) {
            $.ajax('login.php', {
                /*url:'login.php',*/
                type: 'post',
                dateType: 'text',
                data: {username: username.val(), password: password.val()},
                success: function (data) {
                    /* ok error*/
                    if (data == 'ok') {
                        // console.log('ok');
                        location.href = 'main.html';/* 登录跳转*/
                    }else if (data == 'error') {
                        alert('登录失败');
                        // console.log('error');
                    }
                }

            });
        }
        return false;
    })


})

