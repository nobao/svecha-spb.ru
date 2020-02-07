$(function() {

	$('#my-menu').mmenu({
		extensions: [ 
			'fx-menu-slide', 
			'fx-listitems-slide', 
			'multiline', 
			'pagedim-black', 
			'position-right',
			'shadow-page', 
			'theme-dark',
			'border-none'
		],
		'setSelected': {
			"parent": true
		 },
		pageScroll: {
			scroll: true,
			update: true
		},		
		navbar: {
			title: '<img src="img/favicon/favicon-D9ECEC.svg" alt="Паломнический Центр Свеча">'
		}
	});

	let apiMyMenu = $('#my-menu').data('mmenu');
	apiMyMenu.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	
	$('.carousel-rooms').owlCarousel({
		loop: true,
		autoHeight: true,
		dots: false,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fas fa-angle-double-left"></i>', '<i class="fas fa-angle-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	});


	
	$('section .h2').each(function() {
		let ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('select').selectize();

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		autoHeight: true
	});

	$('.partners').owlCarousel({
		loop: true,
		smartSpeed: 700,
		dots: false,
		nav: true,
		navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});


});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});



// модальное окно бронирования
// let btnModal = document.querySelector('#btn-modal'),
// 	modalOverlay = document.querySelectorAll('.popup-container')[0],
// 	modalForm = document.querySelector('#mbh-form-wrapper'),
// 	modalResult = document.querySelector('mbh-results-wrapper');

// btnModal.onclick = function() {
// 	modalOverlay.style.display = "flex";
// 	setTimeout(() => {
// 		modalOverlay.classList.remove('hidden');		
// 	}, 10);
// };

// window.onclick = function(evt) {
// 	if (evt.target == modalOverlay ) {
// 		modalOverlay.classList.add('hidden');
// 		setTimeout(() => {
// 			modalOverlay.style.display = 'none';			
// 		}, 30);

// 	}
// };

