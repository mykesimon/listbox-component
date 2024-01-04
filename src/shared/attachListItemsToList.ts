import { submitForm } from '../shared/formSubmit.ts';
import { renderCheckboxes } from '../shared/renderCheckboxes.ts';
import { toggleListboxOptions } from '../shared/toggleListboxOptions.ts';
import { closeDropdown } from '../shared/closeDropdown.ts';
import { clearAll } from '../shared/clearAllBtn.ts';

export function attachListItemsToList() {
	const listboxContainer = document.getElementById('listbox__container');
	const listboxTrigger = document.getElementById('listbox__trigger');
	const listboxOptionsList = document.getElementById('listbox__options-list');
	const eventsFilterForm = document.getElementById('custom-events-filter-form');
	const clearAllBtn = document.getElementById('clear-all-btn');

	// Render all the checkboxes
	renderCheckboxes(listboxOptionsList);

	// Add Event Listener to the checkbox trigger to toggle the checkbox options
	listboxTrigger?.addEventListener('click', () => {
		toggleListboxOptions(listboxContainer, listboxOptionsList);
	});

	listboxTrigger?.addEventListener('keydown', (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			toggleListboxOptions(listboxContainer, listboxOptionsList);
		}
	});

	// Add Submit Listener to the form when it submitted
	eventsFilterForm?.addEventListener('submit', submitForm);

	// Add event listener to the clear button to clear all checkboxes
	clearAllBtn?.addEventListener('click', clearAll);

	closeDropdown(listboxContainer, listboxOptionsList);
}
