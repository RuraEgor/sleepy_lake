'use strict';

$(function () {


	var wow = new WOW({

		boxClass: 'wow',
		offset: 200,
		callback: function (box) {

			$(box).addClass("ttttttttt");


			//------- last-update
			if ( $(box).hasClass("last-update__img") ) {

				$(box).addClass("active");
			}


			//------- art-slider
			if ( $(box).hasClass("slider-art-wow") ) {

				setTimeout("startSl()", 2000);
			}
			
		}
	});

	wow.init("#wrap");


	$(".obj-svg-path-style").on("click", function () {

		var $self = $(this);

		if ($self.hasClass("active")) {

			$(".sect-charact__bg").removeClass("active");
			$(".sect-charact .char path").removeClass("active");

		} else {

			$(".sect-charact__bg").addClass("active");
			$self.addClass("active");
		}

	});


	$(".sect-charact__bg").on("click", function () {

		var $self = $(this);

		if ($self.hasClass("active")) {

			$(".sect-charact__bg").removeClass("active");
			$(".sect-charact .char path").removeClass("active");

		}

	});


	//==========  MAIN MENU SCROLL

	$(".js-main-nav a").on("click", function () {

		var idScrolElem = $(this).attr("href");

		$.scrollTo(idScrolElem, 1300, {top: '-=500px'});

		return false;

	});


	//==========  MAIN MENU SCROLL

	


	// $('#wrap').slimScroll({
	// 	height: 'auto'
	// });


	//==========  JQUERY ONLOAD

	// $("body").queryLoader2({
	// 	backgroundColor: "red",
	// 	minimumTime: 2000,
	// 	maxTime: 10000,
	// 	fadeOutTime: 1000,
	// 	onComplete: function(){

	// 	},
	// 	percentage: true,
	// 	onProgress: function(percentage){
	// 		console.log(percentage);
	// 	}
	// });



	//==========  CHARACTERS-MODAL
	//$("..js-characters-modal").fancybox();


	//==========  FANCYBOX
	$(".fanc-gall-img").fancybox();

});


//----- FUNCTIONS
//=================================


var spinX = -25, spinY = 20;
var spinX = 0, spinY = 0;


$(document).keydown(function (evt) {
	switch (evt.keyCode) {
		case 37: // left
			spinY -= 1;
			spinStage(spinX, spinY);
			break;

		case 38: // up
			evt.preventDefault();
			spinX += 1;
			spinStage(spinX, spinY);
			break;

		case 39: // right
			spinY += 1;
			spinStage(spinX, spinY);
			break;

		case 40: // down
			evt.preventDefault();
			spinX -= 1;
			spinStage(spinX, spinY);
			break;

		case 27: //esc
			break;

		default:
			break;
	}
	;

});


var ms_img_src = [0];
var ms_img_src_min = [0];

$(".wr_img_sl img").each(function () {

	ms_img_src_min[ms_img_src_min.length] = $(this).attr("src");
	ms_img_src[ms_img_src.length] = $(this).attr("data-min");

});


for (var k = 1; k < ms_img_src.length; k++) {
	var deg_ret = 360 / ms_img_src.length;
	deg_ret = deg_ret * k;
	//$("#cube").append('<div class="fig-'+k+' cn-img" style="background: url('+ms_img_src[k]+') no-repeat; -webkit-transform: rotateX(0deg) rotateY('+deg_ret+'deg) translateX(30px) translateY(0px) translateZ(0px);"><span>'+ k +'</span></div>');
	$("#cube").append('<div class="fig-' + k + ' cn-img" style="background: url(' + ms_img_src_min[k] + ') no-repeat; transform: rotateX(0deg) rotateY(0deg) translateX(150px) translateY(0px) translateZ(0px);"><a href="' + ms_img_src[k] + '" rel="group" class="fancybox"><span></span></div>');
}




//===========================================

function startSl() {
	var cc = 0;
	var deg_ret = 360 / (ms_img_src.length - 1);

	$("#cube .cn-img").each(function () {
		var deg_ret_item = deg_ret * cc;
		$(this).css("transform", "rotateX(0deg) rotateY(" + deg_ret_item + "deg) translateX(150px) translateY(0px) translateZ(0px)");
		cc++;
	});

	$("#cube").addClass("active");
}



$(".fancybox").fancybox();

//---------------------------------------------------------

$(document).keydown(function (evt) {
	switch (evt.keyCode) {
		case 37: // left
			spinY -= 1;
			spinStage(spinX, spinY);
			break;

		case 38: // up
			evt.preventDefault();
			spinX += 1;
			spinStage(spinX, spinY);
			break;

		case 39: // right
			spinY += 1;
			spinStage(spinX, spinY);
			break;

		case 40: // down
			evt.preventDefault();
			spinX -= 1;
			spinStage(spinX, spinY);
			break;

		case 27: //esc
			break;

		default:
			break;
	}
	;

});