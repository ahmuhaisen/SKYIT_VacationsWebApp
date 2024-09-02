import {
  vacationRequests,
  getRequestsRange,
} from "./requests-data.js";

import { createRequestsCards } from "./request-card.js";

const totalNumberOfRequests = vacationRequests.length;
const requestPerPage = 4;
const numberOfPages = Math.ceil(totalNumberOfRequests / requestPerPage);
let currentPage = 1;



function generatePaginator() {
  const paginationContainer = document.querySelector(".pagination"); //The ul element
  paginationContainer.innerHTML = "";

  const createPageItem = (page, isCurrent = false) => {
    const li = document.createElement("li");
    li.className = `page-item`;

    const a = document.createElement("a");
    a.className = `page-link ${isCurrent ? "current" : ""}`;
    a.href = "#";
    a.textContent = page;
    a.addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage !== page) {
        currentPage = page;
        updatePage();
      }
    });

    li.appendChild(a);
    return li;
  };

  const prevLi = document.createElement("li");
  prevLi.className = `page-item previous`;
  const prevLink = document.createElement("a");
  prevLink.className = "page-link";
  prevLink.href = "#";
  prevLink.innerHTML =
    '<span aria-hidden="true"><i class="bi bi-chevron-left"></i></span>';
  prevLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      updatePage();
    }
  });
  prevLi.appendChild(prevLink);
  paginationContainer.appendChild(prevLi);

  for (let i = 1; i <= numberOfPages; i++) {
    paginationContainer.appendChild(createPageItem(i, i === currentPage));
  }

  const nextLi = document.createElement("li");
  nextLi.className = `page-item next`;
  const nextLink = document.createElement("a");
  nextLink.className = "page-link";
  nextLink.href = "#";
  nextLink.innerHTML =
    '<span aria-hidden="true"><i class="bi bi-chevron-right"></i></span>';
  nextLink.addEventListener("click", (e) => {
    e.preventDefault();
    if (currentPage < numberOfPages) {
      currentPage++;
      updatePage();
    }
  });
  nextLi.appendChild(nextLink);
  paginationContainer.appendChild(nextLi);
}

function updatePager() {
  console.log("IN UPDATE PAGER");
  let pageLinks = document.querySelectorAll(".page-link");

  pageLinks.forEach((pageLink) => {
    pageLink.classList.remove("current");
    if (pageLink.textContent == currentPage) {
      pageLink.classList.add("current");
    }
  });

  if (currentPage >= numberOfPages)
    document.querySelector(".next").classList.add("disabled");
  else document.querySelector(".next").classList.remove("disabled");

  if (currentPage <= 1)
    document.querySelector(".previous").classList.add("disabled");
  else document.querySelector(".previous").classList.remove("disabled");
}

function updatePage() {
  updatePager();
  createRequestsCards(
    getRequestsRange(
      '', 
      (currentPage - 1) * requestPerPage,
      currentPage * requestPerPage
    )
  );
}

export { generatePaginator, updatePage };
