import {generateNavbar} from "./navbar.js";
import {createRequestsCards} from "./request-card.js";
import {getRequestsRange} from "./requests-data.js";

generateNavbar();

createRequestsCards(getRequestsRange(0, 4));

const headers = document.querySelectorAll(".card-header");
headers.forEach((header) => {
    header.style.display = "none";
});
