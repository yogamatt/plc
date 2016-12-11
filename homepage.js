var $lw = $('header ul li:nth-child(2)');
var $la = $('header ul li:nth-child(3)');
var $w = $('section.second .row div:nth-child(1) span');
var $a = $('section.second .row div:nth-child(2) span');
var $third = $('section.third');
var $fourth = $('section.fourth');
var $fifth = $('section.fifth');
var $sixth = $('section.sixth');
$(window).load(function(){
	var $wHeight = $('section.second .row div:nth-child(1) span').height();
	var $aHeight = $('section.second .row div:nth-child(2) span').height();

	$w.width($wHeight).addClass('state noTrans');
	$third.show();
	$fourth.show();
	$fifth.hide();
	$sixth.hide();
	$a.width($aHeight);

	var $imgContainer = $('.img-container');
	var $iHeight = $imgContainer.innerHeight();
	var $newiHeight = $iHeight * 1;

	$imgContainer.innerHeight($newiHeight);

	$('section.second .row div:nth-child(1) span, section.second .row div:nth-child(2) span').animate({opacity:1},'fast');
	$('[data-toggle="tooltip"]').tooltip();
	showSites();
	time();
	heart();
	showForm();

})

/* State One */

$lw.click(function(){
	$w.addClass('state');
	$a.removeClass('state');
	$('.time').hide();
	$fifth.hide();
	$sixth.hide();
	$sixth.find('.row .col-md-3:first-child .img-container').css({opacity:0});
	$sixth.find('.row .col-md-3:nth-child(2) .img-container').css({opacity:0});
	$sixth.find('.row .col-md-3:nth-child(3) .img-container').css({opacity:0});
	$sixth.find('.row .col-md-3:last-child .img-container').css({opacity:0});
	$third.fadeIn(800);
	$fourth.fadeIn(800);
	showSites();
	time();
})

$w.click(function(){
	$(this).addClass('state');
	$a.removeClass('state');
	$('.time').hide();
	$fifth.hide();
	$sixth.hide();
	$sixth.find('.row .col-md-3:first-child .img-container').css({opacity:0});
	$sixth.find('.row .col-md-3:nth-child(2) .img-container').css({opacity:0});
	$sixth.find('.row .col-md-3:nth-child(3) .img-container').css({opacity:0});
	$sixth.find('.row .col-md-3:last-child .img-container').css({opacity:0});
	$third.fadeIn(800);
	$fourth.fadeIn(800);
	showSites();
	time();
});

/* End State One */
/* State Two */

$la.click(function(){
	$a.addClass('state');
	$w.removeClass('state noTrans');
	$('.time').hide();
	$third.hide();
	$fourth.hide();
	$fourth.find('.row .col-md-3:first-child .img-container').css({opacity:0});
	$fourth.find('.row .col-md-3:nth-child(2) .img-container').css({opacity:0});
	$fourth.find('.row .col-md-3:nth-child(3) .img-container').css({opacity:0});
	$fourth.find('.row .col-md-3:last-child .img-container').css({opacity:0});
	$fifth.fadeIn(800);
	$sixth.fadeIn(800);
	showApps();
	time();
})

$a.click(function(){
	$(this).addClass('state');
	$w.removeClass('state noTrans');
	$('.time').hide();
	$third.hide();
	$fourth.hide();
	$fourth.find('.row .col-md-3:first-child .img-container').css({opacity:0});
	$fourth.find('.row .col-md-3:nth-child(2) .img-container').css({opacity:0});
	$fourth.find('.row .col-md-3:nth-child(3) .img-container').css({opacity:0});
	$fourth.find('.row .col-md-3:last-child .img-container').css({opacity:0});
	$fifth.fadeIn(800);
	$sixth.fadeIn(800);
	showApps();
	time();
});

/* End State Two */

$('.dim').hover(function(){
	$(this).animate({opacity:1},'fast');
}, function(){
	$(this).animate({opacity:.8},'fast');
});

function showSites() {
if ('section.fourth:visible') {
		$fourth.find('.row .col-md-3:first-child .img-container').animate({opacity:1},'fast');
		$fourth.find('.row .col-md-3:nth-child(2) .img-container').delay(500).animate({opacity:1},'fast');
		$fourth.find('.row .col-md-3:nth-child(3) .img-container').delay(1000).animate({opacity:1},'fast');
		$fourth.find('.row .col-md-3:last-child .img-container').delay(1500).animate({opacity:1},'fast');
	}
}

function showApps() {
if ('section.sixth:visible') {
		$sixth.find('.row .col-md-3:first-child .img-container').animate({opacity:1},'fast');
		$sixth.find('.row .col-md-3:nth-child(2) .img-container').delay(500).animate({opacity:1},'fast');
		$sixth.find('.row .col-md-3:nth-child(3) .img-container').delay(1000).animate({opacity:1},'fast');
		$sixth.find('.row .col-md-3:last-child .img-container').delay(1500).animate({opacity:1},'fast');
	}
}

function time() {
	$('.time').delay(1000).fadeIn('fast');
}

/* Copywrite Heart */
function heart() {
$('.copywrite .cwrite span').hover(function(){
	$('.copywrite .cwrite span i').removeClass('fa fa-heart-o');
	$('.copywrite .cwrite span i').addClass('fa fa-heart');
}, function(){
	$('.copywrite .cwrite span i').removeClass('fa fa-heart');
	$('.copywrite .cwrite span i').addClass('fa fa-heart-o');
})
}

function showForm() {
	var $dB = $('input#behavior.updateButton');
	var $form = $('section#form');

	$dB.click(function(){
		$(this).toggleClass('form-active');
		$form.slideToggle();
	})
}



