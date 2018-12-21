$('#LastCircle').append("<video class=\"vidoe\" src=\"assets/LastCircleDemo2.mp4\" style=\"text-align:center; height: 300px; width: 300px; margin: 15px; float: right;\" loop muted></video>");

$('#Pendulums').append("<video class=\"vidoe\" src=\"assets/dpend90.mp4\" style=\"height: 300px; width: 300px; margin: 15px; float: right;\" loop muted></video>");

// returns true if element exists //
$.fn.exists = function () {
	return this.length !== 0;
}


$('.postEntry').on('mouseenter', function(){
	let videoThumbnail = $(this).has('.vidoe');
	if(videoThumbnail.exists()){
		$(this).find('.vidoe').get(0).play();
	}
	//$(this).find('.post-content').hide();
	$(this).css('background-color', '#a8a8a1');
});

$('.postEntry').on('mouseleave', function(){
	let ele = $(this).has('.vidoe');
	if(ele.exists()){
		$(this).find('.vidoe').get(0).pause();
	}
	//$(this).find('.post-content').show();
	$(this).css('background-color', 'rgb(230,230,224)');
});

