$(function(){
	const mainSwiper=new Swiper(".main_slider .mainSwiper",{
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: { 
			el: ".swiper-pagination",
			clickable: true
			// type: "fraction"
		},
		loop: true, 
		autoplay: {
			delay: 5000,
		},
		navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
		}
});
$("nav > ul > li").hover( 
	function(){
		$("nav").addClass("active")
	},
	function(){
		$("nav").removeClass("active")
	}
);
}) 