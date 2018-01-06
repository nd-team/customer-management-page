
/**
 * Created by ike on 2018/1/3.
 */

    var num = 0;
    var timer = setInterval(function () {
        num++;
        if (num > 1) {
            num = 0;
            $('.carousel1').css({'top': 0, 'transition': 'top 0s'});   //修改
        } else {
            $('.carousel1').css({'top': -40 * num + "px", 'transition': 'top 1s'});
        }
        /*       $('.carousel>li').eq(num).addClass('active').siblings().removeClass('active');*/
    }, 1000);
 /*鼠标经过的时候显示隐藏div*/

    $('.abil-box').hover(function() {
        $(".abil-boxbot").css('display', 'block');
    }, function() {
        $(".abil-boxbot").css('display', 'none');
    });
/*==========================选项卡====================*/

	   var odiv=document.getElementById('project-btn-all');//获取div
   var btn=odiv.getElementsByTagName('span');//获取div下的input
   var div2=odiv.getElementsByTagName('div') ;//获取div下的div

  for(i=0;i<btn.length;i++)//循环每个按钮
   {
     btn[i].index=i
//btn[i]是指定button的第i个按钮;为该按钮添加一个index属性，并将index的值设置为i
     btn[i].onclick=function()//按钮的第i个点击事件
    {
    for(i=0;i<btn.length;i++)//循环去掉button的样式，把div隐藏
     {
       btn[i].className='project-btn' //清空按钮的样式
       div2[i].style.display='none'//隐藏div
      }
        this.className='active'//自身添加active
        div2[this.index].style.display='block'//this.index是当前div
    }
   }
   /*=====================================双层选修卡===============================*/
/* var oneparent=$('.buss-btn-mainOne');
 var onebtn=oneparent.find('.mainbtn-class');
 var twoparent=$('.mainTwo-content');
var twobtn=twoparent.find('.mainTwo-btnOne');*/
var onebtn=document.getElementsByClassName('mainbtn-class');
var twoparent=document.getElementsByClassName('mainTwo-content');
var twobtn=document.getElementsByClassName('mainTwo-btnOne');
var threecon=document.getElementsByClassName('mainTwo-conOne');
var fourbtn=document.getElementsByClassName('mainTwo-btntwo');
var fivecon=document.getElementsByClassName('mainTwo-contwo');
 for(j=0;j<onebtn.length;j++){
    onebtn[j].index=j;
    onebtn[j].onclick=function(){
        for(j=0;j<onebtn.length;j++){
            twoparent[j].style.display='none';
        }
        twoparent[this.index].style.display='block';
    }

 }
 for(z=0;z<twobtn.length;z++){
     twobtn[z].index=z;
     twobtn[z].onclick=function(){
         for(z=0;z<twobtn.length;z++){
             threecon[z].style.display='none';
         }
         threecon[this.index].style.display='block';



     }


 }
for(y=0;y<fourbtn.length;y++){
    fourbtn[y].index=y;
    fourbtn[y].onclick=function(){
        for(y=0;y<fourbtn.length;y++){
            fivecon[y].style.display='none';
        }
        fivecon[this.index].style.display='block';


    }


}


$('.mainTwo-btnOne').click(function () {
    $(this).siblings().removeClass('mainTwo-btnOne-active');
    $(this).addClass('mainTwo-btnOne-active')
});
$('.mainbtn-class').click(function(){
   $(this).siblings().removeClass('mainbtn-active');
   $(this).addClass('mainbtn-active');
});
$('.mainTwo-btntwo').click(function () {
    $(this).siblings().removeClass('mainTwo-btnOne-active');
    $(this).addClass('mainTwo-btnOne-active')
});
  /*=====================================双层选修卡===============================*/



