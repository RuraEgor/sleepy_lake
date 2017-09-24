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

			//------- art-slider
			if ( $(box).hasClass("gallery-wow") ) {

				setTimeout('$(".gallery-list").removeClass("begin")', 3000);
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


		$(".characters-modal-descr").fadeOut(600, function(){

			$(this).removeClass("active");
		});

	});


	//==========  MAIN MENU SCROLL
	$(".js-main-nav a").on("click", function () {

		var idScrolElem = $(this).attr("href");

		$.scrollTo(idScrolElem, 1300, {top: '-=500px'});

		return false;

	});


	//==========  GALLERY
	//  $.ajax({
	// 	url: "comics/chapter_1.html",
	// 	type: 'post',
	// 	dataType: 'json',
	// 	data: { },
	// 	success: function(data) {
			
	// 		alert(data);
	// 	},
 //        error: function (jgxhr){

 //            console.log(jgxhr);
 //            console.log("Error send");
 //        }
	// });  //-- конец аякса

	$('.gallery__bl-hide').load('comics/chapter_1.html #cont-imgs', function(){

		var galleryImg = [];
		var galleryItem ;

		$('.gallery__bl-hide img').each(function(){

			//galleryImg[galleryImg.length] = 'comics/gallery/' + $(this).attr("src");
			galleryImg[galleryImg.length] = $(this).attr("src");
			
		});


		for (var ii = 0; ii < galleryImg.length; ii++) {

			var znTrans = Math.random() * 1 + 0.7;

			galleryItem = '<div class="gallery-list__item" style="transition: all '+znTrans.toFixed(1)+'s">'+
                                '<div class="gallery-list__item-wr">'+
                                 	'<a href="comics/gallery/' + galleryImg[ii] + '"'+
                                	'class="gallery-list__item-img fanc-gall-img gallery-list__item-img_ins-fr" '+
                                	'style="background-image: url(comics/gallery-min/' + galleryImg[ii] + ')"'+
                                	'rel="group-fr"></a>'+
                                	'<a href="comics/gallery/' + galleryImg[ii] + '"'+
                                	'class="gallery-list__item-img fanc-gall-img gallery-list__item-img-sec" ' +
                                	'style="background-image: url(comics/gallery-min/' + galleryImg[ii] + ')"' +
                                	'rel="group-sec"></a>' +
                                '</div>' +
                            '</div>';


			$(".gallery-list__height").append(galleryItem);
                            
		}


		$(".fanc-gall-img").fancybox();

	});


//---------------------

	$(".js_gallery-chapter").on("click", function(){

		var znChapter = $(this).attr("id");

		$('.gallery__bl-hide').load('comics/' + znChapter + '.html #cont-imgs', function(){

			var galleryImg = [];
			var galleryItem ;

			$('.gallery__bl-hide img').each(function(){

				galleryImg[galleryImg.length] = $(this).attr("src");
			});


			var count_img = 0;

			if( $(".gallery-list").hasClass("active") ) {

				$('.gallery-list__height .gallery-list__item').each(function(){

					$(this).find(".gallery-list__item-img-sec").attr("href", "mmmmmmmmmmmmmmmmm");
					$(this).find(".gallery-list__item-img-sec").attr("style", 'background-image: url(comics/gallery-min/' + galleryImg[count_img] + ')');

					count_img++;
				});

				$(".gallery-list").removeClass("active");

			} else {

				$('.gallery-list__height .gallery-list__item').each(function(){

					$(this).find(".gallery-list__item-img-sec").attr("href", "comics/gallery/"+galleryImg[count_img] );
					$(this).find(".gallery-list__item-img-sec").attr("style", 'background-image: url(comics/gallery-min/' + galleryImg[count_img] + ')');

					count_img++;
				});

				$(".gallery-list__item-img_ins-fr").attr("rel");

				$(".gallery-list").addClass("active");
			}

			$(".fanc-gall-img").fancybox();

		});
	});


	//==== MODAL-WINDOW-CHARACTER
	//=======================================================================================================

	$(".js-characters-modal").on("click", function(){

		if( $(".characters-modal-descr").hasClass("active") ) {

			$(".characters-modal-descr").fadeOut(600, function(){

				$(this).removeClass("active");
			});

		} else {

			var chPosit = $(this).closest('div').position();

			var chWidthEl = $(this).closest('div').outerWidth();


			$(".characters-modal-descr").css({
				"top": chPosit.top - 350,
				"left": chWidthEl/2 + chPosit.left,
			});


			$(".characters-modal-descr").delay(800).fadeIn(600, function(){

				$(this).addClass("active");
			});
		}

		return false;

	});

	


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


