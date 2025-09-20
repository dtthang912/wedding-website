$(document).ready(function() {
  // MagnificPopup
	var magnifPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-with-zoom',
			gallery:{
				enabled:true
			},
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it

				duration: 300, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function

				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
				// openerElement is the element on which popup was initialized, in this case its <a> tag
				// you don't need to add "opener" option if this code matches your needs, it's defailt one.
				return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
		});
	};

	var magnifVideo = function() {
		$('.popup-video').magnificPopup({
			type: 'inline',
			inline: {
				markup: '<div class="mfp-content-wrapper">'+
						'<div class="mfp-close"></div>'+
						'<div class="video-popup-container">'+
						'<video width="100%" controls>'+
						'<source src="" type="video/mp4">'+
						'Your browser does not support the video tag.'+
						'</video>'+
						'</div>'+
						'</div>'
			},
			callbacks: {
				open: function() {
					var videoSrc = $(this.st.el).attr('href');
					if (videoSrc) {
						$(this.content).find('video source').attr('src', videoSrc);
						$(this.content).find('video')[0].load();
						$(this.content).find('video')[0].play();
					}
				},
				close: function() {
					if ($(this.content).find('video').length) {
						$(this.content).find('video')[0].pause();
					}
				}
			},
			closeBtnInside: true,
			closeOnContentClick: false,
			closeOnBgClick: true,
			showCloseBtn: true,
			enableEscapeKey: true,
			midClick: true,
			mainClass: 'mfp-with-zoom',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true,
			items: {
				src: '' // This will be replaced by elementParse callback
			}
		});
	};

	


	// Call the functions 
	magnifPopup();
	magnifVideo();

});