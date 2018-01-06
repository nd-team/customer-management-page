$(window).ready(function () {
	$('.profile-left li').click(function(){
		$('.profile-left li').removeClass('profile-act1').eq($(this).index()).addClass('profile-act1');
		$('.profile-right a').removeClass('profile-act2').eq($(this).index()).addClass('profile-act2');
		$('.profile-right input').removeClass('profile-act3').eq($(this).index()).addClass('profile-act3');
		$('.profile-right i').removeClass('profile-act4').eq($(this).index()).addClass('profile-act4');
	})
	$('.profile-right input').click(function(){
		$('.profile-left li').removeClass('profile-act1').eq($(this).index()-3).addClass('profile-act1');
		$('.profile-right a').removeClass('profile-act2').eq($(this).index()-3).addClass('profile-act2');
		$('.profile-right input').removeClass('profile-act3').eq($(this).index()-3).addClass('profile-act3');
		$('.profile-right i').removeClass('profile-act4').eq($(this).index()-3).addClass('profile-act4');
	})
})