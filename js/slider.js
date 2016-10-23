$(document).ready(function()
{

//set option
var speed=500;
var autoswtich=true;
var autoswitch_speed=4000;

//add initial active slide
$('.slide').first().addClass('active');

//hide all slide
$('.slide').hide();

//show first slide
$('.active').show();

//NextSlide handler
$('#next').on('click',nextSlide);

//PrevSlide handler
$('#prev').on('click',prevSlide);

//AutoSlide handler
	if(autoswitch == true) {
		setInterval(nextSlide,autoswitch_speed);
	}

	//Switch to next Slide
	function nextSlide()
	{
		$('.active').removeClass('active').addClass('oldActive')
	if($('.oldActive').is(':last-child'))
	{
		$('.slide').first().addClass('active');
	}
	else
	{
		$('.oldActive').next().addClass('active');
	}
	$('.oldActive').removeClass('oldActive');
	$('.slide').fadeOut(speed);
	$('.active').fadeIn(speed);
	}

	//Switch to prev slide
	function prevSlide()
	{
		$('.active').removeClass('active').addClass('oldActive')
	if($('.oldActive').is(':first-child'))
	{
		$('.slide').last().addClass('active');
	}
	else
	{
		$('.oldActive').prev().addClass('active');
	}
	$('oldActive').removeClass('oldActive');
	$('.slide').fadeOut(speed);
	$('.active').fadeIn(speed);
	}



});