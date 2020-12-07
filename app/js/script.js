$(document).ready(function () {



	//modals
	var modalState = {
		"isModalShow": false, //state show modal
		"scrollPos": 0
	};
	var scrollWidth= window.innerWidth - $(document).width();
	var openModal = function () {
		if (!$('.modal-layer').hasClass('modal-layer-show')) {
			$('.modal-layer').addClass('modal-layer-show');
			modalState.scrollPos = $(window).scrollTop();
			$('body').css({
				overflowY: 'hidden',
				top: -modalState.scrollPos,
				width: '100%',
				paddingRight:scrollWidth
			});

		}
		modalState.isModalShow = true;
	};

	var closeModal = function () {
		$('.modal-layer').removeClass('modal-layer-show');
		$('body').css({
			overflow: '',
			position: '',
			top: modalState.scrollPos,
			paddingRight:0
		});
		$(window).scrollTop(modalState.scrollPos);
		$('.modal').addClass('modal-hide-animation');
		setTimeout(function(){
			$('.modal').removeClass('modal-hide-animation');
			$('.modal').removeClass('modal__show');
		},600);
		modalState.isModalShow = false;
	};

	var initModal = function (el) {
		openModal();

		$('.modal').each(function () {
			if ($(this).data('modal') === el) {
				$(this).addClass('modal__show')
			} else {
				$(this).removeClass('modal__show')
			}
		});
		var modalHeightCont = $(window).height();
		$('.modal-filter').height(modalHeightCont);

	};

	$('.modal-get').click(function () {
		var currentModal = $(this).data("modal");
		initModal(currentModal);
	});

	$('.modal-close, .modal-hide').click(function () {
		closeModal();
	});

	$('.modal-wrap').click(function(e){
		e.target.className === 'modal-wrap' ? closeModal() : false
	});

	//modals===end

	// fix top-menu
	var shrinkHeader = 250;
	var head = $('.toolbar--header');
	var heightHeader = head.height();
	$(window).scroll(function() {
		var scroll = $(this).scrollTop();
		if ( scroll >= shrinkHeader ) {
				$('body').css('paddingTop',heightHeader);
				head.addClass('shrink');
			}
			else {
					$('body').css('paddingTop',0);
					head.removeClass('shrink');
			}
	});
	// fix top-menu === end

	var actionTick;
	(
		actionTick = function(){
				$('body').on('click','.js-tick',function(){
					var parent = $(this).closest('.js-tick-cont');
					parent.find('.js-tick').removeClass('active');
					$(this).addClass('active')
				});
			}
	)()

	var actionTab;
	(
		actionTab = function(){
			$('body').on('click','.js-tab',function(){
				var current = $(this).index();
				var parent = $(this).closest('.js-tab-wrap')
				parent.find('.js-tab-cont').removeClass('active')
				parent.find('.js-tab-cont').eq(current).addClass('active')
			});
		}
	)()


	// dropdown
	$('.dropdown').click(function () {
		$(this).attr('tabindex', 1).focus();
		$(this).toggleClass('active');
		$(this).find('.dropdown-menu').slideToggle(300);
	});
	$('.dropdown').focusout(function () {
		$(this).removeClass('active');
		$(this).find('.dropdown-menu').slideUp(300);
	});
	$('.dropdown .dropdown-menu__el').click(function () {
		var parent = $(this).parents('.dropdown')
		parent.find('.dropdown-current__val').html($(this).html());
		parent.find('input').attr('value', $(this).data('value'));
	});
	// dropdown === end




	// scroll to id
	var offsetId = $(document).width() < 769 ? 50 : 58
	$("a[rel='m_PageScroll2id']").mPageScroll2id({
		offset: offsetId,
		highlightClass: "nav__el--active",
		onComplete: function () {
			$('.slide-block').removeClass('slide-block--open');
			$('.head-toggle').removeClass('slide-block-toggle--open');
		}
	});

	$('.slider-card').slick({
		slidesToShow: 1,
		speed: 500,
		dots:true,
		arrows:false,
		rows:0,
		adaptiveHeight:true,
		// убирает вложенный пустой div
		//autoplay: true,
		//fade: true
		//autoplaySpeed: 8000, time between
		customPaging : function(slider, i) {
			return '<span class="dot"></span>';
		}
	});

	// gallery
	$('.gallery-slider').each(function(){
		$(this).slick({
			slidesToShow: 1,
			speed: 500,
			dots:false,
			arrows:false,
			asNavFor: '.gallery-slider-nav',
			draggable:false
		});
		var curent = $(this)
		var child = $(this).closest('.card-img').find('.gallery-slider-nav')
		child.slick({
			slidesToShow: 3,
			speed: 500,
			dots:false,
			arrows:false,
			rows:0,
			asNavFor: curent,
			focusOnSelect: true,

		});
	})
	// gallery === end

	// review slider
	$('.slider-review').slick({
		slidesToShow: 1,
		speed: 500,
		dots:true,
		arrows: false,
		focusOnSelect: true,
		adaptiveHeight:true,
		customPaging : function(slider, i) {
			return '<span class="dot"></span>';
		}
	});
	// review slider === end

	// partner slider
	$('.slider-partner').slick({
		slidesToShow: 5,
		speed: 500,
		arrows: false,
		customPaging : function(slider, i) {
			return '<span class="dot"></span>';
		},
		responsive: [
			{
				breakpoint: 800,
				settings: {
					arrows: false,
					centerMode: true,
					slidesToShow: 3,
					slidesToScroll: 3,
					dots:false
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});
	// partner slider === end

// === Высота слайда при динамическом контенте === end


	// === custom arrow el ===
	$('.slider-control--right').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickNext');
	});

	$('.slider-control--left').click(function(){
		$(this).closest(".slider-wrap").find(".slider-item").slick('slickPrev');
	});
	// custom arrow el === end


	// fancyBox
	$('.fancybox').fancybox();
	// fancyBox === end

	// slide menu
	$('.js-slide-block-toggle').click(function (event) {
		$(".js-slide-block-toggle").not(this).removeClass('slide-block-toggle--open');
		var current = $(this).data("menu");
		$(".slide-block").each(function () {
			if ($(this).data("menu") === current) {
				$(this).toggleClass("slide-block--open")
			} else {
				$(this).removeClass("slide-block--open")
			}
		})
		$(this).toggleClass('slide-block-toggle--open');
	});
	// slide menu === end

	// tech constructor
	if($(window).width() > 961){
	setTimeout(function(){
	
	// tech constructor === end
	var configShow = {
		color: '#34b525',
		size:4,
		path:'grid',
		startPlug: 'square',
		endPlug: 'behind',
	}
	var config = {
		color: '#34b525',
		size:4,
		path:'grid',
		startPlug: 'square',
		endPlug: 'behind',
		'hide':true
	}

	var construction = new LeaderLine(
		document.getElementById('pinConstruction'),
		document.getElementById('boxConstruction'),
		configShow
	)
	construction.nameLine = 'construction';
	var tire = new LeaderLine(
		document.getElementById('pinTire'),
		document.getElementById('boxTire'),
		config
	)
	tire.nameLine = 'tire';
	var engine = new LeaderLine(
		document.getElementById('pinEngine'),
		document.getElementById('boxEngine'),
		config
	)
	engine.nameLine = 'engine';
	var paint = new LeaderLine(
		document.getElementById('pinPaint'),
		document.getElementById('boxPaint'),
		config
	)
	paint.nameLine = 'paint';
	var gearbox = new LeaderLine(
		document.getElementById('pinGearbox'),
		document.getElementById('boxGearbox'),
		config
	)
	gearbox.nameLine = 'gearbox';
	var lineArray = [construction,tire,engine,paint,gearbox]
	
	var techConstuctor = function(value){
		var listItem = ['.tech-list__el','.tech-img__el','.tech-point']
		listItem.forEach(function(item){
			$(item).each(function(){
				if($(this).data('item') != value){
					$(this).removeClass('active')
				}else{
						$(this).addClass('active')
				}
			})
		})

	}
	console.log(engine);
	$('.tech-list__el').add('.tech-point').click(function(){
		var current = $(this).data('item');
		techConstuctor(current)
		lineArray.forEach(function(item){
			//console.log(item.nameLine);
			if(item.nameLine == current ){
				item.show({
				})
			}else{
				item.hide({
				})
			}
		})
	});
	
	
	},10)
	}

});

