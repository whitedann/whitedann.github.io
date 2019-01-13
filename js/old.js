
// behavior for projects page post mouseover //
$('.post').on('mouseenter', function(){
	$(this).find('.post-title').animate({
		top: "20px"
	}, 150, function(){
		$(this).find('.post-description').css("opacity", "1.0");
		$(this).find('.click-text').css("opacity", "1.0");
	});
	$(this).find('.post-img').stop().animate({
			opacity: 1.0
	}, 400);
	const video = $(this).find('.post-video');
	if(video){
		video.get(0).play();
		video.stop().animate({
			opacity: 1.0
		}, 400);
	}
});

$('.post').on('mouseleave', function(){
	$(this).find('.post-title').animate({
		top: "75px"
	}, 150, function(){
		$(this).find('.post-description').css("opacity", "0.0");
		$(this).find('.click-text').css("opacity", "0.0");
	});
	$(this).find('.post-img').stop().animate({
		opacity: 0.75
	}, 400);
	let video = $(this).find('.post-video');
	if(video){
		video.get(0).pause();
		video.stop().animate({
			opacity: 0.75
		}, 400);
	}
});
