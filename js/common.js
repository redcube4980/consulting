// JavaScript Document
$(function() {
	$('.hamburger').on('click', function(){
		$('header').toggleClass('OpenNav');
		$('header #header-navi').slideToggle(375);
		$('header #header-navi ul').fadeToggle(375);
	});
});
	
var startPos = 0,winScrollTop = 0;
$(window).on('scroll',function(){
    winScrollTop = $(this).scrollTop();
    if (winScrollTop >= 400) {
		if(winScrollTop >= 400){
        $('header').addClass('header-bg');
		} 
    } else {
        $('header').removeClass('header-bg');
    }
    startPos = winScrollTop;
});

var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
	autoplay: {
		delay:3000,
		stopONLast:false,
		disableOnInteraction:false,
	},
	speed: 3000,
	slidesPerView: 1,
	// slidesPerView: 1.2, // 何枚のスライドを表示するか
    spaceBetween: 0, // スライド間の余白サイズ(ピクセル)
    direction: 'vertical', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'fade', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
	//
	allowTouchMove: false,
	freeModeMomentumBounce: false,
	initialslide:1,
	calculateHeight: true,
	centeredSlides : true,
	preloadImages: true, 
	observer: true,
	observeParents: true,
	//Enable lazy loading 
	lazy: { loadPrevNext: true,
		  	loadPrevNextAmount :1,
		   	loadOnTransitionStart: true,
		   	elementClass :'swiper-lazy' ,
		   	preloaderClass:'swiper-lazy-preloader' 
		  },
	breakpoints: {
    // when window width is <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 960px
    960: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 1400px
    1400: {
      slidesPerView: 1,
      spaceBetween: 0
    },
	// when window width is <= 1980px
    1980: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  	},
})
var mySwiper = new Swiper ('.swiper-container2', {
    loop: true,
	autoplay: {
		delay:3000,
		stopONLast:false,
		disableOnInteraction:false,
	},
	speed: 3000,
	slidesPerView: 'auto',
	// slidesPerView: 1.2, // 何枚のスライドを表示するか
    spaceBetween: 0, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'fade', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
	//
	freeModeMomentumBounce: false,
	initialslide:1,
	calculateHeight: true,
	centeredSlides : true,
	preloadImages: true, 
	observer: true,
	observeParents: true,
	//Enable lazy loading 
	lazy: { loadPrevNext: true,
		  	loadPrevNextAmount :1,
		   	loadOnTransitionStart: true,
		   	elementClass :'swiper-lazy' ,
		   	preloaderClass:'swiper-lazy-preloader' 
		  },
	breakpoints: {
    // when window width is <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 960px
    960: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 1400px
    1400: {
      slidesPerView: 1,
      spaceBetween: 0
    },
	// when window width is <= 1980px
    1980: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  	},
	pagination: {
    el: '.swiper-pagination2',　 // ページネーションを表示するセレクタ
	clickable: 'true',
	clickableClass: 'swiper-pagination-clickable',
    },
})
var mySwiper = new Swiper ('.swiper-container3', {
    loop: true,
	autoplay: {
		delay:3000,
		stopONLast:false,
		disableOnInteraction:false,
	},
	speed: 3000,
	slidesPerView: 'auto',
	// slidesPerView: 1.2, // 何枚のスライドを表示するか
    spaceBetween: 0, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'fade', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
	//
	freeModeMomentumBounce: false,
	initialslide:1,
	calculateHeight: true,
	centeredSlides : true,
	preloadImages: true, 
	observer: true,
	observeParents: true,
	//Enable lazy loading 
	lazy: { loadPrevNext: true,
		  	loadPrevNextAmount :1,
		   	loadOnTransitionStart: true,
		   	elementClass :'swiper-lazy' ,
		   	preloaderClass:'swiper-lazy-preloader' 
		  },
	breakpoints: {
    // when window width is <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 960px
    960: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 1400px
    1400: {
      slidesPerView: 1,
      spaceBetween: 0
    },
	// when window width is <= 1980px
    1980: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  	},
	pagination: {
    el: '.swiper-pagination3',　 // ページネーションを表示するセレクタ
	clickable: 'true',
	clickableClass: 'swiper-pagination-clickable',
    },
})
var mySwiper = new Swiper ('.swiper-container4', {
    loop: true,
	autoplay: {
		delay:3000,
		stopONLast:false,
		disableOnInteraction:false,
	},
	speed: 3000,
	slidesPerView: 'auto',
	// slidesPerView: 1.2, // 何枚のスライドを表示するか
    spaceBetween: 0, // スライド間の余白サイズ(ピクセル)
    direction: 'horizontal', // スライド方向。 'horizontal'(水平) か 'vertical'(垂直)。effectオプションが 'slide' 以外は無効。
    effect: 'fade', // "slide", "fade"(フェード), "cube"(キューブ回転), "coverflow"(カバーフロー) または "flip"(平面回転)
	//
	freeModeMomentumBounce: false,
	initialslide:1,
	calculateHeight: true,
	centeredSlides : true,
	preloadImages: true, 
	observer: true,
	observeParents: true,
	//Enable lazy loading 
	lazy: { loadPrevNext: true,
		  	loadPrevNextAmount :1,
		   	loadOnTransitionStart: true,
		   	elementClass :'swiper-lazy' ,
		   	preloaderClass:'swiper-lazy-preloader' 
		  },
	breakpoints: {
    // when window width is <= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 960px
    960: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is <= 1400px
    1400: {
      slidesPerView: 1,
      spaceBetween: 0
    },
	// when window width is <= 1980px
    1980: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  	},
	pagination: {
    el: '.swiper-pagination4',　 // ページネーションを表示するセレクタ
	clickable: 'true',
	clickableClass: 'swiper-pagination-clickable',
    },
})
