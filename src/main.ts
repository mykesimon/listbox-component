import { attachListItemsToList } from './shared/attachListItemsToList.ts';

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <form id="custom-events-filter-form">
    <div id="listbox__container" role="combobox" aria-expanded="false" aria-haspopup="listbox"
      aria-labelledby="checkboxContainerLabel">
      <span id="listbox__trigger" tabindex="0">Select event(s)
        <span aria-hidden="true" id="listbox__counter-container">
          <span id="listbox__counter"></span> <span class="hide-mobile">selected</span></span>
      </span>
      <ul id="listbox__options-list" role="listbox" aria-hidden="true"></ul>
    </div>
    <div class="listbox__actions">
      <button disabled type="submit" id="submit-btn">Submit</button>
      <button type="button" id="clear-all-btn" aria-hidden="true">Clear All</button>
    </div>
  </form>
`;

attachListItemsToList();
