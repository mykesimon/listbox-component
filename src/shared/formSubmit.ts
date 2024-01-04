// Function to submit the form
export function submitForm(event: Event) {
	event.preventDefault();
	const selectedIds = Array.from(document.querySelectorAll<HTMLInputElement>('input[name="events"]:checked'))
		.map(checkbox => checkbox.value)
		.join(', ');

	if (selectedIds.length > 0) {
		// Do something with the selected IDs
		alert('Selected IDs: ' + selectedIds);
	} else {
		alert('No events selected');
	}
}
