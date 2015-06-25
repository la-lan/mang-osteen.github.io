
$(document).ready(function(){

	var winHeight;
	var isModalOpen = false;

	function setModalHeight(){
		winHeight = $(window).height();
		$(".modal").css('height', winHeight + "px");	
	}

	function showModal(){
		isModalOpen = true;
		$(".modal, .modal .navigation li, .modal .social_media li, .top_bar .icon_bar, main").addClass("open");
		// $(".modal").css("display", "block");
	}

	function hideModal(){
		isModalOpen = false;
		$(".modal, .modal .navigation li, .modal .social_media li, .top_bar .icon_bar, main").removeClass("open");
		// $(".modal").css("display", "block");
	}

	setModalHeight();

	$(window).resize(function(){
		setModalHeight();
	});


	$(".menu").on("click", function(){

		if (!isModalOpen){
			showModal();
		}
		else{
			hideModal();
		}
	});

});










