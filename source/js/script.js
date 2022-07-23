$(document).ready(function() { 
  $('.portfolio__list').slick({
		infinite: true,
		speed: 300,     
		arrows: false,
		dots: true,
		centerMode: true,
		centerPadding: '120px',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [ 	
		{
			breakpoint: 1200,
			settings: {
				arrows: true,
				dots: true,
				slidesToShow: 2,
				slidesToScroll: 1,
				centerMode: false,
			}
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				arrows: true,
				dots: true,				
			}
		}

		]
	});

  $('.master__list').slick({
		infinite: true,
		speed: 300,     
		arrows: false,
		dots: true,
		centerMode: true,
		centerPadding: '95px',
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [ 	
		{
			breakpoint: 1400,
			settings: {
				arrows: false,
				dots: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				centerMode: false,
			}
		},

		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				centerMode: false,
				arrows: true,
				dots: true,				
			}
		}
		]
	});

	$('.master__list').on('setPosition', function (event, slick) {
		slick.$slides.css('height', slick.$slideTrack.height() + 'px');
	});

  $('.advantage__list').slick({
    infinite: true,
    speed: 300,   
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [ 	
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        arrows: false,
      }
    },

	{
		breakpoint: 1200,
		settings: {
		  arrows: false,
		}
	  },

    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        arrows: true,		
      }
    }

    ]
  });

});