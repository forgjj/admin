/*
*  先读取数据库信息放到tbody
*  用ajax
*  data
*
*  rander(data)  调用函数
*
* */

$(function () {
    let tbody = $('tbody');
    let add = $('.add');
    let del =$('.del');

    ////////////////////查询/////////////////
    $.ajax({
        url: 'show.php',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            render(data);
        }
    });
    ///////////////////失去焦点事件  update/////////////////////////////

    tbody.on('blur', 'input', function () {
        let values = $(this).val();
        let types = $(this).closest('td').attr('type');
        let cid = $(this).closest('tr').attr('id');

        $.ajax({
            url: 'update.php',
            data: {values, types, cid},
            /* 'cid='+cid*/
            success: function (data) {
                if (data == 'ok') {
                    console.log('修改成功');
                } else if (data == 'error') {
                    console.log('修改失败');
                }
            }
        })
    });

    //////////////添加////////////////////
    add.click(function () {
        $.ajax('add.php', {
            success: function (data) {
                // location.reload();
                // render([{id:data,names:'',tell:'',pinyin:''}])
                let str = '';
                str += `
                   <td>${data}</td>
                    <td type="names"><input type="text" class="form-control" value=""></td>
                    <td type="tell"><input type="text" class="form-control" value=""></td>
                    <td type="pinyin"><input type="text" class="form-control" value=""></td>
                    <td>
                        <button type="button" class="btn btn-default del">删除</button>
                    </td>
            `
                $('<tr>').html(str).appendTo(tbody);

            }
        })
    })
    ///////////////删除//////////////////////
    /*  用到事件委派 将 del 的点击事件委派到 tbody上*/
    tbody.on('click', '.del', function () {
        console.log(1)
        let str = $(this).closest('tr'),
            cid = str.attr('id');
        $.ajax('delete.php', {
            type: 'get',
            data: {cid},
            /* 'cid='+cid*/
            dataType: 'text',
            success: function (data) {
                if (data == 'ok') {
                    str.remove();
                    str = null;
                } else if(data = 'error') {
                    alert('error');
                }
            }
        })
    });

    //////////////////////////////////////////////////////
    function render(data) {
        /*tbody.empty();*/
        let str = '';
        $.each(data, function (index, element) {
            str += `
                <tr id="${element.cid}">
                    <td>${element.cid}</td>
                    <td type="names"><input type="text" class="form-control" value="${element.names}"></td>
                    <td type="tell"><input type="text" class="form-control" value="${element.tell}"></td>
                    <td type="pinyin"><input type="text" class="form-control" value="${element.pinyin}"></td>
                    <td>
                        <button type="button" class="btn btn-default del">删除</button>
                    </td>
                </tr>
            `;
        });
        tbody.html(function (index, value) {
            return value+str;
        });
    };


})




