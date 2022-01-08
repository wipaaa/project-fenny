const banner = document.querySelector('.banner');
const bannerContainer = banner.querySelector('.banner-container');
const bannerNavNext = banner.querySelector('.banner-nav-next');
const bannerNavPrev = banner.querySelector('.banner-nav-prev');

export default function (options) {
	new Swiper(`.${bannerContainer.className.split(' ')[0]}`, {
		autoplay: true,
		delay: 2000,
		disableOnInteraction: true,
		enabled: true,
		navigation: {
			nextEl: `.${bannerNavNext.className}`,
			prevEl: `.${bannerNavPrev.className}`,
		},
		pauseOnMouseEnter: true,
		slidesPerView: options.slides,
		spaceBetween: 10,
	});
}
