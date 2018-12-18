$('#LastCircle').append("<video class=\"vidoe\" src=\"assets/LastCircleDemo2.mp4\" style=\"text-align:center; height: 150px; width: 200px; margin: 15px; float: right;\" loop muted></video>");

$('#Pendulums').append("<video class=\"vidoe\" src=\"assets/dpend90.mp4\" style=\"height: 150px; width: 200px; margin: 15px; float: right;\" loop muted></video>");

$('.postEntry').on('mouseenter', function(){
	let ele = $('.postEntry .vidoe');
	console.log(ele);
	$(this).find('.vidoe').get(0).play();
	$(this).css({
		"background-color": "rgb(210,210,220)",
	});
});

$('.postEntry').on('mouseleave', function(){
	$(this).find('.vidoe').get(0).pause();
	$(this).css('background-color', 'rgb(230,230,224)');
});

