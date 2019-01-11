/* returns true if element exists
$.fn.exists = function () {
	return this.length !== 0;
}
*/

// behavior for projects page post mouseover //
$('.post').on('mouseenter', function(){
	$(this).find('.post-video').get(0).play();
	$(this).find('.post-video').stop().animate({
		opacity: 1.0
	}, 400);
	$(this).find('.post-title').animate({
		top: "20px"
	}, 150, function(){
		$(this).find('.post-description').css("opacity", "1.0");
	});
});

$('.post').on('mouseleave', function(){
	let media = $(this).find('.post-video');
	media.get(0).pause();
	media.stop().animate({
		opacity: 0.5
	}, 400);
	$(this).find('.post-title').animate({
		top: "75px"
	}, 150, function(){
		$(this).find('.post-description').css("opacity", "0.0");
	});

});



$('.postEntry').click(function(){
	$(this).find('div').stop();
	if($(this).has('a').length){
		console.log(window.location.href = $(this).find("a:first").attr("href"));
	}
});
