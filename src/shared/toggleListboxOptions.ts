// Function to toggle the visibility of checkbox options

import { focusTrap } from './focusTrap';

export function toggleListboxOptions(listboxContainer: HTMLElement | null, listboxOptionsList: HTMLElement | null) {
	const isHidden = listboxOptionsList?.getAttribute('aria-hidden') === 'true';

	listboxContainer?.setAttribute('aria-expanded', String(isHidden));
	listboxOptionsList?.setAttribute('aria-hidden', String(!isHidden));

	if (isHidden) {
		focusTrap(listboxOptionsList);
	}
}
