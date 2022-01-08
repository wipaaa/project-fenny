const dropdowns = document.querySelectorAll('.dropdown');

export default function () {
	function dropdownOnClickHandler(target) {
		console.log(target);
		const isActive = target.classList.contains('active');

		dropdowns.forEach((dropdown) => {
			dropdown.classList.remove('active');
		});

		target.classList[isActive ? 'remove' : 'add']('active');
	}

	dropdowns.forEach((dropdown) => {
		const targetToggle = dropdown.querySelector('button');

		targetToggle.addEventListener(
			'click',
			dropdownOnClickHandler.bind(null, dropdown)
		);
	});
}
