// Function to toggle the visibility of the "Clear All" button
export function toggleClearAllButton() {
	const clearAllBtn = document.getElementById('clear-all-btn');
	const checkboxes = document.querySelectorAll('input[name="events"]:checked');

	if (checkboxes.length > 0) {
		clearAllBtn?.setAttribute('aria-hidden', 'false');
	} else {
		clearAllBtn?.setAttribute('aria-hidden', 'true');
	}
}

// Function to clear all checkboxes
export function clearAll() {
	const checkboxes = document.querySelectorAll('input[name="events"]');
	checkboxes.forEach(checkbox => {
		(checkbox as HTMLInputElement).checked = false;
	});

	toggleClearAllButton();
}
