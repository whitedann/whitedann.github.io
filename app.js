$('#LastCircle').append("<video class=\"vidoe\" src=\"assets/LastCircleDemo2.mp4\" style=\"; height: 300px; width: 300px;margin-right: 15px\" loop muted></video>");

$('#Pendulums').append("<video class=\"vidoe\" src=\"assets/dpend90.mp4\" style=\"height: 300px; width: 300px; margin-right: 15px;\" loop muted></video>");

// returns true if element exists //
$.fn.exists = function () {
	return this.length !== 0;
}

$('.postEntry').on('mouseenter', function(){
	$(this).find('p').css("display", "block");
	let videoThumbnail = $(this).has('.vidoe');
	if(videoThumbnail.exists()){
		$(this).find('.vidoe').get(0).play();
		$(this).find('vidoe').css("opacity", "1.0");
	}
	let title = $(this).find('.post-title div');
	title.stop();
	title.css("position", "relative");
	title.animate({
		top: "-100px"
	}, 300, function() {
		$(this).find('p').css("opacity", "1.0");
		$(this).find('h1').css('color', 'black');
	});
	$(this).css('background-color', '#a8a8a1');
});

$('.postEntry').on('mouseleave', function(){
	let ele = $(this).has('.vidoe');
	if(ele.exists()){
		$(this).find('.vidoe').get(0).pause();
		$(this).find('.vidoe').css("opacity", "1.0");
	}
	let title = $(this).find('.post-title div');
	title.stop();
	$(this).find('p').css({"display": "block",
			"opacity": "0.0"});	
	title.animate({
		top: "0px"	
	}, 200);
	$(this).css('background-color', 'rgb(230,230,224)');
	$(this).find('h1').css('color', 'black');
});

$('.postEntry').click(function(){
	$(this).find('div').stop();
	if($(this).has('a').length){
		console.log(window.location.href = $(this).find("a:first").attr("href"));
	}
});

