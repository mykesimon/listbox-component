# Listbox component

[![Listbox closed](https://i.ibb.co/9nqB0CG/Listbox-1.png)](https://i.ibb.co/9nqB0CG/Listbox-1.png)

[![Listbox open](https://i.ibb.co/3S2bxb3/Listbox-2.png)](https://i.ibb.co/3S2bxb3/Listbox-2.png)

Listbox(select) with the option to select multiple values. It mimics a select input dropdown and it's complete with robust support for keyboard navigation and accessible for screenreaders.

- Every time an event is selected, it will add a counter to the select component. On desktop it will show "XX selected" while on small devices will show just the number.
- Currently, when the form is submitted it will alert the IDs of the selected events. Eventually you want to submit to an API. The Submit button is disabled until at least one event is selected.
- I have added a "Clear All" button so that the user can easily clear all the event selected. I think it's a nice-to-have functionality when using a multiple selector.
- When the dropdown is open, click anywhere on the screen, on the select input or press ESC to close the dropdown.

### Keyboard navigation instructions:

When navigating with keyboard:

- Open the dropdown with ENTER.
- Navigate with TAB through the options. I added a focus trap to keep then navigation within the dropdown options.
- Select/deselect an event using SPACE.
- Close the dropdown using ESC.
- Use the Up/Down arrows to scroll inside the dropdown.
- If click ENTER when the dropdown is open and at least one event is selected, the form will submit. This is the natural behavior of forms. I left as it is but it can be modified.

## Getting Started

To run application:

1. Run `npm install` in this folder
2. Run `npm run dev` in this folder.

After this there should be two applications running:

- Front-end: http://localhost:5173/

### Notes

This exercise has been created using [vite](https://vitejs.dev/) with the [TypeScript template](https://vitejs.dev/guide/features.html#typescript).
