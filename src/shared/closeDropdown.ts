// Close the checkbox options
import { toggleClearAllButton } from './clearAllBtn';
import { enableSubmitBtn } from './enableSubmitBtn';
import { updateEventsCount } from './updateEventsCount';

export function closeDropdown(listboxContainer: HTMLElement | null, listboxOptionsList: HTMLElement | null) {
	// Close the checkbox options when clicking outside of the container
	document.addEventListener('click', function (event) {
		if (!listboxContainer?.contains(event.target as Node) && !listboxOptionsList?.contains(event.target as Node)) {
			listboxContainer?.setAttribute('aria-expanded', 'false');
			listboxOptionsList?.setAttribute('aria-hidden', 'true');
		}

		toggleClearAllButton();
		updateEventsCount();
		enableSubmitBtn();
	});

	// Close the checkbox options when pressing the escape key
	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape') {
			if (listboxOptionsList?.getAttribute('aria-hidden') === 'false') {
				listboxContainer?.setAttribute('aria-expanded', 'false');
				listboxOptionsList.setAttribute('aria-hidden', 'true');
			}
		}
	});
}