//----  PLITCA-IMG
//------------------------------------------------------------------

$(function(){

var arr_elem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

var pazzlElem = {};

pazzlElem.plitHeight = $(".puzzle-img__img").height();
pazzlElem.plitWidth = $(".puzzle-img__img").width();

pazzlElem.imgSrc = $(".puzzle-img__img").attr("src");

pazzlElem.plitHeight_pl = pazzlElem.plitHeight / 4;
pazzlElem.plitWidth_pl = pazzlElem.plitWidth / 4;


$(".plitImage").css({
	"height": pazzlElem.plitHeight,
	"width": pazzlElem.plitWidth
});

    var fl_row = 0,
        fl_column = 0,
        notSovp,
        arr_all_elem = [],
        iy,
        buf_from = [],
        buf_to = [];

	for(var i = 0; i < arr_elem.length; i++){

        if(i == 0) { iy = 1; } else { iy = i; }

        if( i % 4 ) { fl_row++; } else { fl_row = 0; }
        if( iy % 4 ) {  } else { fl_column++; }

        arr_all_elem[arr_all_elem.length] = '<li data-count='+i+' style="background: url(' + pazzlElem.imgSrc + '); background-position: -'+(fl_row * pazzlElem.plitWidth_pl)+'px -'+(fl_column * pazzlElem.plitHeight_pl)+'px"></li>';
	}


    arr_elem.sort(compareRandom);
    
    for(var y = 0; y < arr_elem.length; y++){
        $(".plitImage").append(arr_all_elem[arr_elem[y]]);
    }


    $("#sortable li").draggable({

        containment:"#sortable",
        revert: true,
        revertDuration: 250,

        start: function(){

            buf_to[0] = $(this).attr("data-count");
            buf_to[1] = $(this).css("background-position");
            $(this).addClass("z-ind");

        },
        stop: function(){
            
            if ( !!buf_from[0] && !!buf_from[1] ) {

                $("#sortable li").removeClass("z-ind");
                $(this).attr("data-count", buf_from[0]);
                $(this).css("background-position", buf_from[1]);

                buf_from[0] = null;
                buf_from[1] = null;
            }

        },

    });

    $("#sortable li").droppable({
        hoverClass: "cl-hover",
    	drop: function(event, ui) {

            buf_from[0] = $(this).attr("data-count");
            buf_from[1] = $(this).css("background-position");

            $(this).attr("data-count", buf_to[0]);
            $(this).css("background-position", buf_to[1]);
            
            setTimeout("checkImg()", 1200);
    	}
    });

    var count = $(".plitImage li").length;
    var widt_wr = $(".plitImage").width();

    var count2 = widt_wr / count;
    count = 100 / count;

});
//====  END PLITCA-IMG
//========================================================================




//----- FUNCTIONS
//------------------------------------------------------------------------


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


	//----  RANDOM-LIST PLITCA
	//--------------------------------------------------------------------
    function compareRandom(a, b) {
	  return Math.random() - 0.5;
	}


	//----  CHECK-LIST PLITCA
	//--------------------------------------------------------------------
    function checkImg(){

        var notSovp = 1;

        $(".plitImage li").each(function(){

            var zn_index = $(this).index();
            var zn_nom = $(this).attr("data-count");

            if(zn_index != zn_nom) {
                notSovp = 0;
            }

        });

        if ( notSovp == 1 ) {
            $(".plitImage").addClass("right");
        }
    }