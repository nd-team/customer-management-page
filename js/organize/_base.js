//左边点击导航变色
$('.secOul li').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
});

//点击中间导航下拉换向 隐藏的ol显示
$('.secOulTwo li').on('click',function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).children('.navOul').toggleClass('showEle').parents(this).siblings().children('.navOul').removeClass('showEle');
});

//点击中间导航下拉换向 li中的字体变色
$('.navOul li').click(function () {
    event.stopPropagation();
    $(this).addClass('active').siblings().removeClass('active');
});
//点击左边导航 li背景变色
$('.rightNav li:not(".disable")').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
});
//右边主体点击导航变色
$('.contentTitle>ul>li').on('click',function () {
    $(this).addClass('active').siblings().removeClass('liSty');
    var listTitle = $(this).attr("data-title");
    $(this).parents('section').find('.'+listTitle).show().siblings().hide();
});

$('.list-style .flex1>label').click(function () {
    $(this).addClass('tick').css('border','1px solid #2aa6e7').parents().siblings().removeClass('tick');
    /*点击勾选*/
    $(".checked-none").each(function(i){
        $(this).attr({"id":"checked"+i});
        $(this).next("label").attr("for","checked"+i);
    });
});


//详情百分比
$('.scaleDl').text((($('.ddWid').width()/$('.dlWid').width())*100).toFixed(0)+'%');


//添加是否按钮切换
$('.box-circle').click(function () {
    $(this).parent().toggleClass('act').toggleClass('box-en-bg');
    if($(this).parent().hasClass('box-en-bg')){
            $('.box-circle-text').text('否')
    }else {
        $('.box-circle-text').text('是')
    }
});



