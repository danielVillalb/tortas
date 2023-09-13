
// $('.galeria').slick({
//     dots: true,
//     infinite: false,
//     pauseOnHover:true,
//     arrows:false,
//     speed: 300,
//     slidesToShow: 2,
//     slidesToScroll: 2,
//     focusOnSelect:true,
//     // // autoplay:true,
//     // // autoplaySpeed:3000,
//     // responsive: [
//     //     {
//     //         breakpoint: 1024,
//     //         settings: {
//     //             slidesToShow: 3,
//     //             slidesToScroll: 3,
//     //             infinite: false

//     //         }
//     //     },
//     //     {
//     //         breakpoint: 600,
//     //         settings: {
//     //             slidesToShow: 2,
//     //             slidesToScroll: 2
//     //         }
//     //     },
//     //     {
//     //         breakpoint: 480,
//     //         settings: {
//     //             slidesToShow: 1,
//     //             slidesToScroll: 1,
//     //             infinite:true
//     //         }
//     //     }
//     //     // You can unslick at a given breakpoint now by adding:
//     //     // settings: "unslick"
//     //     // instead of a settings object
//     // ]
// });
$('.galeria').slick({
    slidesToShow: 2,
    dots:true,
    slidesToScroll: 1,
    autoplay: false,
    arrows:false,
    autoplaySpeed: 2000,
    infinite:true,
    responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite:true
        
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite:true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite:true
                    }
                }
            ]
});








