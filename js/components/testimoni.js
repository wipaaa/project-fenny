const testimoni = document.querySelector('.testimoni');
const testimoniContainer = testimoni.querySelector('.testimoni-container');
const testimoniNavNext = testimoni.querySelector('.testimoni-nav-next');
const testimoniNavPrev = testimoni.querySelector('.testimoni-nav-prev');

export default function (options) {
	new Swiper(`.${testimoniContainer.className.split(' ')[0]}`, {
		autoplay: true,
		delay: 2000,
		disableOnInteraction: true,
		enabled: true,
		navigation: {
			nextEl: `.${testimoniNavNext.className}`,
			prevEl: `.${testimoniNavPrev.className}`,
		},
		pauseOnMouseEnter: true,
		slidesPerView: options.slides,
		spaceBetween: 10,
	});
}
