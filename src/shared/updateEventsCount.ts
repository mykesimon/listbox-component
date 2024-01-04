// Function to show and update the number of event selected
export function updateEventsCount() {
	const eventsSelectedCounterContainer = document.getElementById('listbox__counter-container');
	const eventsSelectedCounter = document.getElementById('listbox__counter');
	const checkboxes = document.querySelectorAll('input[name="events"]:checked');

	if (checkboxes.length > 0) {
		eventsSelectedCounter!.textContent = `${checkboxes.length}`;

		eventsSelectedCounterContainer?.setAttribute('aria-hidden', 'false');
	} else {
		eventsSelectedCounterContainer?.setAttribute('aria-hidden', 'true');
	}
}
