$('#gameMedia').html("<video id=\"vidoe\" src=\"assets/LastCircleDemo2.mp4\" style=\"text-align:center; height: 150px; width: 200px; margin: 15px; float: right;\" loop muted></video>");


$('.post-title').mouseenter(function(){
	$('#vidoe').get(0).play();
});

$('.post-title').mouseleave(function(){
	$('#vidoe').get(0).pause();
});

//$('#gameMedia').html("<video src=\"assets/LastCircleDemo.mp4\" style=\"text-align:center; height: 150px; width: 200px; margin: 15px; float: right;\" loop muted autoplay=\"true\"></video>");

