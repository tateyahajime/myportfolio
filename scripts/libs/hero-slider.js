
// class HeroSlider {
//   constructor() {
//     this.swiper = new Swiper ('.swiper-container', {
//       // Optional parameters
//       // direction: 'vertical',
//       loop: true,
//       grabCursor: true,
//       //↑カーソルが手のひらマークになる
//       effect: "coverflow",
//       centeredSlides: true,
//       //↑スライダーが中央揃えになる 2枚以上表示する時に
//       slidesPerView: 1,
//       //↑今表示しているviewに何枚表示するか？
//       speed: 1000,
//       //↑スライダーの写真の切り替えの時間
//       breakpoints: {
//         //↑表示しているブラウザのサイズで切り替えをする
//         1024: {
//           slidesPerView: 2,
//         }
//       },
//       autoplay: {
//         //↑スライダーが自動で動く様になる
//         delay: 4000,
//         disableOnInteraction: false
//         //↑マウスでスライダーを動かした後でもautoplayが発動する これがないとマウスで動かした後はautoplayは発動しなくなる
//       }
//     });
//   }
// }


class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper (this.el, {
      // Optional parameters
      // direction: 'vertical',
      loop: true,
      grabCursor: true,
      //↑カーソルが手のひらマークになる
      effect: "coverflow",
      centeredSlides: true,
      //↑スライダーが中央揃えになる 2枚以上表示する時に
      slidesPerView: 1,
      //↑今表示しているviewに何枚表示するか？
      speed: 1000,
      //↑スライダーの写真の切り替えの時間
      breakpoints: {
        //↑表示しているブラウザのサイズで切り替えをする
        1024: {
          slidesPerView: 2,
        }
      },
      // autoplay: {
      //   //↑スライダーが自動で動く様になる
      //   delay: 4000,
      //   disableOnInteraction: false
      //   //↑マウスでスライダーを動かした後でもautoplayが発動する これがないとマウスで動かした後はautoplayは発動しなくなる
      // }
    });
  }

  start(options = {}) {
    options = Object.assign({
      delay: 4000,
      disableOnInteraction: false
    },options);
    //autoplayのon offを切り替えられる様別で定義する
    this.swiper.params.autoplay = options
    this.swiper.autoplay.start();
  }
  stop() {
    this.swiper.autoplay.stop();

  }
}