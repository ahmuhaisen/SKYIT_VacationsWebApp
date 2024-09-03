import { getRequestsByFilter } from "./requests-data.js";
import { getDurationText } from "./request-card.js";

function createSearchResult(request) {
  const searchResult = document.createElement("div");
  searchResult.className = "search-result row py-2 border-bottom";

  const colLeft = document.createElement("div");
  colLeft.className = "col-md-6 col-sm-12 p-0 d-flex align-items-center";

  const profileImage = document.createElement("img");
  profileImage.src = `assets/images/${request.profileImage}`;
  profileImage.className = "rounded-circle";
  profileImage.width = 60;
  profileImage.height = 60;

  const textContainer = document.createElement("div");
  textContainer.className = "ms-2";

  const nameElement = document.createElement("p");
  nameElement.className = "m-0 fw-bold";
  nameElement.textContent = request.name;

  const departmentElement = document.createElement("p");
  departmentElement.className = "m-0 text-muted";
  departmentElement.textContent = "HR Department";

  const colRight = document.createElement("div");
  colRight.className = "col-md-6 col-sm-12 p-0 text-end";

  const submittedOnElement = document.createElement("p");
  submittedOnElement.className = "m-0";
  submittedOnElement.innerHTML = `Submitted On: <span class="search-date text-success">${request.submittedOn}</span>`;

  const durationElement = document.createElement("p");
  durationElement.className = "m-0";
  durationElement.innerHTML = `Duration: <span class="duration text-success">${getDurationText(
    request.duration
  )}</span>`;

  textContainer.appendChild(nameElement);
  textContainer.appendChild(departmentElement);

  colLeft.appendChild(profileImage);
  colLeft.appendChild(textContainer);

  colRight.appendChild(submittedOnElement);
  colRight.appendChild(durationElement);

  searchResult.appendChild(colLeft);
  searchResult.appendChild(colRight);

  return searchResult;
}

function createSearchModal(searchTerm, results, isThereMore) {
  document.querySelector(".modal")?.remove();

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "search-modal";
  modal.tabIndex = -1;

  const modalDialog = document.createElement("div");
  modalDialog.className = "modal-dialog w-75";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";

  const modalTitle = document.createElement("h5");
  modalTitle.className = "modal-title";
  modalTitle.innerHTML = `Search Results for "<span class="h5 text-success">${searchTerm}</span>"`;

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "btn-close";
  closeButton.setAttribute("data-bs-dismiss", "modal");
  closeButton.setAttribute("aria-label", "Close");

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body px-4";

  modalBody.append(...results);

  if (results.length === 0) {
    modalBody.innerHTML =
      '<p class="text-center text-secondary m-0">No results found.</p>';
  }

  if (isThereMore) {
    const loadMoreButton = document.createElement("a");
    loadMoreButton.href = "vacation-requests.html";
    loadMoreButton.className = "btn btn-success btn-sm w-100 mt-3";
    loadMoreButton.textContent = "See More";
    modalBody.appendChild(loadMoreButton);
  }

  modalHeader.appendChild(modalTitle);
  modalHeader.appendChild(closeButton);

  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);

  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);

  document.body.appendChild(modal);

  return modal;
}

function showSearchModal(searchTerm, results, isThereMore = false) {
  createSearchModal(searchTerm, results, isThereMore);

  var myModal = new bootstrap.Modal(document.querySelector(".modal"), {
    keyboard: false,
  });

  myModal.toggle();
}

function doSearch(searchTerm) {
  console.log(searchTerm);

  if (searchTerm == "") return;

  let searchResults = getRequestsByFilter(searchTerm);

  let isThereMore = false;

  if (searchResults.length >= 4) {
    searchResults = searchResults.slice(0, 4);
    isThereMore = true;
  }

  const results = searchResults.map((request) => createSearchResult(request));

  showSearchModal(searchTerm, results, isThereMore);
}

const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", () => {
  let searchButton = document.querySelector(".search-button");

  if (!searchInput.value) searchButton.setAttribute("hidden", true);
  else searchButton.removeAttribute("hidden");
});

const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  let searchTerm = document.querySelector("#search-input").value;
  doSearch(searchTerm);

  document.querySelector("#search-input").value = "";
  searchButton.setAttribute("hidden", true);
});
