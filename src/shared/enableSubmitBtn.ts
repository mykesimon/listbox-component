export function enableSubmitBtn() {
	const submitBtn = document.getElementById('submit-btn');
	const checkboxes = document.querySelectorAll('input[name="events"]:checked');

	if (checkboxes.length > 0) {
		submitBtn?.removeAttribute('disabled');
	} else {
		submitBtn?.setAttribute('disabled', 'true');
	}
}
