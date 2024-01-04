// Focus trap for when the listbox options are open
export function focusTrap(container: HTMLElement | null) {
	if (!container) {
		return;
	}

	const focusableElements: NodeListOf<HTMLElement> = container?.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])');
	const firstFocusableElement = focusableElements[0];
	const lastFocusableElement = focusableElements[focusableElements.length - 1];

	container?.addEventListener('keydown', function (event) {
		var isTabPressed = event.key === 'Tab';

		if (!isTabPressed) {
			return;
		}

		if (event.shiftKey) {
			/* shift + tab */ if (document.activeElement === firstFocusableElement) {
				lastFocusableElement.focus();
				event.preventDefault();
			}
		} /* tab */ else {
			if (document.activeElement === lastFocusableElement) {
				firstFocusableElement.focus();
				event.preventDefault();
			}
		}
	});
}
