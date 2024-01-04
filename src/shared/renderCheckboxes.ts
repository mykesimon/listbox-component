import { EVENTS } from '../eventsData.ts';

// Function to render checkboxes dynamically
export function renderCheckboxes(listboxOptionsList: HTMLElement | null) {
	if (listboxOptionsList) {
		EVENTS.forEach(event => {
			const listboxContainer = document.createElement('li');
			listboxContainer.classList.add('listbox__option-item');

			const checkbox = document.createElement('input');
			checkbox.type = 'checkbox';
			checkbox.name = 'events';
			checkbox.value = event.id.toString();
			checkbox.id = `event${event.id}`;

			const label = document.createElement('label');
			label.htmlFor = `event${event.id}`;
			label.appendChild(document.createTextNode(`${event.title} - ${event.date}`));

			listboxContainer.appendChild(checkbox);
			listboxContainer.appendChild(label);

			listboxOptionsList.appendChild(listboxContainer);
		});
	}
}
