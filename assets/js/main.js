import {createRequestsCards} from "./request-card.js";
import {getRequestsRange} from "./requests-data.js";

createRequestsCards(getRequestsRange('Omar Al-Khatib', 0, 4));

const headers = document.querySelectorAll(".card-header");
headers.forEach((header) => {
    header.style.display = "none";
});

var link = document.querySelector("link[rel~='icon']");
console.log(link)
link.href = "assets/images/favicon.ico";