import { selectAll, deselectAll } from "./requests-data.js";
import { updatePage, generatePaginator } from "./pagination.js";

function toggleSelectionAll() {
  const selectAllCheckbox = document.querySelector("#select-all");

  const allCheckboxes = document.querySelectorAll(".select");
  allCheckboxes.forEach((checkbox) => {
    checkbox.checked = selectAllCheckbox.checked ? true : false;
  });

  checkbox.checked ? selectAll() : deselectAll();

  window.localStorage.setItem("selectAll", selectAllCheckbox.checked);
}

const checkbox = document.querySelector("#select-all");
checkbox.addEventListener("change", toggleSelectionAll);

if (window.localStorage.getItem("selectAll") === "true") {
  checkbox.checked = true;
  toggleSelectionAll();
}

generatePaginator();
updatePage();
